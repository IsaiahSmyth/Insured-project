import React from 'react'
import axios from 'axios'
import { useNavigate, Link, useParams } from "react-router-dom"
import { Button } from 'react-bootstrap'
import '../style.css';

const Insured = props => {

    const { insure, getInsured } = props

    const { id } = useParams()

    const navigator = useNavigate()

    const handleDelete = (e) => {
        e.preventDefault()

        axios.delete(`http://localhost:8000/api/insured/${insure._id}`)
            .then(res => getInsured())
            .catch(err => console.log(err))
    }

    return (
        <div classname="container">
            <div className="row">
                <Link className="link" to={`/viewOne/${insure._id}`}>
                    <h3 className="name">{insure.fname}, {insure.lname}</h3>

                </Link>

                <p className="company">{insure.company}</p>
                <Link to={`/edit/${insure._id}`} ></Link>

                <div className="col-md-12 col-sm-12">
                    <img src={insure.cof} className="img-fluid" />
                </div>



                <div>
                    <button className="delete btn btn-primary" onClick={handleDelete}>Delete</button>
                </div>

            </div>
        </div>

    )
}

export default Insured