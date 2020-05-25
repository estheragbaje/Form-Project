import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Box } from '@chakra-ui/core';
import './App.css';
import Form from './components/Form';
import Dashboard from './components/Dashboard';

function App() {
  return (
    <Router>
      <Switch>
        <Route
          exact
          path="/"
          render={(props) => (
            <Form
              onSubmit={(value) => {
                props.history.push('/dashboard');
              }}
            />
          )}
        />
        <Route exact path="/dashboard" component={Dashboard} />
      </Switch>
    </Router>
  );
}

export default App;
