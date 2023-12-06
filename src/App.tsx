import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Navigation from './components/Navigation/Navigation';
import Page from './components/Page/Page';
import AdminPage from './components/AdminPage/AdminPage';
import './App.css';

const App = () => (
  <Router>
    <div>
      <Navigation/>
      <Routes>
        <Route path="/pages/admin" element={<AdminPage/>}/>
        <Route path="/pages/:pageName" element={<Page/>}/>
      </Routes>
    </div>
  </Router>
);

export default App;
