import React, { useEffect, useState } from 'react'
import NavBar from './NavBar'
import axios from 'axios'

const ViewAll = () => {
    const [data,changedData] = useState([])
    const fetchData = () =>{
        axios.post("http://localhost:8080/view",data).then(
            (response)=>{
                changedData(response.data)
            }
        ).catch().finally()
    }
    useEffect(()=>{fetchData()},[])
    return (
        <div>
            <NavBar/>
            <div className="container">
                <div className="row">
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <div className="row g-3">
                            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
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
                                        {data.map(
                                            (value,index)=>{
                                                return <tr>
                                                <th scope="row">{value.sid}</th>
                                                <td>{value.sname}</td>
                                                <td>{value.scourse}</td>
                                                <td>{value.percentage}</td>
                                            </tr>
                                            }
                                        )}
                                        
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default ViewAll