import React, { Component, useState, useEffect } from 'react';


const useFetch = (url)=>{ 

    const[data, setData] = useState(null);
    const[loading, setLoading] = useState(true);

    useEffect(() => {

        fetch(url)
        .then((res) => {
            return res.json();
        })
        .then((data) => {
            setData(data);
            setLoading(false);
        });
    }, [url]);

    return data;

}

export default useFetch