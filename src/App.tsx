import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Footer from './components/Footer/Footer';
import HomeView from './scenes/HomeView/HomeView';

const App: React.FC = () => {
  return (
    <Router>
      <main>
        <Route path="/" component={HomeView} exact={true} />
      </main>
      <Footer />
    </Router>
  );
};

export default App;
