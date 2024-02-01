import React, { useState, useEffect } from "react";
import { v4 as uuid } from "uuid";
import "./App.css";
import Header from "./Header.js";
import AddContact from "./AddContact.js";
import ContactList from "./ContactList.js";

function App() {
  const LOCAL_STORAGE_KEY = "contacts";
  const [contacts, setContacts] = useState(
    JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY)) ?? []
  );

  const addContactHandler = (contact) => {
    console.log(contact);
    // setContacts([...contacts, contact]);
    setContacts([...contacts, { id: uuid(), ...contact }]); //---Need a add a uniue Id so created new object
  };

  const removeContactHandler = (id) => {
    const newContactList = contacts.filter((contact) => {
      return contact.id !== id;
    });
    setContacts(newContactList);
  };

  // useEffect(() => {
  //   const retrieveContacts = JSON.parse(
  //     localStorage.getItem(LOCAL_STORAGE_KEY, LOCAL_STORAGE_KEY)
  //   );
  //   if (retrieveContacts) setContacts(retrieveContacts);
  // }, []);

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(contacts));
  }, [contacts]);

  return (
    <div className="ui container">
      <Header />
      <AddContact addContactHandler={addContactHandler} />
      <ContactList contacts={contacts} getContactId={removeContactHandler} />
      {/* props- pass data {contacts} from parent to child */}
    </div>
  );
}

export default App;
