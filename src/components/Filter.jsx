import React, { Component } from 'react';

export default class Filter extends Component {
  render() {
    const { filter, onFilterChange } = this.props;
    return (
      <div>
        <p>Find contacts by name</p>
        <input
          type="text"
          name="filter"
          title="Filter contacts by name"
          value={filter}
          onChange={event => onFilterChange(event)}
        ></input>
      </div>
    );
  }
}
