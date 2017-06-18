import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import List from './warr_list';

class App extends Component {
  render() {
    return (
      <div className="container">
        <div className='row'>
          <form className='col-md-9'>
            <div className="form-group">
              <input type="text" className="form-control" placeholder="Search in warranties..." />
            </div>
          </form>
          <Link to='/add' className='btn btn-danger col-md-2'>Add New Warranty</Link>
        </div>
        <List />
      </div>
    );
  }
}

export default App;
