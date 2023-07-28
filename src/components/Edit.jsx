import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { useNavigate, useParams, Link } from 'react-router-dom'
import { Button } from 'react-bootstrap'
import '../style.css';

const Edit = () => {
    const navigator = useNavigate()

    const { id } = useParams()

    const [fnameErr, setFnameErr] = useState([])
    const [lnameErr, setLnameErr] = useState([])
    const [companyErr, setCompanyErr] = useState([])
    const [cof, setCof] = useState([])

    const [insuredData, setInsuredData] = useState({
        fname: "",
        lname: "",
        company: "",
    })


    const handleChange = (e) => {
        const { value, name } = e.target
        setInsuredData(current => ({ ...current, [name]: value }))
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        axios.put(`http://localhost:8000/api/insured/${id}`, insuredData)
            .then(res => navigator(`/viewOne/${insuredData._id}`))
            .catch(err => {
                const errs = err.response.data.errors

                if (errs.fname) {
                    setFnameErr(errs.fname.message)
                } else {
                    setFnameErr('')
                }

                if (errs.lname) {
                    setLnameErr(errs.lname.message)
                } else {
                    setLnameErr('')
                }

                if (errs.company) {
                    setCompanyErr(errs.company.message)
                } else {
                    setCompanyErr('')
                }
            })
    }

    const getInsured = () => {
        axios.get(`http://localhost:8000/api/insured/${id}`)
            .then(res => setInsuredData(res.data))
            .catch(err => console.log(err))
    }
    useEffect(getInsured, [])






    return (
        <div className="container ">
            <div className="col-sm-12">
                <h1 id="h1">Edit the insured</h1>
                <div className="go_home">
                    <Link className="link" to='/'>Go back home</Link>
                </div>

                <form onSubmit={handleSubmit}>
                    <div>
                        <p>{fnameErr}</p>
                        <label>First Name:</label>
                        <input className="fsize" onChange={handleChange} name="fname" value={insuredData.fname}></input>
                    </div>


                    <div>
                        <p>{lnameErr}</p>
                        <label>Last Name:</label>
                        <input onChange={handleChange} name="lname" value={insuredData.lname}></input>
                    </div>

                    <div>
                        <p>{companyErr}</p>
                        <label>insurance company:</label>
                        <input onChange={handleChange} name="company" value={insuredData.company}></input>
                    </div>


                    <div className="upload_div row" id="upload_div">
                        <div className="col-sm-12 col-md-12">
                            <div className="file" >
                                <input type="file" id="file" />
                                {/* <label for="file-upload" class="upload-label">
                                    Choose File
                                </label> */}
                                <button  className="upload btn btn-primary">Upload File</button>
                            </div>
                        </div>

                        

                    </div>

                    <div className="col-sm-12 col-md-12">
                        <button className="add btn btn-primary">Edit insured</button>
                    </div>


                </form>
            </div>
        </div>
    )
}

export default Edit