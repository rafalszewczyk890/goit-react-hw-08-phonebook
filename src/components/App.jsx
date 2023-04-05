import { Component } from 'react';
import { nanoid } from 'nanoid';

export class App extends Component {
  state = {
    contacts: [
      { name: 'Anne Copeland', number: '333-222-334', id: nanoid() },
      { name: 'Jackie Brown', number: '123-234-411', id: nanoid() },
    ],
    name: '',
    number: '',
  };

  onChange = event => {
    if (event.target.name === 'name') {
      this.setState({ name: event.target.value });
    } else if (event.target.name === 'number') {
      this.setState({ number: event.target.value });
    }
  };

  addContact = () => {
    const { name, number } = this.state;
    const newContact = {
      name: name,
      number: number,
      id: nanoid(),
    };
    console.log(newContact);

    this.setState(prevState => {
      return { contacts: [...prevState.contacts, newContact] };
    });

    this.setState({ name: '', number: '' });
  };

  render() {
    const { contacts, name, number } = this.state;
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
          <button onClick={this.addContact}>Add contact</button>
        </form>
        <h1>Contacts</h1>
        <ul>
          {contacts.map(contact => {
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
