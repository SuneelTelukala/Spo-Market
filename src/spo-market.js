import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import logo from '../assets/images/logo-1.png';
import './styles.css';

export function Aus() {
    return (
        <div>
            <BrowserRouter>
                <header className="d-flex justify-content-between" id="spo">
                    <div>
                        <img src={logo} className="logo" alt="" />
                    </div>
                    <div>
                        <Link to="/" className="me-4">Home</Link>
                        <Link to="/how-it-works" className="me-4">How it Works</Link>
                        <Link to="/project" className="me-4">Project</Link>
                        <Link to="/about" className="me-4">About</Link>
                        <Link to="/login" className="me-4">Login</Link>
                        <Link to="/signup" className="me-4">Sign up</Link>
                    </div>
                </header>

                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/how-it-works" element={<HowItWorks />} />
                    <Route path="/project" element={<Project />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/signup" element={<SignUp />} />
                </Routes>
            </BrowserRouter>
        </div>
    );
}
