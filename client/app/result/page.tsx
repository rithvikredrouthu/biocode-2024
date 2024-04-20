import React, { useEffect, useState } from "react";

export default function Page() {
    const [message, setMessage] = useState("Loading");

    useEffect(() => {
        fetch("http://localhost:8080/api/home").then(
        response => response.json()
        ).then((data) => {
        setMessage(data.message);
        })
    }, []);
    return (

    );
}