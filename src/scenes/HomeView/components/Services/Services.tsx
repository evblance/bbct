import React from 'react';
import ServiceCTA from './ServiceCTA/ServiceCTA';

/**
 * Stateless component wrapper for call-to-actions in the homepage services section.
 */
const Services: React.FC = () => {
  return (
    <div className="services" data-test="ServicesComponent">
      <ServiceCTA
        icon=""
        heading="Consult"
        text="Helping you make the right choices to solve critical business challenges"
        linkTarget="/"
      />
    </div>
  );
};

export default Services;
