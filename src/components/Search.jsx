import React from 'react';

class Search extends React.Component {
  state = {
    search: '',
    type: 'all',
  };

  handleKey = (event) => {
    if (event.key === 'Enter') {
      this.props.searchMovies(this.state.search, this.state.type);
    }
  };

  // TODO debounce and throttle
  handleFilter = (event) => {
    this.setState(
      () => ({ type: event.target.dataset.type }),
      () => {
        this.props.searchMovies(this.state.search, this.state.type);
      }
    );
  };

  render() {
    const { input } = this.state;
    return (
      <>
        <div className="row">
          <div className="input-field">
            <input
              placeholder="Search"
              type="search"
              className="validate"
              value={this.state.search}
              onChange={(e) =>
                this.setState({
                  search: e.target.value,
                })
              }
              onKeyDown={
                this.state.search.length === 0 ? undefined : this.handleKey
              }
            />
            <button
              disabled={this.state.search.length === 0}
              className={
                this.props.theme === 'dark'
                  ? 'btn search-btn-dark'
                  : 'btn search-btn-light'
              }
              onClick={() =>
                this.props.searchMovies(this.state.search, this.state.type)
              }
            >
              Search
            </button>
          </div>
        </div>
        <div className="rad-btn">
          <p>
            <label>
              <input
                className="with-gap"
                name="type"
                type="radio"
                data-type="all"
                onChange={this.handleFilter}
                checked={this.state.type === 'all'}
              />
              <span>All</span>
            </label>
          </p>
          <p>
            <label>
              <input
                className="with-gap"
                name="type"
                type="radio"
                data-type="movie"
                onChange={this.handleFilter}
                checked={this.state.type === 'movie'}
              />
              <span>Movies only</span>
            </label>
          </p>
          <p>
            <label>
              <input
                className="with-gap"
                name="type"
                type="radio"
                data-type="series"
                onChange={this.handleFilter}
                checked={this.state.type === 'series'}
              />
              <span>Series only</span>
            </label>
          </p>
        </div>
      </>
    );
  }
}

export { Search };
