import React, {Component} from 'react';
import logo from './logo.svg';
import {Navbar, NavbarBrand} from 'reactstrap';
import './App.css';
import Menu from './components/MenuComponent';
import { DISHES } from './shared/dishes';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      dishes: DISHES
    };
    console.log("Comments", this.state.dishes.comments);
  }
  render() {
    return (
      <div>
        <header>
          {/* <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a> */}
          <Navbar dark color="primary">
            <div className="container">
              <NavbarBrand href="/">Ristorante Con Fusion</NavbarBrand>
            </div>
          </Navbar>
          <Menu dishes={this.state.dishes}/>
        </header>
      </div>
    );
  };
  
}

export default App;
