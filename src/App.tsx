import React from 'react';
import Dashboard from './Component/Dashboard/Dashboard';
import { Container } from 'reactstrap';
import './App.css';

const App: React.FC = () => {
  return (
    <Container>
      <Dashboard />
    </Container>
  );
}

export default App;
