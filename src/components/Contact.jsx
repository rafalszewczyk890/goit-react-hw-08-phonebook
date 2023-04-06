import React, { Component } from 'react';

export default class Contact extends Component {
  render() {
    const { id, name, number } = this.props;
    return (
      <li key={id}>
        {name}: {number}
      </li>
    );
  }
}
