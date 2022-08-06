import React, { Component } from 'react';
import { BiSearchAlt } from 'react-icons/bi';
import { toast } from 'react-toastify';
import css from "./Searchbar.module.css"
import 'react-toastify/dist/ReactToastify.css';
import PropTypes from "prop-types"

export class Searchbar extends Component {
  state = {
    filter: '',
  };
  changeHandler = e => {
    this.setState({ filter: e.currentTarget.value.toLowerCase() });
  };
  handleSubmit = e => {
    e.preventDefault();
    const { filter } = this.state;
    if (filter.trim() === '') {
      toast.warn('PLease enter keyword');
      return;
    }
    this.props.onSubmit(filter);
    this.setState({ filter: '' });
  };
  render() {
    const { filter } = this.state;
    return (
      <header className={css.Searchbar}>
        <form className={css.SearchForm} onSubmit={this.handleSubmit}>
          <button type="submit" className={css.SearchFormButton}>
            <BiSearchAlt className={css.SearchButtonIcon} />
          </button>

          <input
            className={css.SearchFormInput}
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

Searchbar.propTypes = {
  onSubmit: PropTypes.func.isRequired
}