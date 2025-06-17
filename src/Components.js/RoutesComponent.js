import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Home';
import About from './About';
import SampleReactTable from './SampleReactTable';
import Nav from './Nav';
import { SampleFields } from './SampleFields';
const RoutesComponent = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Nav />} />
                <Route path="/home" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/sampleReactTable" element={< SampleReactTable />} />
                <Route path="/sampleFields" element={< SampleFields />} />

            </Routes>
        </Router>
    )
}
export default RoutesComponent