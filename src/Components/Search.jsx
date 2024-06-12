import React from 'react'

const Search = () => {
  return (
    <div>

        <div className="container">
            <div className="row">
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <row className="row g-3">
                        <div className="col col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">

                        <label htmlFor="" className="form-label">STUDENT ID</label>
                        <input type="text" className="form-control" />
                            
                        </div>
                        <div className="col col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">

                        <button className="btn btn-success">REGISTER</button>

                        </div>
                    </row>
                </div>
            </div>
        </div>

    </div>
  )
}

export default Search