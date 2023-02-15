import logo from './logo.svg';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Article from './pages/Article';
import ArticlesList from './pages/ArticlesList';
import NavBar from './components/NavBar';


function App() {
  return (
    <div className="App">
      <NavBar />   
      <div className="max-w-screen-md mx-auto pt-20"> 
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/about" element={<About/>} />
          <Route path="/article/:name" element={<Article/>} />
          <Route path="/articles-list" element={<ArticlesList/>} />
        </Routes>
      </div>
    </div>
  );
}

export default App;