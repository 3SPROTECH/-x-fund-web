import React from 'react';
import Container from './Container';

interface SectionProps {
  children: React.ReactNode;
  className?: string;      
  containerClass?: string;  
  id?: string;              
}

const Section: React.FC<SectionProps> = ({ 
  children, 
  className = '', 
  containerClass = '',
  id = '' 
}) => {
  return (
    <section id={id} className={`w-full ${className}`}>
      <Container className={containerClass}>
        {children}
      </Container>
    </section>
  );
};

export default Section;