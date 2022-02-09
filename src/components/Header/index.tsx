import styles from "./styles.module.scss";
import acmeImg from "../../assets/acme.png";
import { AiOutlinePlus } from "react-icons/ai";
import { VscSearch } from "react-icons/vsc";
import ReactTooltip from "react-tooltip";

interface HeaderProps {
  onOpenNewJourneyModal: () => void;
}

export function Header({ onOpenNewJourneyModal }: HeaderProps) {
  return (
    <header>
      <div className={styles.container}>
        <div className={styles.leftContent}>
          <div
            className={styles.user}
            data-tip="Antônio da Silva"
            data-for="tooltipUser"
          >
            <p>
              <span>A</span>
            </p>
          </div>
          <ReactTooltip
            id="tooltipUser"
            place="right"
            effect="solid"
            textColor="#fff"
            backgroundColor="var(--bg-side-bar)"
          />
          <div className={styles.acme}>
            {" "}
            <img src={acmeImg} alt="ACME" />
          </div>
        </div>

        <div className={styles.search}>
          <i>
            <VscSearch />
          </i>
          <input type="text" placeholder="Buscar" />
          <button type="button" onClick={onOpenNewJourneyModal}>
            <AiOutlinePlus />
            Nova Jornada
          </button>
        </div>
      </div>
    </header>
  );
}
