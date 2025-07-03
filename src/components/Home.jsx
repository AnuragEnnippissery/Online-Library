import './Home.css';

import {Link} from 'react-router-dom';

function Home(){
    return(
        <>
        
        <div className='section-list'>
            <section className="book-section">
                <h1>Fiction</h1>
                <div>
                    <img src="https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1334659192i/7913305.jpg"alt="fiction" height="400px" width="300px"/>
                </div>

            </section>
            <section className="book-section">
                <h1>Non-Fiction</h1>
                <div>
                    <img src="https://cdn.penguin.co.in/wp-content/uploads/2024/01/9780804855334.jpg"alt="fiction" height="400px" width="300px"/>
                </div>

            </section>
            <section className="book-section">
                <h1>Sci -Fi</h1>
                <div>
                    <img src="https://covers.openlibrary.org/b/id/8370227-L.jpg"alt="fiction" height="400px" width="300px"/>
                </div>

            </section>

            




                       
           
        </div>
        <div className="section-header">
            <h2>Popular Books</h2>
        </div>
        <div className='section-list'>
            <section className="book-section">
                <h1>The Immortal Life of Henrietta Lacks</h1>
                <div>
                    <img src="https://covers.openlibrary.org/b/id/8231851-L.jpg"alt="fiction" height="400px" width="300px"/>
                </div>

            </section>

            <section className="book-section">
                <h1>Sapiens: A Brief History of Humankind</h1>
                <div>
                    <img src="https://covers.openlibrary.org/b/id/10234480-L.jpg"alt="fiction" height="400px" width="300px"/>
                </div>

            </section>

            <section className="book-section">
                <h1>ikigai</h1>
                <div>
                    <img src="https://cdn.penguin.co.in/wp-content/uploads/2024/01/9780804855334.jpg"alt="fiction" height="400px" width="300px"/>
                </div>

            </section>
            <section className="book-section">
                <h1>Educated</h1>
                <div>
                    <img src="https://covers.openlibrary.org/b/id/9250903-L.jpg"alt="fiction" height="400px" width="300px"/>
                </div>

            </section>


        </div>
        </>
    )
}
export default Home;