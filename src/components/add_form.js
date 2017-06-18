import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import {createWarranty} from '../actions';
import DatePicker from 'react-datepicker';
import moment from 'moment';
import 'react-datepicker/dist/react-datepicker.css';

class AddForm extends Component {
  constructor(props) {
    super(props)

    this.state = {
      warranty: '',
      serial: '',
      startDate: moment(),
      period: ''
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(date) {
    this.setState({
      startDate: date
    });
  }

  handleChangeWarranty(warranty){
    this.setState({warranty});
  }

  handleChangeSerial(serial){
    this.setState({serial});
  }

  handleChangePeriod(period){
    this.setState({period});
  }

  handleSubmit(e){
    e.preventDefault();
    console.log(this.state);
    this.props.createWarranty(this.state, () => {
      this.props.history.push('/');
    });
  }

  render(){
    return (
      <div className='container'>
        <form onSubmit={this.handleSubmit.bind(this)}>
          <div className="form-group">
            <label>Warranty for(subject)</label>
            <input type="text" className="form-control" id="warrnaty" placeholder="Enter the subject of the warranty (TV, PC etc...)" required onChange={event => this.handleChangeWarranty(event.target.value)} />
          </div>
          <div className="form-group">
            <label>Serial number(id)</label>
            <input type="text" className="form-control" id="serial" placeholder="Enter the serial number of the subject(or leave blank if no serial)" onChange={event => this.handleChangeSerial(event.target.value)} />
          </div>
          <DatePicker selected={this.state.startDate} onChange={this.handleChange} className="form-control" />
          <div className="form-group">
            <label>Warranty period (months)</label>
            <input type="number" className="form-control" id="period" required placeholder="Enter the warranty period in months" onChange={event => this.handleChangePeriod(event.target.value)} />
          </div>
          <button type='submit' className='btn btn-primary'>Add</button>
          <Link to='/' className='btn btn-danger'>Cancel</Link>
        </form>
      </div>
    );
  }
}

export default connect(null, {createWarranty})(AddForm);
