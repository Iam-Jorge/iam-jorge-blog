import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Navbar from './components/navbar/Navbar'; 
import Sidebar from './components/sidebar/Sidebar'; 
import AboutMe from './pages/aboutme/AboutMe';
/* Docker Section */
import Docker from './pages/docker/Docker';
import DockerPage1 from './pages/docker/posts/dockerPage1';
import DockerPage2 from './pages/docker/posts/dockerPage2';
import DockerPage3 from './pages/docker/posts/dockerPage3';
import DockerPage4 from './pages/docker/posts/dockerPage4';
import DockerPage5 from './pages/docker/posts/dockerPage5';
import DockerPage6 from './pages/docker/posts/dockerPage6';
import DockerPage7 from './pages/docker/posts/dockerPage7';
import DockerPage8 from './pages/docker/posts/dockerPage8';
import DockerPage9 from './pages/docker/posts/dockerPage9';
/* Hack The Box Section */
import HTB from './pages/htb/HTB';
import HTBPage1 from './pages/htb/posts/htbPage1'
import HTBPage2 from './pages/htb/posts/htbPage2'
import HTBPage3 from './pages/htb/posts/htbPage3'
import HTBPage4 from './pages/htb/posts/htbPage4'
import HTBPage5 from './pages/htb/posts/htbPage5'
/* CCN-CERT (Ciberseguridad) Section */
import Angeles from './pages/angeles/Angeles'
import AngelesPage1 from './pages/angeles/posts/angelesPage1'
import AngelesPage2 from './pages/angeles/posts/angelesPage2'

function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <Router>
      <div className="App">
        <Navbar toggleSidebar={toggleSidebar} />
        <Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
        <header className="App-header">
          <Routes>
            <Route path="/" element={<AboutMe />} />
            <Route path="/aboutme" element={<AboutMe />} />
            <Route path="/iam-jorge-blog" element={<AboutMe />} />
            
            {/* Docker Section */}
            <Route path="/docker" element={<Docker/>} />
            <Route path="/docker/dockerPage1" element={<DockerPage1 />} />
            <Route path="/docker/dockerPage2" element={<DockerPage2 />} />
            <Route path="/docker/dockerPage3" element={<DockerPage3 />} />
            <Route path="/docker/dockerPage4" element={<DockerPage4 />} />
            <Route path="/docker/dockerPage5" element={<DockerPage5 />} />
            <Route path="/docker/dockerPage6" element={<DockerPage6 />} />
            <Route path="/docker/dockerPage7" element={<DockerPage7 />} />
            <Route path="/docker/dockerPage8" element={<DockerPage8 />} />
            <Route path="/docker/dockerPage9" element={<DockerPage9 />} />

            {/* Hack The Box Section */}
            <Route path="/htb" element={<HTB/>} />
            <Route path="/htb/htbPage1" element={<HTBPage1 />} />
            <Route path="/htb/htbPage2" element={<HTBPage2 />} />
            <Route path="/htb/htbPage3" element={<HTBPage3 />} />
            <Route path="/htb/htbPage4" element={<HTBPage4 />} />
            <Route path="/htb/htbPage5" element={<HTBPage5 />} />

            {/* CCN-Cert (Ciberseguridad) Section*/}
            <Route path="angeles" element={<Angeles/>} />
            <Route path="/angeles/angelesPage1" element={<AngelesPage1 />} />
            <Route path="/angeles/angelesPage2" element={<AngelesPage2 />} />
            
          </Routes>
        </header>
      </div>
    </Router>
  );
}

export default App;
