import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Home';
import About from './About';
import SampleReactTable from './SampleReactTable';
import Nav from './Nav';
const RoutesComponent = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Nav />} />
                <Route path="/home" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/sampleReactTable" element={< SampleReactTable />} />
            </Routes>
        </Router>
    )
}
export default RoutesComponent