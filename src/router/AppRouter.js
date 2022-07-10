import { BrowserRouter,Routes,Route } from "react-router-dom";
import Home from '../pages/Home';
import Projects from '../pages/Projects';
// import Gallery from '../pages/Gallery';
// import Blog from '../pages/Blog';
import About from '../pages/About';
import Contact from '../pages/Contact';
import Header from "../components/Header";
const AppRouter = () => {
  return (
    <BrowserRouter>
        <Header/>
        <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/projects" element={<Projects/>} />
            {/* <Route path="/gallery" element={<Gallery/>} /> */}
            {/* <Route path="/blog" element={<Blog/>} /> */}
            <Route path="/about" element={<About/>} />
            <Route path="/contact" element={<Contact/>} />
        </Routes>
    
    </BrowserRouter>
  )
}

export default AppRouter