import React from "react";

interface ProjectItemProps {
  modifier: string;
  project_name: string;
  project_text: string;
}

const ProjectItem: React.FC<ProjectItemProps> = (props) => {
  return (
    <div
      className={`app__projects-list__item app__projects-list__item${props.modifier}`}
    >
      <div className='app__projects-list__item-content'>
        <h3 className='app__projects-list__item-name'>{props.project_name}</h3>
        <p className='app__projects-list__item-caption'>{props.project_text}</p>
      </div>
    </div>
  );
};

export default ProjectItem;
