import React, {useState, useEffect} from 'react'

import {useParams, Link, useNavigate} from 'react-router-dom'
import {Button} from 'react-bootstrap'

import axios from 'axios'
import '../style.css';

const ViewOne = () => {

    const {id} = useParams()

    const navigator = useNavigate()

    const [insureData, setInsureData] = useState({
        fname: "",
        lname: "",
        company: "",
    })

    const getInsuredssData = () =>{
        axios.get(`http://localhost:8000/api/insured/${id}`)
        .then(res=>{
            setInsureData(res.data)
        })
        .catch(err =>console.log(err))
    }
    useEffect(getInsuredssData, [])

    return (
        <div>
            <div className="go_home">
                <Link className="link" to="/">Go back home</Link>
            </div>
            

            <h1 id="h1">{insureData.fname}, {insureData.lname}</h1>
            <h1 id="h1">{insureData.company}</h1>
            <div>
                <img src="https://files.jotform.com/jotformapps/certificate-of-insurance-template-f44852c30429da54e8e8a917374c9779.png?v=1690372238"/>
            </div>

            <button className="edit btn btn-primary" onClick={()=>{navigator(`/edit/${id}`)}}>Edit Insured</button>
        </div>
    )
}

export default ViewOne