import './App.css';
import React, { Component } from 'react';
import Header from './components/header';
import Contents from './components/contents';
import Footer from './components/footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from 'react-bootstrap/Navbar'; //Need to import the <- for the Nav bar to work
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';

import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import { Create } from './components/create';
import { Read } from './components/read';
import { Edit } from './components/edit';

class App extends Component {
  render() {
    return (
      <Router>
      <div className="App">
        <Navbar bg="dark" variant="dark">  
          <Container>
            <Navbar.Brand href="/">Navbar</Navbar.Brand>
            <Nav className="me-auto">
              <Nav.Link href="/">Home</Nav.Link>
              <Nav.Link href="/read">Read</Nav.Link>
              <Nav.Link href="/create">Create</Nav.Link>
            </Nav>
          </Container>
        </Navbar>

        <Switch>
          <Route path = '/' component ={Contents} exact/>
          <Route path = '/create' component={Create} exact/>
          <Route path = '/read' component={Read} exact />
          <Route path = '/edit/:id' component={Edit} exact/>
        </Switch>

      </div>
      </Router>
    );
  }
}

export default App;
