import React, { Component } from 'react';
import {connect} from 'react-redux';
import SearchInput, {createFilter} from 'react-search-input';
import {Link} from 'react-router-dom';
import {v4} from 'node-uuid';
import {handleSortByName, handleDelete} from '../actions';
import moment from 'moment';

const KEYS_TO_FILTERS = ['warranty', 'serial'];

class List extends Component {
  constructor(props){
    super(props);

    this.state = {
      searchTerm: ''
    };

  }

  renderList(){

    const filteredList = this.props.list.filter(createFilter(this.state.searchTerm, KEYS_TO_FILTERS));

    function getPeriod(until){

      let a = moment(until, 'DD MMM YYYY');
      let b = a.diff(moment(), 'months');

      if(b < 2){
        return (
          <td id='over'>{b}</td>
        );
      }
      return (
        <td>{b}</td>
      );
    }

    return filteredList.map(data => {
      return (
        <tr key={v4()}>
          <td className='warranty'>{data.warranty}</td>
          <td className='serial'>{data.serial}</td>
          <td>{data.start}</td>
          <td>{data.until}</td>
          {getPeriod(data.until)}
          <td><button className='btn btn-warning btn-xs pull-right' onClick={() => this.props.handleDelete(data.warranty)}>X</button></td>
        </tr>
      );
    });
  }

  searchUpdated(term) {
    this.setState({searchTerm: term});
  }

  sortByName(){
    this.props.handleSortByName(this.props.list);
  }

  render() {
    return (
      <div className="container">
        <div className="page-header">
          <h1>Save and Track the Warranties of Your Belongings</h1>
        </div>
        <div className='row'>
          <form className='col-md-9 col-md-offset-1'>
            <div className="form-group">
              <SearchInput className="search-input form-control" placeholder="Search (by warranty name or serial number)" onChange={this.searchUpdated.bind(this)} />
            </div>
          </form>
          <Link to='/add' className='btn btn-success col-md-2'>Add New Warranty</Link>
        </div>
        <div className='row' id='arr_buttons'>
          <div className='col-md-2 col-md-offset-4'>
            <button className='btn btn-default' onClick={this.sortByName.bind(this)}>Arrange by name</button>
          </div>
          <div className='col-md-2'>
            <button className='btn btn-default'>Arrange by warranty left</button>
          </div>
        </div>
        <table className="table table-hover">
          <thead>
            <th>Warrnaty</th>
            <th>Serial</th>
            <th>Started</th>
            <th>Ends</th>
            <th>Months left</th>
            <th></th>
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

export default connect(mapStateToProps, {handleSortByName, handleDelete})(List);
