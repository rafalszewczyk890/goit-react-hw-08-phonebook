import { Component } from 'react';
import { nanoid } from 'nanoid';

export class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    name: '',
    number: '',
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

  addContact = event => {
    event.preventDefault();
    const { name, number } = this.state;
    const newContact = {
      name: name,
      number: number,
      id: nanoid(),
    };

    this.setState(prevState => {
      return { contacts: [...prevState.contacts, newContact] };
    });

    this.setState({ name: '', number: '' });
  };

  render() {
    const { contacts, name, number, filter } = this.state;
    return (
      <>
        <h1>Phonebook</h1>
        <form>
          <label>Name</label>
          <input
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
            value={name}
            onChange={this.onChange}
          />
          <label>Number</label>
          <input
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
            value={number}
            onChange={this.onChange}
          />
          <button type="submit" onClick={this.addContact}>
            Add contact
          </button>
        </form>
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
