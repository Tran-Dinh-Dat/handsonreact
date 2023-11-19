import React, { SyntheticEvent, useState } from 'react';
import { Project } from './Project';

interface ProjectFormProps {
  project: Project;
  onCancel: () => void;
  onSave: (project: Project) => void;
}

function ProjectForm({ onCancel, onSave, project: initialProject }: ProjectFormProps) {
  const [project, setProject] = useState<Project>(initialProject);

  const handleChange = (event: any) => {
    const { type, name, value, checked } = event.target;
    // if input type is checkbox use checked
    // otherwise it's type is text, number etc. so use value
    let updatedValue = value === 'checkbox' ? checked : value;

    // if input type is number convert the updatedValue string to a +number
    if (type === 'number') {
      updatedValue = Number(updatedValue);
    }

    const change = {
      [name]: updatedValue,
    };

    let updatedProject: Project;
    // need to do funtional update b/c
    // the new project state is based on the previous project state
    // so we can keep the project properties that aren't being edited +like project.id
    // the spreed operator (...) is used to
    // spead the previous project properties and the new change
    setProject((p) => {
      updatedProject = new Project({ ...p, ...change });
      return updatedProject;
    })
  }
  const handleSubmit = (even: SyntheticEvent) => {
    even.preventDefault();
    onSave(project)
  }

  return (
    <form className='input-group vertical' onSubmit={handleSubmit}>
      <div className='form-control'>
        <label htmlFor="name">Project name:</label>
        <input
          type="text"
          name='name'
          placeholder='enter name'
          value={project.name}
          onChange={handleChange}
        />
      </div>
      <div className='form-control'>
        <label htmlFor="description">Project description:</label>
        <textarea
          name='description'
          placeholder='enter description'
          value={project.description}
          onChange={handleChange}
          />
      </div>
      <div className='form-control'>
        <label htmlFor="budget">Project budget:</label>
        <input
          type="number"
          name='budget'
          placeholder='enter budget'
          value={project.budget}
          onChange={handleChange}
          />
      </div>
      <div className='form-control'>
        <label htmlFor="isActive">Active?</label>
        <input
          type="checkbox"
          name='isActive'
          checked={project.isActive}
          onChange={handleChange}
          />
      </div>
      <div className='input-group'>
        <button className="primary bordered medium">Save</button>
        <span></span>
        <button type='button' onClick={onCancel} className='bordered medium'>Cancel</button>
      </div>
    </form>
  )
}

export default ProjectForm;