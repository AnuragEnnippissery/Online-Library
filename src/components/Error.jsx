import { Link } from "react-router-dom";

function Error(){
    return(
        <>
        <h3>The page you are searching do not exist  </h3>
        <Link to={'/'}>Back to Home Page</Link>
        </>
    )
}
export default Error;