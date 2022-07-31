import React from 'react';
import PropTypes from 'prop-types';
import css from './searchBar.module.css'

export default class Searchbar extends React.Component {
    state = {
        name: '',
    }

     onChange = evt => {
    const { name, value } = evt.currentTarget;
    this.setState({ [name]: value })
    }

    onSuubmit = evt => {
      evt.preventDefault();
      this.props.onClick(this.state)
      
      this.reset()
      
  }
   reset = () => {
     this.setState({ name: '' })
     
    }


    render() {
        return (
    <header className={css.searchbar}>
  <form className={css.searchForm} onSubmit={this.onSuubmit}>
    <button type="submit" className={css.searchFormButton}>
      <span className={css.searchFormButtonLabel}>Search</span>
    </button>

    <input
      className={css.searchFormInput}
      name="name"
        value={this.state.name}
        onChange={this.onChange}
      type="text"
      autoComplete='off'
      autoFocus
      placeholder="Search images and photos"
    />
  </form>
</header>
        )
    }
}

Searchbar.propTypes = {
    onClick: PropTypes.func.isRequired,
};