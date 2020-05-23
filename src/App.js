import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Box } from '@chakra-ui/core';
import './App.css';
import Form from './components/Form';
import Dashboard from './components/Dashboard';

function App() {
  return (
    <Box
      backgroundImage="url('https://images.unsplash.com/photo-1508873699372-7aeab60b44ab?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80')"
      backgroundSize="cover"
      backgroundColor="gray.700"
      style={{ backgroundBlendMode: 'overlay' }}
      minHeight="100vh"
    >
      <Router>
        <Switch>
          <Route
            exact
            path="/"
            render={(props) => (
              <Form
                onSubmit={(value) => {
                  console.log(value)
                  props.history.push('/dashboard');
                }}
              />
            )}
          />
          <Route exact path="/dashboard" component={Dashboard} />
        </Switch>
      </Router>
    </Box>
  );
}

export default App;
