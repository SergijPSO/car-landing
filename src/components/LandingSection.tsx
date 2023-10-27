import React, { ReactNode } from "react";

interface LandingSectionProps {
  modifier: string;
  identifier: string;
  children: ReactNode;
}

const LandingSection: React.FC<LandingSectionProps> = (props) => {
  return (
    <section
      className={`app__section app__section${props.modifier}`}
      id={props.identifier}
    >
      {props.children}
    </section>
  );
};

export default LandingSection;
