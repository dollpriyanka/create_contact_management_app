import React from "react";
import ContactList from "../comonents/ContactList";
import CreateContact from "../comonents/CreateContact";

const ContectsPage = () => {
  return (
    <div className="w-full h-full">
      <CreateContact />
      <ContactList />
    </div>
  );
};

export default ContectsPage;