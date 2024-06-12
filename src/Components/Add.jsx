import React, { useState } from 'react'
import NavBar from './NavBar'
import axios from 'axios'

const Add = () => {
    const [data,setData] = useState(
        
            {
                "sid":"",
                "sname":"",
                "scourse":"",
                "percentage":""
            }
        
    )
    const inputHandler = (event) =>{
        setData({...data,[event.target.name]:event.target.value})
    }
    const readValue = () =>{
        console.log(data)
        axios.post("http://localhost:8080/add",data).then(
            (response)=>{
                console.log(data)
                if (response.data.status=="success") {
                    alert("Successfully Added")
                    
                } else {
                    alert("Error")
                    
                }
            }
        ).catch().finally()
    }
  return (
    <div>
            <NavBar/>
            <div className="container">
                <div className="row">
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <div className="row g-3">
                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">

                            <label htmlFor="" className="form-label">STUDENT ID</label>
                            <input type="text" className="form-control" name="sid" value={data.sid} onChange={inputHandler}/>

                            </div>
                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">

                            <label htmlFor="" className="form-label">STUDENT NAME</label>
                            <input type="text" className="form-control" name='sname' value={data.sname} onChange={inputHandler}/>

                            </div>
                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">

                            <label htmlFor="" className="form-label">COURSE</label>
                            <select name="scourse" value={data.scourse} onChange={inputHandler} id="" className="form-control">
                                <option value="select...">select...</option>
                                <option value="MCA">MCA</option>
                                <option value="BCA">BCA</option>
                                <option value="BTECH">BTECH</option>
                                <option value="MTECH">MTECH</option>
                            </select>

                            </div>
                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">

                            <label htmlFor="" className="form-label">PERCENTAGE</label>
                            <input type="text" className="form-control" name='percentage' value={data.percentage} onChange={inputHandler}/>

                            </div>
                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">

                            <button className="btn btn-success" onClick={readValue}>REGISTER</button>

                            </div>
                        </div>
                    </div>
                </div>
            </div>

    </div>
  )
}

export default Add