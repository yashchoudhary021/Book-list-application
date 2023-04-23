import React from 'react'
import NavBar from '../Home/NavBar';
import "../login_Register/login.css"
import { useState } from 'react'
import axios from "axios";
import { useNavigate } from 'react-router-dom';
function AddBook() {
    const [title, setTitle] = useState();
    const [isbn, setIsbn] = useState();
    const [author, setAuthor] = useState();
    const [desc, setDesc] = useState();
    const [pubDate, setPubDate] = useState();
    const [pub, setPub] = useState();
    const navigate = useNavigate();

    const submitHandle = (e) => {
        console.log(title, pub)
        const formData = new FormData();
        formData.append("title", title)
        formData.append("isbn", isbn)
        formData.append("author", author)
        formData.append("desc", desc)
        formData.append("pubDate", pubDate)
        formData.append("pub", pub)

        axios.post("http://localhost:8080/book", formData)
            .then((res) => {
                console.log(res)
                navigate("/")
            })
            .catch((err) => {
                console.log(err)
            })
        e.preventDefault();
        setTitle("")
        setIsbn("")
        setAuthor("")
        setDesc("")
        setPubDate("")
        setPub("")
    }
    return (<>
        <NavBar />
        <button className='home-btn2' onClick={() => navigate("/")}>Show Book List</button>
        <h1>Add Book</h1>
        <div className='cc'>Create New Book</div>
        <div className='container-login' id="book">
            <form action="" onSubmit={submitHandle}>
                <input required type="text" placeholder='Title of the Book' name='title' value={title} onChange={(e) => { setTitle(e.target.value) }} /><br />
                <input required type="text" placeholder='ISBN' name='isbn' value={isbn} onChange={(e) => { setIsbn(e.target.value) }} /><br />
                <input required type="text" placeholder='Author' name='author' value={author} onChange={(e) => { setAuthor(e.target.value) }} /><br />
                <input required type="text" placeholder='Describe this book' name='desc' value={desc} onChange={(e) => { setDesc(e.target.value) }} /><br />
                <input required type="text" placeholder='published_date' value={pubDate} name='pubDate' onChange={(e) => { setPubDate(e.target.value) }} /><br />
                <input required type="text" placeholder='Publisher of this Book' value={pub} name='pub' onChange={(e) => { setPub(e.target.value) }} /><br />

                <button className='button-login' type="submit">Submit</button>
            </form>
        </div>
    </>)
}

export default AddBook;
