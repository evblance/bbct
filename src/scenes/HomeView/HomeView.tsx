import React from 'react';
import Services from './components/Services/Services';

/**
 * Stateless component representing the Home scene view
 */
const HomeView: React.FC = () => {
  return (
    <div data-test="HomeViewComponent">
      <section className="section section--services">
        <Services />
      </section>
    </div>
  );
};

export default HomeView;
