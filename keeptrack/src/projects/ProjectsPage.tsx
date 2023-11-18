import React from 'react';
import { MOCK_PROJECTS } from './MockProjects';
import ProjectList from './ProjectList';
import { Project } from './Project';

function ProjectsPage() {
  const saveProject = (project: Project) => {
    console.log('Save project: ', project);
    
  }

  return (
    <>
      <h1>Project</h1>
      <ProjectList projects={MOCK_PROJECTS} onSave={saveProject}/>
    </>
  )
}

export default ProjectsPage;
