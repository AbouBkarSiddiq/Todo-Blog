import { Link } from "react-router-dom";

const NotFound = () => {
  return ( 
    <div>
      <h1>Sorry</h1>
      <p>Page not found.....</p>
      <Link to='/'>Go Back to Home Page....</Link>
    </div>
   );
}
 
export default NotFound;