import React from 'react';

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
    <header class="searchbar">
  <form class="form" onSubmit={this.onSuubmit}>
    <button type="submit" class="button">
      <span class="button-label">Search</span>
    </button>

    <input
      class="input"
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