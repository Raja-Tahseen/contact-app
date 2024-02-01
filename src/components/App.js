import React, { useState } from "react";
import "./App.css";
import Header from "./Header.js";
import AddContact from "./AddContact.js";
import ContactList from "./ContactList.js";

function App() {
  const [contacts, setContacts] = useState([]);
  const addContactHandler = (contact) => {
    console.log(contact);
    setContacts([...contacts, contact]);
  };
  return (
    <div className="ui container">
      <Header />
      <AddContact addContactHandler={addContactHandler} />
      <ContactList contacts={contacts} />
      {/* props- pass data {contacts} from parent to child */}
    </div>
  );
}

export default App;
