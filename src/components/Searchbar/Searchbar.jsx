import React, { Component } from 'react';
import { BiSearchAlt } from 'react-icons/bi';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
export class Searchbar extends Component {
  state = {
    filter: '',
  };
  changeHandler = (e) => {
    this.setState({ filter: e.currentTarget.value.toLowerCase() });
  };
  handleSubmit = (e) => {
    e.preventDefault();
    const { filter } = this.state;
    if (filter.trim() === "") {
      toast.warn("PLease enter keyword")
      return;
    }
    this.props.onSubmit(filter)
    this.setState({filter: ""})
  }
  render() {
    const { filter } = this.state;
    return (
      <header className="Searchbar">
        <form className="SearchForm" onSubmit={this.handleSubmit}>
          <button type="submit" className="SearchForm-button">
            <BiSearchAlt className="SearchButtonIcon" />
          </button>

          <input
            className="SearchForm-input"
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            value={filter}
            onChange={this.changeHandler}
          />
        </form>
      </header>
    );
  }
}
