import './App.css';
import Billionaries from './components/Billionaries';
import SpendMoney from './components/SpendMoney';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";



function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Billionaries />} />
        <Route path="/spendMoney/:personId" element={<SpendMoney />} />
      </Routes>
    </BrowserRouter>

  );
}

export default App;
