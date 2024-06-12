import React from 'react'

const Add = () => {
  return (
    <div>

            <div className="container">
                <div className="row">
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <div className="row g-3">
                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">

                            <label htmlFor="" className="form-label">STUDENT ID</label>
                            <input type="text" className="form-control" />

                            </div>
                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">

                            <label htmlFor="" className="form-label">STUDENT NAME</label>
                            <input type="text" className="form-control" />

                            </div>
                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">

                            <label htmlFor="" className="form-label">COURSE</label>
                            <select name="" id="" className="form-control">
                                <option value="select...">select...</option>
                                <option value="MCA">MCA</option>
                                <option value="BCA">BCA</option>
                                <option value="BTECH">BTECH</option>
                                <option value="MTECH">MTECH</option>
                            </select>

                            </div>
                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">

                            <label htmlFor="" className="form-label">PERCENTAGE</label>
                            <input type="text" className="form-control" />

                            </div>
                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">

                            <button className="btn btn-success">REGISTER</button>

                            </div>
                        </div>
                    </div>
                </div>
            </div>

    </div>
  )
}

export default Add