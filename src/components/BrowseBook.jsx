import { useState } from "react";
//import BookData from "../utils/Bookdata";
import BookCover from "./BookCover";
import './BrowserBook.css';
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
function BrowseBook(){
    //const Bookdetails=BookData;
    //const[book,setBook]=useState(Bookdetails)
    const books=useSelector(state=>state.books)
    const[filteredBooks,setFilteredBooks]=useState(books)
    

    function HandleFilterBooks(category){
        const newBooks=books.filter(book=>book.category==category)
        setFilteredBooks(newBooks)
    }

    function handleSearch(e) {
        const query = e.target.value.toLowerCase();
        const searched = books.filter(book =>
            book.title.toLowerCase().includes(query) ||
            book.author.toLowerCase().includes(query)
        );
        setFilteredBooks(searched);
    }

    return(
        <>

        <div className="top-section">
            <div>
                <input type="text" width="300px"placeholder="search by author or title" onChange={handleSearch}></input>
            </div>
            <div className="button-group">
                <button onClick={()=>HandleFilterBooks("Fiction")}>Filter By Fiction</button>
                <button onClick={()=>HandleFilterBooks("Non-Fiction")}>Filter By Non-fiction</button>
                <button onClick={()=>HandleFilterBooks("Sci-Fi")}>Filter By Sci-Fi</button>
                <button onClick={()=>setFilteredBooks(books)}>All</button>
            </div>
        </div>
        <div className='section-list-book'>
            
            {filteredBooks.map((elem)=>{
               return (
                <Link to={`/BrowseBook/${elem.id}`}>
                    <div >
                        <BookCover key={elem.id} details={elem}/>
                    </div>
                </Link>
               )
            })}
        </div>
        </>
    )
}
export default BrowseBook;