import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate, Link } from 'react-router-dom'

const FileUpload = () => {

    const navigator = useNavigate()
    const [file, setFile] = useState();

    const submitFile = async (event) => {
        event.preventDefault();
        const formData = new FormData();
        formData.append('../file', file);

        axios.post('http://localhost:8000/api/File', formData, {
            headers: {
                'Content-Type': 'multipart/form-data',
            },
        })
            .then(res => {
                console.log(res)
                navigator('/')
            })
            .catch(error => {
                console.log(error);
            });
    };

    const handleFileUpload = (event) => {
        setFile(event.target.files[0]);
    };

    return (
        <div>
            <div className="go_home">
                <Link className="link" to='/'>Go back home</Link>
            </div>

            <form onSubmit={submitFile}>
                <input type="file" onChange={handleFileUpload} />
                <button type='submit'>Upload</button>
            </form>
        </div>

    );
};

export default FileUpload;