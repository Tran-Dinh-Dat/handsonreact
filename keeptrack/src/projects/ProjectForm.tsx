import React from 'react';

function ProjectForm() {
  return (
    <form className='input-group vertical'>
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
        <button type='button' className='bordered medium'>Cancel</button>
      </div>
    </form>
  )
}

export default ProjectForm;