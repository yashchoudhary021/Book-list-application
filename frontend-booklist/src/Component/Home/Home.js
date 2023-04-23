import React from 'react'
import { useEffect, useState } from 'react';
import NavBar from './NavBar';
import axios from 'axios';
import image1 from '../../images/img-2.png'
import image2 from '../../images/img-3.png'
import { useNavigate } from 'react-router-dom';

function Home() {
    const navigate = useNavigate();
    const [data, setData] = useState([{
        img: image1,
        title: "my first",
        author: "Yash",
        description: "book is yash"
    },
    {
        img: image2,
        title: "my second",
        author: "sanju",
        description: "book is yash"
    },
    {
        img: image1,
        title: "my third",
        author: "ankit",
        description: "book is yash"
    },
    {
        img: image2,
        title: "my forth",
        author: "DV",
        description: "book is yash"
    }
    ]);
    // useEffect(() => {
    //     axios.get("http://localhost:8080/book")
    //         .then((res) => {
    //             console.log(res)
    //             if (res.status === 200) {
    //                 setData(res.data)
    //             }
    //         })
    //         .catch((err) => {
    //             console.log(err)
    //         })
    // })
    return (<>
        <NavBar />
        <h1>Books List</h1>
        <button className="home-btn" onClick={() => navigate('/addbook')}>+ Add New Book</button>
        <div className='container-home' onClick={() => navigate('/record')}>
            {
                data.map((e, index) => {
                    return <div key={e.index} className='card'>
                        <div className='image'>
                            <img src={e.img} alt="" />
                        </div>
                        <div className='titel'>{e.title}</div>
                        <div className='author'>{e.author}</div>
                        <div className='description'>{e.description}</div>
                    </div>
                })
            }
        </div>
    </>)
}

export default Home;
