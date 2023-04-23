import React from 'react'
import { useNavigate } from 'react-router-dom';
import NavBar from './NavBar';

function Record() {
    const navigate = useNavigate();
    return (<>
        <NavBar />
        <button className='home-btn2' onClick={() => navigate("/")}>Show Book List</button>
        <h1>Book's Record</h1>
        <div className='cc'>View Book's info</div>
        <div>
            <table>
                <tbody>
                    <tr>
                        <td>1</td>
                        <td>Title</td>
                        <td>Books</td>
                    </tr>
                    <tr>
                        <td>2</td>
                        <td>Author</td>
                        <td>Yash</td>
                    </tr>
                    <tr>
                        <td>3</td>
                        <td>ISBN</td>
                        <td>slfjdno</td>
                    </tr>
                    <tr>
                        <td>4</td>
                        <td>Publisher</td>
                        <td>Yash choudhary</td>
                    </tr>
                    <tr>
                        <td>5</td>
                        <td>Published date</td>
                        <td>23-04-2023</td>
                    </tr>
                    <tr>
                        <td>6</td>
                        <td>Description</td>
                        <td>This is a book</td>
                    </tr>
                </tbody>
            </table>
        </div>
        <button style={{marginLeft: "390px"}} className='home-btn2'>Delete Book</button>
        <button className='home-btn2'>Edit Book</button>
    </>)
}
export default Record;
