import React from 'react';
import consultIcon from '../../../../assets/images/icons/consult-icon.png';
import implementIcon from '../../../../assets/images/icons/implement-icon.png';
import manageIcon from '../../../../assets/images/icons/manage-icon.png';
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
        text="Helping you make the right choices to solve critical business challenges."
        linkTarget="/"
      />
      <ServiceCTA
        icon=""
        heading="Implement"
        text="Implementing great IT solutions first time."
        linkTarget="/"
      />
      <ServiceCTA
        icon=""
        heading="Manage"
        text="Monitoring, managing and optimising your IT platform."
        linkTarget="/"
      />
    </div>
  );
};

export default Services;
