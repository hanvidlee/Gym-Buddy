import React, { useState } from 'react';

export default function Upload() {

    const [image, setImage] = useState({});

    const fileOnChange = (event) => {
        console.log(event.target.files[0]);
        setImage(event.target.files[0]);
    }

    const sendImage = (event) => {
        let formdata = new FormData();

        formdata.append("avatar", image)

        fetch('http://localhost:8080/api/uploadFile', {
            method: "post",
            body: formdata
        }).then((res) => res.text())
        .then((resBody) => {
            console.log(resBody);
        });
    };

    return (
        <div className="upload">
            <input type="file" onChange={fileOnChange}/>
            <button onClick={sendImage}>Upload</button>
        </div>
    )
}
