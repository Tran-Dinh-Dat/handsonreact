import React, { SyntheticEvent } from 'react';
import { Project } from './Project';

interface ProjectFormProps {
  onCancel: () => void;
  onSave: (project: Project) => void;
}

function ProjectForm({ onCancel, onSave }: ProjectFormProps) {
  const handleSubmit = (even: SyntheticEvent) => {
    even.preventDefault();
    onSave(new Project({name: 'Update project'}))
  }

  return (
    <form className='input-group vertical' onSubmit={handleSubmit}>
      <div className='form-control'>
        <label htmlFor="name">Project name:</label>
        <input type="text" name='name' placeholder='enter name'/>
      </div>
      <div className='form-control'>
        <label htmlFor="description">Project description:</label>
        <textarea name='description' placeholder='enter description'/>
      </div>
      <div className='form-control'>
        <label htmlFor="budget">Project budget:</label>
        <input type="number" name='budget' placeholder='enter budget'/>
      </div>
      <div className='form-control'>
        <label htmlFor="isActive">Active?</label>
        <input type="checkbox" name='isActive'/>
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