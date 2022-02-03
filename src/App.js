import './App.css';
import {Link} from 'react-router-dom'

function App() {
  return (
    <div>
      <h1>Demo de react router V6 </h1> 
      <Link to="/gatos">Gatos</Link> | {" "}
      <Link to="/perros">Perros</Link>
    </div>
  );
}

export default App;
