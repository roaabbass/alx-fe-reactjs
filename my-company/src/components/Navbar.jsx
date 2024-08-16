
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav style={{ 
      padding: '10px', 
      borderBottom: '1px solid #ccc', 
      display: 'flex',               
      justifyContent: 'space-between' 
    }}>
      <Link to="/" style={{ marginRight: '10px' }}>Home</Link>
      <Link to="/about" style={{ marginRight: '10px' }}>About</Link>
      <Link to="/services" style={{ marginRight: '10px' }}>Services</Link>
      <Link to="/contact">Contact</Link>
    </nav>
  );
}

export default Navbar;
