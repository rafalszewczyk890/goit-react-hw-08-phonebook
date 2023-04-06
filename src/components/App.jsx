import { Component } from 'react';
import { nanoid } from 'nanoid';
import ContactForm from './ContactForm';
import Filter from './Filter';
import ContactList from './ContactList';

export class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  onFilterChange = event => {
    this.setState({ filter: event.target.value });
  };

  addContact = (event, name, number) => {
    event.preventDefault();
    const newContact = {
      name: name,
      number: number,
      id: nanoid(),
    };

    this.setState(prevState => {
      return { contacts: [...prevState.contacts, newContact] };
    });
  };

  render() {
    const { contacts, filter } = this.state;
    return (
      <>
        <h1>Phonebook</h1>
        <ContactForm onSubmit={this.addContact} />
        <h1>Contacts</h1>
        <Filter filter={filter} onFilterChange={this.onFilterChange} />
        <ContactList contacts={contacts} filter={filter} />
      </>
    );
  }
}
