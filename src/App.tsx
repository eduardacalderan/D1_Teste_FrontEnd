import React, { useState } from "react";
import Modal from "react-modal";
import { NewJourneyModal } from "./components/NewJourneyModal";

import { Dashboard } from "./components/Content";
import { Header } from "./components/Header";
import { SideBar } from "./components/SideBar";

import "./styles/global.scss";
import { JourneysProvider } from "./contexts/JourneysContext";

Modal.setAppElement("#root"); //accessibility

function App() {
  const [isNewJourneyModalOpen, setIsNewJourneyModalOpen] = useState(false); //the modal is closed

  function handleOpenNewJourneyModal() {
    setIsNewJourneyModalOpen(true);
  }

  function handleCloseNewJourneyModal() {
    setIsNewJourneyModalOpen(false);
  }

  return (
    <>
      <div style={{ display: "flex", flexDirection: "row" }}>
        <JourneysProvider>
          <SideBar />
          <div style={{ width: "100%" }}>
            <Header onOpenNewJourneyModal={handleOpenNewJourneyModal} />
            <NewJourneyModal
              isOpen={isNewJourneyModalOpen}
              onRequestClose={handleCloseNewJourneyModal}
            />
            <Dashboard />
          </div>
        </JourneysProvider>
      </div>
    </>
  );
}

export default App;
