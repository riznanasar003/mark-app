import React, { useState } from 'react'
import NavBar from './NavBar'
import axios from 'axios'

const Search = () => {
const [data, setData] = useState(
    {
        "sid":""
    }
)
const [result, setResult] = useState([])

const deleteStudent =(id) =>{
    let input = {"_id": id}
    axios.post("http://localhost:8080/delete",input).then(
        (response)=>{
            console.log(response.data)
            if (response.data.status=="success") {
                alert("Successfully Deleted")
                
            } else {
                alert("Error in Deletion")
                
            }
        }
    ).catch()
}
const inputHandler = (event) => {
    setData({ ...data, [event.target.name]:event.target.value })
}
const readvalue = () => {
    console.log(data)
    axios.post("http://localhost:8080/search",data).then(
        (response) => {
            setResult(response.data)
        }
    ).catch().finally()

}

  return (
    <div>
        <NavBar/>
        <div className="container">
            <div className="row">
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <row className="row g-3">
                        <div className="col col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">

                        <label htmlFor="" className="form-label">STUDENT ID</label>
                        <input type="text" className="form-control" name='sid' value={data.sid} onChange={inputHandler}/>
                            
                        </div>
                        <div className="col col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">

                        <button className="btn btn-success" onClick={readvalue}>SEARCH</button>

                        </div>
                    </row>
                </div>
            </div>
            <div className="row">
                        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                            <br />
                            <table class="table">
                                <thead>
                                    <tr>
                                        <th scope="col">STUDENT ID</th>
                                        <th scope="col">STUDENT NAME</th>
                                        <th scope="col">COURSE</th>
                                        <th scope="col">PERCENTAGE</th>
                    
                                    </tr>
                                </thead>
                                <tbody>
                                    {result.map(
                                        (value, index) => {
                                            return <tr>
                                                <th scope="row">{value.sid}</th>
                                                <td>{value.sname}</td>
                                                <td>{value.scourse}</td>
                                                <td>{value.percentage}</td>
                                
                                                <td>
                                                    <button className="btn btn-danger" onClick={()=>{deleteStudent(value._id)}}>REMOVE</button>
                                                </td>
                                            </tr>
                                        }
                                    )}
                                </tbody>
                            </table>
                        </div>
                    </div>

        </div>

    </div>
  )
}

export default Search