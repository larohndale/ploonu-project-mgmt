import { useState } from 'react';
import { FaList } from 'react-icons/fa';
import { useMutation, useQuery } from '@apollo/client';
import { ADD_PROJECT } from '../mutations/clientMutations';
import { GET_PROJECT } from '../queries/projectQueries';

export default function AddProjectModal() {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  //   const [clientId, setClientId] = useState('');
  const [status, setStatus] = useState('new');

  //   const [addProject] = useMutation(ADD_PROJECT, {
  //     variables: { name, description, clientId, status },
  //     update(cache, { data: { addProject } }) {
  //       const { projects } = cache.readQuery({
  //         query: GET_PROJECTS,
  //       });

  //       cache.writeQuery({
  //         query: GET_PROJECTS,
  //         // data: { projects: projects.concat([addProject]) },
  //         data: { projects: [...projects, addProject] },
  //       });
  //     },
  //   });

  const onSubmit = (e) => {
    e.preventDefault();
    if (name === '' || description === '' || status === '') {
      return alert('Please fill in all required fields');
    }

    // addProject(name, description, clientId, status);

    setName('');
    setDescription('');
    // setClientId('');
    setStatus('new');
  };

  return (
    <>
      <button
        type="button"
        className="btn btn-primary"
        data-bs-toggle="modal"
        data-bs-target="#addProjectModal"
      >
        <div className="d-flex align-items-center">
          <FaList className="icon" />
          New Project
        </div>
      </button>

      <div
        className="modal fade"
        id="addProjectModal"
        tabIndex="-1"
        aria-labelledby="addProjectModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="addProjectModalLabel">
                New Project
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <form onSubmit={onSubmit}>
                <div className="mb-3">
                  <label htmlFor="name" className="form-label">
                    Name
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="description" className="form-label">
                    Description
                  </label>
                  <textarea
                    className="form-control"
                    id="description"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    F
                  ></textarea>
                </div>
                <div className="mb-3">
                  <label htmlFor="phone" className="form-label">
                    Status
                  </label>
                  <select
                    id="status"
                    className="form-select"
                    value={status}
                    onChange={(e) => setStatus(e.target.value)}
                  >
                    <option value="new">Not Started</option>
                    <option value="progress">In Progress</option>
                    <option value="completed">Completed</option>
                  </select>
                </div>
                <div className="d-flex justify-content-end">
                  <button
                    type="button"
                    className="btn btn-secondary mx-1"
                    data-bs-dismiss="modal"
                  >
                    Close
                  </button>
                  <button
                    type="submit"
                    className="btn btn-primary mx-1"
                    data-bs-dismiss="modal"
                  >
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
