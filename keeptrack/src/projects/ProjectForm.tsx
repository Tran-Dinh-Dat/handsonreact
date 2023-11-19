import React, { SyntheticEvent, useState } from 'react';
import { Project } from './Project';

interface ProjectFormProps {
  project: Project;
  onCancel: () => void;
  onSave: (project: Project) => void;
}

function ProjectForm({ onCancel, onSave, project: initialProject }: ProjectFormProps) {
  const [project, setProject] = useState<Project>(initialProject);
  const [errors, setErrors] = useState({
    name: '',
    description: '',
    budget: '',
  })

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
    });
    setErrors(() => validate(updatedProject));
  }

  function validate(project: Project) {
    let errors: any = {
      name: '',
      description: '',
      budget: '',
    }
    if (project.name.length === 0) {
      errors.name = 'Name is required';
    }
    if (project.name.length > 0 && project.name.length < 3) {
      errors.name = 'Name needs to be at least 3 characters.';
    }
    if (project.description.length === 0) {
      errors.description = 'Description is required.';
    }
    if (project.budget === 0) {
      errors.budget = 'Budget must be more than $0';
    }
    return errors;
  }

  function isValid() {
    return (
      errors.name.length === 0 &&
      errors.description.length === 0 &&
      errors.budget.length === 0
    );
  }

  const handleSubmit = (even: SyntheticEvent) => {
    even.preventDefault();
    if (!isValid()) return;
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
        {errors.name.length > 0 && (
          <div className="card error">
            <p>{errors.name}</p>
          </div>
        )}
      </div>
      <div className='form-control'>
        <label htmlFor="description">Project description:</label>
        <textarea
          name='description'
          placeholder='enter description'
          value={project.description}
          onChange={handleChange}
        />
        {errors.description.length > 0 && (
          <div className="card error">
            <p>{errors.description}</p>
          </div>
        )}
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
        {errors.budget.length > 0 && (
          <div className="card error">
            <p>{errors.budget}</p>
          </div>
        )}
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