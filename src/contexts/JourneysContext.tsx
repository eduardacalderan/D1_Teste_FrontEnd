import { createContext, ReactNode, useState, useEffect } from "react";
import { api } from "../services/api";

interface FilterResponseProps {
  id: number;
  name: string;
  quantity: number;
}

interface JourneysProps {
  id: string;
  name: string;
  status: number;
  recipients: string;
  success: string;
}

interface MoviesContextData {
  filters: FilterResponseProps[];
  selectedFilter: FilterResponseProps;
  selectedFilterId: number;
  setSelectedFilterId: React.Dispatch<number>;
  journeys: JourneysProps[];
}

interface MoviesProviderProps {
  children: ReactNode;
}

export const JourneysContext = createContext({} as MoviesContextData);

export function JourneysProvider({ children }: MoviesProviderProps) {
  const [filters, setFilters] = useState<FilterResponseProps[]>([]);
  const [selectedFilter] = useState<FilterResponseProps>(
    {} as FilterResponseProps
  );
  const [selectedFilterId, setSelectedFilterId] = useState(0);
  const [journeys, setJourneys] = useState<JourneysProps[]>([]);

  useEffect(() => {
    if (selectedFilterId === 0) {
      api
        .get<JourneysProps[]>(`https://api-d1-test.herokuapp.com/api/journey`)
        .then((response) => {
          setJourneys(response.data);
        });
    } else {
      api
        .get<JourneysProps[]>(`journey/${selectedFilterId}`)
        .then((response) => {
          setJourneys(response.data);
        });
    }
  }, [selectedFilterId]);

  useEffect(() => {
    api.get<FilterResponseProps[]>(`filter/`).then((response) => {
      setFilters(response.data);
    });
  }, [selectedFilterId]);

  return (
    <JourneysContext.Provider
      value={{
        filters,
        selectedFilter,
        selectedFilterId,
        setSelectedFilterId,
        journeys,
      }}
    >
      {children}
    </JourneysContext.Provider>
  );
}
