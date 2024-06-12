import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';

export default class Login extends Component {
  state = {
    userName: "",
    password: ""
  };

  login = (e) => {
    e.preventDefault();
    const { password, userName } = this.state;
    if (password === "123" && userName === "test") {
      window.location.href = '/HomePage';
    } else {
      Swal.fire({
        title: "Danger",
        text: "Wrong User name or Password",
        icon: "warning"
      });

      this.setState({
        userName: "",
        password: ""
      });

      this.setState({ authetication: true });
    }
  };

  handleInputChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  render() {
    const { password, userName } = this.state;
    return (
      <div className='row center'>
        <div className='col-md-6 text-center'>
          <div className="card">
            <div className="card-header">
              Login
            </div>
            <div className="card-body">
              <form onSubmit={this.login}>
                <div className="form-group">
                  <label htmlFor="exampleInputEmail1">User Name</label>
                  <input
                    type="text"
                    className="form-control"
                    aria-describedby="emailHelp"
                    name="userName"
                    value={userName}
                    placeholder="Enter user name"
                    onChange={this.handleInputChange}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="exampleInputPassword1">Password</label>
                  <input
                    type="password"
                    className="form-control"
                    value={password}
                    name="password"
                    placeholder="Password"
                    onChange={this.handleInputChange}
                  />
                </div>
                <button type="submit" className="btn btn-primary">Login</button>
              </form>
            </div>
          </div>

          <div className='mt-3'>
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="21" viewBox="0 0 18 21">
              <g fill="none" fill-rule="evenodd">
                <path stroke="#484848" stroke-linecap="round" stroke-linejoin="round" d="M1.208 3.675v6.345a9.923 9.923 0 0 0 6.36 9.261l.868.334a2.497 2.497 0 0 0 1.795 0l.867-.334a9.923 9.923 0 0 0 6.36-9.26V3.674a1.24 1.24 0 0 0-.723-1.135 18.09 18.09 0 0 0-7.402-1.509 18.09 18.09 0 0 0-7.401 1.51 1.24 1.24 0 0 0-.724 1.134z"></path>
                <path fill="#5AD363" d="M3.5 6.877v3.936a5.574 5.574 0 0 0 3.6 5.148l.484.186c.321.123.677.123.999 0l.483-.186a5.574 5.574 0 0 0 3.6-5.148V6.877a.69.69 0 0 0-.402-.632 10.46 10.46 0 0 0-4.178-.838 10.462 10.462 0 0 0-4.184.838.69.69 0 0 0-.402.632z"></path>
                <path stroke="#484848" stroke-linecap="round" stroke-linejoin="round" d="M6.596 15.67l8.362-8.363M13.621 4.23l-9.103 9.098"></path>
                <path stroke="#484848" stroke-linecap="round" stroke-linejoin="round" d="M3.708 5.336v4.834a6.845 6.845 0 0 0 4.417 6.321l.593.229c.394.151.83.151 1.225 0l.592-.229a6.845 6.845 0 0 0 4.417-6.321V5.336a.847.847 0 0 0-.494-.775 12.816 12.816 0 0 0-5.125-1.03 12.82 12.82 0 0 0-5.131 1.03.847.847 0 0 0-.494.775z"></path>
              </g>
            </svg>
            <label className='ml-2'>Secure Shopping</label>
          </div>
        </div>
      </div>
    );
  }
}
