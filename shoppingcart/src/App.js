import './App.css';
import { Header, Footer } from './components';
import {AllRoutes} from "./routes/";

function App() {
  return (
    <div className=''>
      <Header/>
      <AllRoutes/>
      <Footer/>
    </div>
  );
}

export default App;
