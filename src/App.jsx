import { Link, Route, Routes } from 'react-router-dom';
import Home from './component/Home.jsx';
import Profile from './component/Profile';

function App() {
  return (
    
     
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    
  );
}

export default App;
