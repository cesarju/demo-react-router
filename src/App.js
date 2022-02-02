import './App.css';
import {Link, Outlet, NavLink} from 'react-router-dom' 
//import {Dogs} from './components/Dogs'
function App() {
  return (
    <div>
      
      <h1>Demo de react router</h1>
      <NavLink style={({ isActive }) => {
              return {
                margin: "1rem 0",
                color: isActive ? "blue" : "",
                fontWeight: "bold",
              };
            }} to='/dogs'>Dogs</NavLink> |{" "}  
      <Link to='/Cats'>Cats</Link>
      <Outlet/>
    </div>

  );
}

export default App;
