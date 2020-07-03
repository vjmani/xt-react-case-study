import React from "react";

class SearchBox extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: "", showClearBtn: false };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();
    this.props.searchByName(this.state.value);
  }

  handleChange(event) {
    this.setState({ value: event.target.value, showClearBtn:  event.target.value !== '' ? true : false });
  }

  handleClear() {
    this.setState({ value: "", showClearBtn: false });
    this.props.filterData();
  }

  render() {
    return (
      <>
        <label htmlFor="search-by-name">Search By Name</label>
        <form className="form-inline" onSubmit={this.handleSubmit}>
          <div className="form-group">
            <input
              type="text"
              onChange={this.handleChange}
              className="form-control"
              value={this.state.value}
            />
          </div>
          <button type="submit" className="btn btn-default">
            Search
          </button>
          <button
            type="button"
            onClick={() => {
              this.handleClear();
            }}
            className={`btn btn-primary ${!this.state.showClearBtn ? "hidden" : ""}`}
          >
            Clear
          </button>
        </form>
      </>
    );
  }
}

export default SearchBox;
