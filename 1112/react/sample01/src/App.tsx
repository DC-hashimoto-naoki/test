import React from 'react';
import './App.css';

function App() {

  return (
    <div className="App">
      <section className="vh-100" style={{backgroundColor: "e2d5de"}}>
        <div className="container py-5 h-100">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col col-xl-10">

              <div className="card" style={{borderRadius: "15px"}}>
                <div className="card-body p-5">

                  <h6 className="mb-3">Awesome Todo List</h6>

                  <form className="d-flex justify-content-center align-items-center mb-4">
                    <div className="form-outline flex-fill">
                      <input type="text" id="form3" className="form-control form-control-lg" />
                      <label className="form-label" htmlFor='form3'>What do you need to do today?</label>
                    </div>
                    <button type="submit" className="btn btn-primary btn-lg ms-2">Add</button>
                  </form>

                  <ul className="list-group mb-0">
                    <li
                      className="list-group-item d-flex justify-content-between align-items-center border-start-0 border-top-0 border-end-0 border-bottom rounded-0 mb-2">
                      <div className="d-flex align-items-center">
                        <input className="form-check-input me-2" type="checkbox" value="" aria-label="..." />
                        Cras justo odio
                      </div>
                      <a href="#!" data-mdb-toggle="tooltip" title="Remove item">
                        <i className="fas fa-times text-primary"></i>
                      </a>
                    </li>
                    <li
                      className="list-group-item d-flex d-flex justify-content-between align-items-center border-start-0 border-top-0 border-end-0 border-bottom rounded-0 mb-2">
                      <div className="d-flex align-items-center">
                        <input className="form-check-input me-2" type="checkbox" value="" aria-label="..." checked />
                        <s>Dapibus ac facilisis in</s>
                      </div>
                      <a href="#!" data-mdb-toggle="tooltip" title="Remove item">
                        <i className="fas fa-times text-primary"></i>
                      </a>
                    </li>
                    <li
                      className="list-group-item d-flex d-flex justify-content-between align-items-center border-start-0 border-top-0 border-end-0 border-bottom rounded-0 mb-2">
                      <div className="d-flex align-items-center">
                        <input className="form-check-input me-2" type="checkbox" value="" aria-label="..." />
                        Morbi leo risus
                      </div>
                      <a href="#!" data-mdb-toggle="tooltip" title="Remove item">
                        <i className="fas fa-times text-primary"></i>
                      </a>
                    </li>
                    <li
                      className="list-group-item d-flex d-flex justify-content-between align-items-center border-start-0 border-top-0 border-end-0 border-bottom rounded-0 mb-2">
                      <div className="d-flex align-items-center">
                        <input className="form-check-input me-2" type="checkbox" value="" aria-label="..." />
                        Porta ac consectetur ac
                      </div>
                      <a href="#!" data-mdb-toggle="tooltip" title="Remove item">
                        <i className="fas fa-times text-primary"></i>
                      </a>
                    </li>
                    <li
                      className="list-group-item d-flex d-flex justify-content-between align-items-center border-start-0 border-top-0 border-end-0 border-bottom rounded-0 mb-0">
                      <div className="d-flex align-items-center">
                        <input className="form-check-input me-2" type="checkbox" value="" aria-label="..." checked />
                        Vestibulum at eros
                      </div>
                      <a href="#!" data-mdb-toggle="tooltip" title="Remove item">
                        <i className="fas fa-times text-primary"></i>
                      </a>
                    </li>
                    <li
                      className="list-group-item d-flex justify-content-between align-items-center border-start-0 border-top-0 border-end-0 border-bottom rounded-0 mb-2">
                      <div className="d-flex align-items-center">
                        <input className="form-check-input me-2" type="checkbox" value="" aria-label="..." />
                        Morbi leo risus
                      </div>
                      <a href="#!" data-mdb-toggle="tooltip" title="Remove item">
                        <i className="fas fa-times text-primary"></i>
                      </a>
                    </li>
                  </ul>

                </div>
              </div>

            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;
