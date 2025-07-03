import './BrowserBook.css';
function BookCover(props){
    return(
        <>
        
        
        <section className="book-section-book">
                <h2>{props.details.title}</h2>
                <div>
                    <img src={props.details.image} alt={props.details.title} height="400px" width="300px"/>
                </div>
                <h3>{props.details.author}</h3>
                {/* <p>{props.details.description}</p> */}
                <h5>{props.details.rating}</h5>
                <button>View Details</button>
            </section>
 
        </>
    )
}
export default BookCover;