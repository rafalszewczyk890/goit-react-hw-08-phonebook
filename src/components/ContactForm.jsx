import React, { Component } from 'react';

export default class ContactForm extends Component {
  state = {
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

  render() {
    const { name, number } = this.state;
    return (
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
        <button
          type="submit"
          onClick={event => {
            this.props.onSubmit(event, name, number);
            this.setState({ name: '', number: '' });
          }}
        >
          Add contact
        </button>
      </form>
    );
  }
}
