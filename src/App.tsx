import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import HomeView from './scenes/HomeView/HomeView';

const App: React.FC = () => {
  return (
    <Router>
      <Route path="/" component={HomeView} exact={true} />
    </Router>
  );
};

export default App;
