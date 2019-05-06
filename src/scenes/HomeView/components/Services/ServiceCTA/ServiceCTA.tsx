import React from 'react';
import { Link } from 'react-router-dom';

export interface IProps {
  icon: string;
  heading: string;
  text: string;
  linkTarget: string;
}

/**
 * Stateless component representing a single service call-to-action in the homepage services section.
 */
const ServiceCTA: React.FC<IProps> = ({ icon, heading, text, linkTarget }: IProps) => {
  return (
    <div className="service-cta" data-test="ServiceCTAComponent">
      <img className="service-cta__icon" src={icon} alt={`${heading} service`} data-test="Icon" />
      <h2 className="service-cta__heading" data-test="Heading">{heading}</h2>
      <p className="service-cta__text" data-test="Text">{text}</p>
      <div className="service-cta__link-wrapper">
        <Link className="service-cta__link" to={linkTarget} data-test="Link">Find out more.</Link>
      </div>
    </div>
  );
};

export default ServiceCTA;
