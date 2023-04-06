import { Component } from 'react';
import { nanoid } from 'nanoid';
import ContactForm from './ContactForm';

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

  onChange = event => {
    if (event.target.name === 'name') {
      this.setState({ name: event.target.value });
    } else if (event.target.name === 'number') {
      this.setState({ number: event.target.value });
    } else if (event.target.name === 'filter') {
      this.setState({ filter: event.target.value });
    }
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
    const { contacts, name, number, filter } = this.state;
    return (
      <>
        <h1>Phonebook</h1>
        <ContactForm onSubmit={this.addContact} />
        <h1>Contacts</h1>
        <p>Find contacts by name</p>
        <input
          type="text"
          name="filter"
          title="Filter contacts by name"
          value={filter}
          onChange={this.onChange}
        ></input>
        <ul>
          {contacts
            .filter(contact => {
              return contact.name
                .toLowerCase()
                .includes(this.state.filter.toLowerCase());
            })
            .map(contact => {
              return (
                <li key={contact.id}>
                  {contact.name}: {contact.number}
                </li>
              );
            })}
        </ul>
      </>
    );
  }
}
