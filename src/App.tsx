import React from 'react';
import Dashboard from './Components/Dashboard/Dashboard';
import { Container } from 'reactstrap';
import './App.css';

const App: React.FC = () => {
  return (
    <div className="wrapper">
      <Container fluid>
        <Dashboard />
      </Container>
    </div>
  ); 
}

export default App;
