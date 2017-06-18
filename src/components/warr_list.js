import React, { Component } from 'react';
import {connect} from 'react-redux';
import SearchInput, {createFilter} from 'react-search-input';
import {Link} from 'react-router-dom';
import {v4} from 'node-uuid';

const KEYS_TO_FILTERS = ['warranty', 'serial'];

class List extends Component {
  constructor(props){
    super(props);

    this.state = {
      searchTerm: ''
    };
  }

  renderList(){
    const filteredList = this.props.list.filter(createFilter(this.state.searchTerm, KEYS_TO_FILTERS))

    return filteredList.map(data => {
      return (
        <tr key={v4()}>
          <td className='warranty'>{data.warranty}</td>
          <td className='serial'>{data.serial}</td>
          <td>{data.period}</td>
        </tr>
      );
    });
  }

  searchUpdated(term) {
    this.setState({searchTerm: term});
  }

  render() {
    return (
      <div className="container">
        <div className='row'>
          <form className='col-md-9'>
            <div className="form-group">
              <SearchInput className="search-input form-control" placeholder="Search (by warranty name or serial)" onChange={this.searchUpdated.bind(this)} />
            </div>
          </form>
          <Link to='/add' className='btn btn-danger col-md-2'>Add New Warranty</Link>
        </div>
        <table className="table table-hover">
          <thead>
            <th>Warrnaty</th>
            <th>Serial</th>
            <th>Period</th>
          </thead>
          <tbody>
            {this.renderList()}
          </tbody>
        </table>
      </div>
    );
  }

};

function mapStateToProps(state){
  return {list: state.list};
}

export default connect(mapStateToProps)(List);
