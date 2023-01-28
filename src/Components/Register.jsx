import React from 'react'

const Register = () => {
    return (
        <div>
            <div className="offset-lg-3 col-lg-6 mt-4">
                <form className="container">
                    <div className="card">
                        <div className="card-header">
                            <h1>User Registeration</h1>
                        </div>
                        <div className="card-body">
                            <div className="row">
                                <div className="col-lg-6">
                                    <div className="form-group">
                                        <label>User Name <span className='errmsg'>*</span></label>
                                        <input className="form-control" />
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <div className="form-group">
                                        <label>Full Name <span className='errmsg'>*</span></label>
                                        <input className="form-control" />
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <div className="form-group">
                                        <label>password <span className='errmsg'>*</span></label>
                                        <input type="password" className="form-control" />
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <div className="form-group">
                                        <label>Email <span className='errmsg'>*</span></label>
                                        <input className="form-control" />
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <div className="form-group">
                                        <label>Mobile <span className='errmsg'>*</span></label>
                                        <input className="form-control" />
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <div className="form-group">
                                        <label>Country <span className='errmsg'>*</span></label>
                                        <select className='form-control' >
                                            <option value="india">India</option>
                                            <option value="usa">USA</option>
                                            <option value="africa">Africa</option>
                                        </select>
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <div className="form-group">
                                        <label>ROLES <span className='errmsg'>*</span></label>
                                        <select className='form-control' >
                                            <option value="india">ADMIN</option>
                                            <option value="usa">CUSTOMER</option>
                                            <option value="africa">CLIENT</option>
                                        </select>
                                    </div>
                                </div>
                                <div className="col-lg-12">
                                    <div className="form-group">
                                        <label>Address</label>
                                        <textarea className="form-control"></textarea>
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <div className="form-group">
                                        <label>Gender</label>
                                        <br></br>
                                        <input type="radio" name='gender' value="male" className="app-check"></input>
                                        <label>Male</label>
                                        <input type="radio" name='gender'  className="app-check"></input>
                                        <label>Female</label>
                                    </div>
                                </div>
                            </div>

                        </div>
                        <div className="card-footer">
                            <button type='submit' className='btn btn-primary'>Register</button>
                            <a className="btn btn-danger">Back</a>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Register