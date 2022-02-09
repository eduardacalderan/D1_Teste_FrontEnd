import { useContext } from "react";
import { Button } from "../Button";
import { JourneysContext } from "../../contexts/JourneysContext";

export function FilterItem() {
  const { filters, selectedFilterId, setSelectedFilterId } =
    useContext(JourneysContext);

  function handleClickButton(id: number) {
    setSelectedFilterId(id);
  }

  return (
    <div>
      {filters.map((filter) => (
        <Button
          key={filter.name}
          name={filter.name}
          quantity={filter.quantity}
          onClick={() => handleClickButton(filter.id)}
          selected={selectedFilterId === filter.id}
        />
      ))}
    </div>
  );
}
