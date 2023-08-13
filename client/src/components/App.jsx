import react from 'react';
import Navbar from './Navbar';
import { BrowserRouter } from 'react-router-dom';
function App(){
    return <div>
        <BrowserRouter>
        <Navbar/>
        </BrowserRouter>
    </div>
}

export default App;