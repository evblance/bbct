import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import HomeView from './scenes/HomeView/HomeView';

const App: React.FC = () => {
  return (
    <Router>
      <Header />
      <main>
        <Route path="/" component={HomeView} exact={true} />
      </main>
    </Router>
  );
};

export default App;
