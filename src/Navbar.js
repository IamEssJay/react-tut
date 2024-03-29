import{Link} from 'react-router-dom';
const Navbar = () => {
    return ( 
        <nav className="navbar">
            <h1>EssJay's React Blog</h1>
            <div className="links">
                <Link to="/">Home</Link>
                <Link to="/create">Blog 1</Link>
                <Link to="/firetut">Blog 2</Link>
            </div> 
        </nav>
     );
}
 
export default Navbar;