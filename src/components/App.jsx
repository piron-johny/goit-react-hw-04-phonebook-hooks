import { useState, useEffect } from 'react';
import { nanoid } from 'nanoid';
import Section from './Section';
import Form from './Form';
import Filter from './Filter';
import Contacts from './Contacns';

const App = () => {
  const [contacts, setContacts] = useState([
    { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
    { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
    { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
    { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
  ]);
  const [filter, setFilter] = useState('');

  useEffect(() => {
    const localStorageContacts = JSON.parse(localStorage.getItem('contacts'));

    if (localStorageContacts) {
      setContacts(localStorageContacts);
    }
  }, []);

  useEffect(() => {
    window.localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  const handleContact = userData => {
    let inputName = userData.name;

    const isIncludesName = contacts.find(
      contact => contact.name.toLowerCase() === inputName.toLowerCase()
    );

    if (isIncludesName) {
      return alert(`${inputName} is already is contacts`);
    }

    const contact = { ...userData, id: nanoid() };
    setContacts([...contacts, contact]);
  };

  const handleFilterChange = e => {
    const { value } = e.currentTarget;
    setFilter(value);
  };

  const handlesFilterOfContacts = () => {
    const value = filter.toLowerCase();
    const searchContact = contacts.filter(contact =>
      contact.name.toLowerCase().includes(value)
    );
    return searchContact;
  };

  const deleteContact = e => {
    const contactId = e.currentTarget.parentNode.id;
    const contactForDeletion = contacts.filter(
      contact => contact.id !== contactId
    );

    return setContacts(contactForDeletion);
  };

  const contactsList = handlesFilterOfContacts();

  return (
    <Section title="Phonebook">
      <Form onSubmit={handleContact} />
      <h2>Contacts</h2>
      <Filter value={filter} filterChange={handleFilterChange} />
      <Contacts contacts={contactsList} onDelete={deleteContact} />
    </Section>
  );
};

export default App;
