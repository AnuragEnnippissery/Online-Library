import { Link, useParams } from "react-router-dom";
//import BookData from "../utils/Bookdata";
import { useSelector } from "react-redux";
//import 'BrowseBook.css';
function BookDetails(){
    const params=useParams()
    const books=useSelector(state=>state.books)
    const Book=books.filter(book=>book.id==params.id)
    console.log(Book)
    return(
        <>
        <h1>book details</h1>
        <section className="book-section-book">
            {Book.map((book)=>{
                return(
                    <>
                        <h2>{book.title}</h2>
                        <div>
                            <img src={book.image} alt={book.title} height="300px" width="250px"/>
                        </div>
                        <h3>{book.author}</h3>
                        <p>{book.description}</p>
                        <h5>{book.rating}</h5>

                    </>

                )
            }
                
            )}
            <Link to='/BrowseBook'>
                <button>Back to Browse</button>
            </Link>
            
        </section>
 
        </>
    )
}
export default BookDetails;