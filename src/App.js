import './Components/Button.js'
import { Button } from './Components/Button.js';
import { Footer } from './Components/Footer.js';
import { Sidebar } from './Components/Sidebar';
// import { Discription } from './Components/Discription.js'

function App() {
  return (
    <div className="App">
     <Sidebar/>
     <div className='rightdiv'> 
     <h2>Buttons</h2>
     <Button name="Default"/>
    <Footer/>
     </div>
     
     
    </div>
  );
}

export default App;
