import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import TipForm from './pages/TipForm';
import TipArchive from './pages/TipArchive';

function App() {
  return (
    <Router>
      <header>
        <h1>bataSutra Tips</h1>
        <nav>
          <Link to="/">Submit Tip</Link>
          <Link to="/archive">View Archive</Link>
        </nav>
      </header>
      <Routes>
        <Route path="/" element={<TipForm />} />
        <Route path="/archive" element={<TipArchive />} />
      </Routes>
    </Router>
  );
}

export default App;
