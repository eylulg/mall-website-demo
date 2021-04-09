import React, { useEffect } from "react";
import Modal from "react-modal";
import Select from "react-select";
import "./styles.css";

export default function SettingsModal({ visible, closed }) {
  const customStyles = {
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
    },
  };

  const languages = [
    {
      value: "Burmese",
      label: "Burmese",
    },
    {
      value: "Catalan; Valencian",
      label: "Catalan; Valencian",
    },
    {
      value: "Chamorro",
      label: "Chamorro",
    },
    {
      value: "Chechen",
      label: "Chechen",
    },
    {
      value: "Chichewa; Chewa; Nyanja",
      label: "Chichewa; Chewa; Nyanja",
    },
    {
      value: "Chinese",
      label: "Chinese",
    },
    {
      value: "Chuvash",
      label: "Chuvash",
    },
    {
      value: "Cornish",
      label: "Cornish",
    },
    {
      value: "Corsican",
      label: "Corsican",
    },
    {
      value: "Cree",
      label: "Cree",
    },
    {
      value: "Croatian",
      label: "Croatian",
    },
    {
      value: "Czech",
      label: "Czech",
    },
    {
      value: "Danish",
      label: "Danish",
    },
    {
      value: "Divehi; Dhivehi; Maldivian;",
      label: "Divehi; Dhivehi; Maldivian;",
    },
    {
      value: "Dutch",
      label: "Dutch",
    },
    {
      value: "English",
      label: "English",
    },
    {
      value: "Esperanto",
      label: "Esperanto",
    },
    {
      value: "Estonian",
      label: "Estonian",
    },

    {
      value: "Gujarati",
      label: "Gujarati",
    },
    {
      value: "Haitian; Haitian Creole",
      label: "Haitian; Haitian Creole",
    },
    {
      value: "Hausa",
      label: "Hausa",
    },
    {
      value: "Hebrew",
      label: "Hebrew",
    },
    {
      value: "Hebrew",
      label: "Hebrew",
    },
    {
      value: "Herero",
      label: "Herero",
    },
    {
      value: "Hindi",
      label: "Hindi",
    },
    {
      value: "Hiri Motu",
      label: "Hiri Motu",
    },
    {
      value: "Hungarian",
      label: "Hungarian",
    },
    {
      value: "Interlingua",
      label: "Interlingua",
    },
    {
      value: "Indonesian",
      label: "Indonesian",
    },
    {
      value: "Interlingue",
      label: "Interlingue",
    },
    {
      value: "Irish",
      label: "Irish",
    },
    {
      value: "Igbo",
      label: "Igbo",
    },
    {
      value: "Inupiaq",
      label: "Inupiaq",
    },
    {
      value: "Ido",
      label: "Ido",
    },
    {
      value: "Icelandic",
      label: "Icelandic",
    },
    {
      value: "Italian",
      label: "Italian",
    },
    {
      value: "Inuktitut",
      label: "Inuktitut",
    },
    {
      value: "Japanese",
      label: "Japanese",
    },
  ];

  const [modalIsOpen, setIsOpen] = React.useState(visible);

  useEffect(() => {
    setIsOpen(visible);
  }, [visible]);

  function closeModal() {
    closed(true);
  }
  const modes = [
    {
      value: "Normal Mode",
      label: "Normal Mode",
    },
    {
      value: "Visually Disabled Mode",
      label: "Visually Disabled Mode",
    },
  ];
  return (
    <Modal
      isOpen={modalIsOpen}
      onRequestClose={closeModal}
      style={customStyles}
      contentLabel="Example Modal"
    >
      <div className="modal-container">
        <span className="settings-modal-title">Settings</span>
        <Select
          onChange={(val) => {}}
          placeholder="Change Language"
          className="settings-modal-button"
          options={languages}
        />

        <Select
          onChange={(val) => {}}
          placeholder="Change Routing Mode"
          className="settings-modal-button"
          options={modes}
        />
      </div>
    </Modal>
  );
}
