import { useContext } from "react";
import { JourneysTable } from "../JourneysTable";

import styles from "./styles.module.scss";
import { JourneysContext } from "../../contexts/JourneysContext";
import { FilterItem } from "../FilterItem";
import { Icons } from "../IconsFilter";

export function Dashboard() {
  const { journeys } = useContext(JourneysContext);

  return (
    <div className={styles.container}>
      <div className={styles.title}>
        <h2>Jornadas</h2>
      </div>
      <div className={styles.content}>
        <div className={styles.filterContent}>
          <div className={styles.filter}>
            <Icons />
            <FilterItem />
          </div>
        </div>

        <div className={styles.journeys}>
          <table>
            <thead>
              <tr
                style={{
                  color: "#9196AB",
                  fontWeight: "normal",
                  padding: "0 1rem",
                }}
              >
                <th
                  style={{
                    fontWeight: "normal",
                    textAlign: "left",

                    padding: "0 1rem",
                  }}
                >
                  Nome
                </th>
                <th
                  style={{
                    color: "#9196AB",
                    fontWeight: "normal",
                    textAlign: "center",
                    padding: "0 1rem",
                  }}
                >
                  Destinatários
                </th>
                <th
                  style={{
                    color: "#9196AB",
                    fontWeight: "normal",
                    textAlign: "center",
                    padding: "0 2rem",
                  }}
                >
                  Sucesso
                </th>
                <th
                  style={{
                    color: "#9196AB",
                    fontWeight: "normal",
                    textAlign: "left",
                    padding: "0 2rem",
                  }}
                >
                  Status
                </th>
              </tr>
            </thead>
            <tbody>
              {journeys.map((journey) => (
                <JourneysTable
                  key={journey.id}
                  name={journey.name}
                  recipients={journey.recipients}
                  success={journey.success}
                  status={journey.status}
                />
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>

    /* <section className={styles.dashboard}>
      <h2>Jornadas</h2>
      <div className={styles.dashboardContainer}>
        <div className={styles.dashboardContent}>
          <div className={styles.filtersContent}>
            <Icons />

            <div className={styles.filterItem}>
              <FilterItem />
            </div>
          </div>
        </div>
        <div className={styles.journeys}>
          <section className="journeys-container">
            <table>
              <thead>
                <tr
                  style={{
                    color: "#9196AB",
                    fontWeight: "normal",
                  }}
                >
                  <th
                    style={{
                      fontWeight: "normal",
                      textAlign: "left",
                      padding: "0 15px ",
                    }}
                  >
                    Nome
                  </th>
                  <th
                    style={{
                      color: "#9196AB",
                      fontWeight: "normal",
                      textAlign: "center",
                    }}
                  >
                    Destinatário
                  </th>
                  <th
                    style={{
                      color: "#9196AB",
                      fontWeight: "normal",
                      textAlign: "center",
                    }}
                  >
                    Sucesso
                  </th>
                  <th
                    style={{
                      color: "#9196AB",
                      fontWeight: "normal",
                      textAlign: "left",
                    }}
                  >
                    Filter
                  </th>
                </tr>
              </thead>
              <tbody>
                {journeys.map((journey) => (
                  <JourneysTable
                    key={journey.id}
                    name={journey.name}
                    recipients={journey.recipients}
                    success={journey.success}
                    status={journey.status}
                  />
                ))}
              </tbody>
            </table>
          </section>
        </div>
      </div>
    </section> */
  );
}

//name, status, recipients, success, id
