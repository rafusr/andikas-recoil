import SideBar from './components/SideBar';
import Footer from './components/Footer';
import Admin from './components/Admin';
import Home from './components/Home';
import Blog from './components/Blog';
import Projects from './components/Projects';
import NotFound from './components/NotFound';

import {
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

function App() {
  const adminCode = localStorage.getItem('code')

  return (
    <div>
      <SideBar />
      <div className="pl-6 pr-24 lg:pl-20 lg:pr-36">
        <Routes>
          <Route path="/admin" element={adminCode === process.env.REACT_APP_ADMIN_CODE
            ? <Admin />
            : <Navigate replace to="/" />
          } />
          <Route path="/projects" element={<Projects />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/" element={<Home />} />
          <Route path="/*" element={<NotFound />} />
        </Routes>
        <Footer />
      </div>
    </div>
  );
}

export default App;
