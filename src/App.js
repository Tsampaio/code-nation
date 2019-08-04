import React, { Component } from 'react';
import Card from './components/Card';
import './App.css';

class App extends Component {
  state = {
    active: true
  }

  cardHandler = () => {
    this.setState({
      active: !this.state.active
    })
  } 

  render() {
    return (
      <div className="container">
        <nav className="navbar navbar-light bg-light">
          <a className="navbar-brand">Navbar</a>
          <button className="btn btn-outline-success my-2 my-sm-0 float-right">Search</button>
        </nav>
        <div className="row">

          <Card onClick={this.cardHandler} name="John Smith" job="Web Developer" avatar={51} status={this.cardHandler} active={this.state.active}/>

          <Card onClick={this.cardHandler} name="James Holden" job="Dentist" avatar={35} status={this.cardHandler} active={this.state.active}/>

          <Card onClick={this.cardHandler} name="Melissa Jones" job="Nurse" avatar={56} active={this.state.active}/>

          {/* <div className="col-md-4">
            <div className="card">
              <img className="card-img-top" src="http://via.placeholder.com/640x360" alt="Card image cap" />
              <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <a href="www.google.com" className="btn btn-primary">Go somewhere</a>
              </div>
            </div>
          </div>

          <div className="col-md-4">
            <div className="card">
              <img className="card-img-top" src="http://via.placeholder.com/640x360" alt="Card image cap" />
              <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <a href="www.google.com" className="btn btn-primary">Go somewhere</a>
              </div>
            </div>
          </div>

          <div className="col-md-4">
            <div className="card">
              <img className="card-img-top" src="http://via.placeholder.com/640x360" alt="Card image cap" />
              <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <a href="www.google.com" className="btn btn-primary">Go somewhere</a>
              </div>
            </div>
          </div> */}

        </div>
      </div>
    );
  }
}

export default App;
