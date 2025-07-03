import {Link} from 'react-router-dom';
import './Navbar.css';
function Navbar(){
    return(
        <>
        <h1 className='title'>Online Library System</h1>
        <h2 className='title'>"Readers are people who are able to explore far worlds without any gadgets"</h2>
        <div>
            <nav className='navbar'>
                <Link to ="/">
                    <li>Home</li>
                </Link>
                <Link to ="/BrowseBook">
                    <li>Browse Book</li>
                </Link>
                <Link to ="/AddBook">
                    <li>Add Book</li>
                </Link>
            </nav>
        </div>
        
        </>
    )
}
export default Navbar;
    
