import { useState } from "react";
import Modal from "react-modal";

import styles from "./styles.module.scss";

interface NewJourneyModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
}

export function NewJourneyModal({
  isOpen,
  onRequestClose,
}: NewJourneyModalProps) {
  const [name, setName] = useState("");

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      overlayClassName="react-modal-overlay"
      className="react-modal-content"
    >
      <div className={styles.backgroundModal}></div>
      <div className={styles.newJourneyContainer}>
        <div className={styles.newJourneyContent}>
          <div>
            <h2>Nova Jornada</h2>
            <div className={styles.border}></div>
            <p>
              Dê um <span>nome</span> para essa Jornada
            </p>
            <input
              value={name}
              onChange={(event) => setName(event.target.value)}
            />
            <p>Você pode alterar essa informação depois.</p>
            <div className={styles.btn}>
              <button type="submit">Cadastrar</button>{" "}
              <button
                type="button"
                onClick={onRequestClose}
                className="react-modal-close"
              >
                Cancelar
              </button>
            </div>
          </div>
        </div>
      </div>
    </Modal>
  );
}
