import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Insured from './Insured'
import { useNavigate } from 'react-router-dom'
import FileUpload from './FileUpload'
import { Button } from 'react-bootstrap'
import '../style.css';

const Dashboard = () => {

    const [insureds, setInsureds] = useState([])

    const navigator = useNavigate()

    const getAllInsureds = () => {
        axios.get(`http://localhost:8000/api/insured`)
            .then(res => setInsureds(res.data))
            .catch(err => console.log(err))
    }
    useEffect(getAllInsureds, [])


    return (
        <div className="container">
            <div className="row">
                <div className="col-sm-12 col-md-12">
                    <h1 id="h1">Insured Data</h1></div>
                <div className="dash_head">

                    <button className="add_new btn btn-primary" onClick={() => navigator('/add')}>Add a new insured</button>
                </div>
                <div>
                <button className="add_new btn btn-primary" onClick={() => navigator('/file')}>Add a file</button>
                </div>


                {
                    insureds.map((insured, key) => {
                        return <Insured key={key} getInsured={getAllInsureds} insure={insured} />
                    })
                }


            </div>



        </div>
    )
}

export default Dashboard