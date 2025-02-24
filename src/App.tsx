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
/* Hack The Box Section */
import HTB from './pages/htb/HTB';
import HTBPage1 from './pages/htb/posts/htbPage1'
import HTBPage2 from './pages/htb/posts/htbPage2'
/* CCN-CERT (Ciberseguridad) Section */
import Angeles from './pages/angeles/Angeles'
import AngelesPage1 from './pages/angeles/posts/angelesPage1'

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

            {/* Hack The Box Section */}
            <Route path="/htb" element={<HTB/>} />
            <Route path="/htb/htbPage1" element={<HTBPage1 />} />
            <Route path="/htb/htbPage2" element={<HTBPage2 />} />

            {/* CCN-Cert (Ciberseguridad) Section*/}
            <Route path="angeles" element={<Angeles/>} />
            <Route path="/angeles/angelesPage1" element={<AngelesPage1 />} />
            
          </Routes>
        </header>
      </div>
    </Router>
  );
}

export default App;
