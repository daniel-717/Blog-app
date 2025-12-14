import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import PostDetail from './pages/PostDetail';
import PostForm from './components/PostForm';
import './index.css';
import { Toaster, toast } from 'react-hot-toast';


const Header = () => (
  <header style={{ 
    backgroundColor: 'var(--primary-color)', 
    color: 'white', 
    padding: '20px', 
    marginBottom: '20px'
  }}>
    <nav className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
      <Link to="/" style={{ color: 'white', textDecoration: 'none', fontSize: '1.5em' }}>
        MERN Blog
      </Link>
      <Link to="/create" className="btn-primary" style={{ textDecoration: 'none' }}>
        + Create New Post
      </Link>
    </nav>
  </header>
);

function App() {
  return (
    <Router>
      <Toaster position="top-center" />
      <Header />
      <main className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/post/:id" element={<PostDetail />} />
          <Route path="/create" element={<PostForm />} />
          <Route path="/edit/:id" element={<PostForm isEdit={true} />} />
        </Routes>
      </main>
    </Router>
  );
}

export default App;