import React from "react";
import "./App.css";
import Header from "./Header.js";
import AddContact from "./AddContact.js";
import ContactList from "./ContactList.js";

function App() {
  const contacts = [
    { id: "1", name: "Tahseen", email: "rajatahseen@gmail.com" },
    { id: "2", name: "Akhtar", email: "rajaakhtar@gmail.com" },
  ];
  return (
    <div className="ui container">
      <Header />
      <AddContact />
      <ContactList contacts={contacts} />
      {/* props- pass data {contacts} from parent to child */}
    </div>
  );
}

export default App;
