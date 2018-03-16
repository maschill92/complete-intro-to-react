// @flow
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import type { RouterHistory } from 'react-router-dom';
import { connect } from 'react-redux';
import { setSearchTerm } from './actionCreators';

class Landing extends Component {
  props: {
    searchTerm: string,
    handleSearchTermChange: Function,
    history: RouterHistory,
    handleBrowseAllClick: Function
  };
  goToSearch = (event: SyntheticEvent) => {
    event.preventDefault();
    this.props.history.push('/search');
  };
  render() {
    return (
      <div className="landing">
        <h1>svideo</h1>
        <form onSubmit={this.goToSearch}>
          <input
            value={this.props.searchTerm}
            type="text"
            placeholder="Search"
            onChange={this.props.handleSearchTermChange}
          />
        </form>
        <Link to="/search" onClick={this.props.handleBrowseAllClick}>or Browse All</Link>
      </div>
    );
  }
}

const mapStateToProps = state => ({ searchTerm: state.searchTerm });
const mapDispatchToProps = (dispatch: Function) => ({
  handleSearchTermChange(event) {
    dispatch(setSearchTerm(event.target.value));
  },
  handleBrowseAllClick() {
    dispatch(setSearchTerm(''));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(Landing);
