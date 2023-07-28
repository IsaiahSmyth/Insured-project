import React, { useState } from 'react'
import axios from 'axios'
import { useNavigate, useParams, Link } from 'react-router-dom'
import FileUpload from './FileUpload'
import { Button } from 'react-bootstrap'


const Add = () => {

    const navigator = useNavigate()

    const { id } = useParams()

    const [fnameErr, setFnameErr] = useState([])
    const [lnameErr, setLnameErr] = useState([])
    const [companyErr, setCompanyErr] = useState([])
    const [cof, setCofErr] = useState([])


    const [insuredData, setInsuredData] = useState({
        fname: '',
        lname: '',
        company: '',
    })



    const handleChange = (e) => {
        const { value, name } = e.target
        setInsuredData(current => ({ ...current, [name]: value }))
    }

    

    const handleSubmit = (e) => {
        e.preventDefault()

        axios.post("http://localhost:8000/api/insured", insuredData)
            .then(res => navigator('/'))
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

                if (errs.cof) {
                    setCofErr(errs.cof.message)
                } else {
                    setCofErr('')
                }
            })
    }

    return (
        <div className="container">

            <div className="row">
                <div className="col-sm-12 col-md-12">
                    <h1 className="add_title" id="h1">Add an insured</h1>
                </div>

                <div className="go_home col-sm-12 col-md-12">
                    <Link className="link" to='/'>Go back home</Link>
                </div>

                <form className="row" onSubmit={handleSubmit}>
                    <div className="add_div row d-flex align-items-center ">
                        <div className=" ">
                            <p className="err">{fnameErr}</p>
                            <label className="label">First Name:</label>
                            <input className="input" onChange={handleChange} name="fname" value={insuredData.fname}></input>
                        </div>
                    </div>
                    <div className="add_div row">
                        <div className="">
                            <p className="err">{lnameErr}</p>
                            <label className="label">Last Name:</label>
                            <input className="input" onChange={handleChange} name="lname" value={insuredData.lname}></input>
                        </div>
                        
                    </div>

                    <div className="add_div row ">
                        <div className="">
                            <p className="err">{companyErr}</p>
                            <label className="label">company: </label>
                            <input onChange={handleChange} name="company" value={insuredData.company}></input>
                        </div>
                    </div>


                    {/* <div className="upload_div row" id="upload_div">
                        <div className="col-sm-12 col-md-12">
                            <div className="file" >
                                <input type="file" id="file"  />
                                <label for="file-upload" class="upload-label">
                                    Choose File
                                </label>
                                <Button className="upload" onClick={handleFileUpload}>Upload File</Button>
                            </div>
                        </div>
                    </div> */}

                    <div className="col-sm-12 col-md-12">
                        <button input="submit" className="add btn btn-primary">Add insured</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Add