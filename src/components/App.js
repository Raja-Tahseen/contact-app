import React from "react";
import "./App.css";
import Header from "./Header.js";
import AddContact from "./AddContact.js";
import ContactList from "./ContactList.js";

function App() {
  return (
    <div className="ui container">
      <Header />
      <AddContact />
      <ContactList />
    </div>
  );
}

export default App;
