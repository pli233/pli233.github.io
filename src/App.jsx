import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Experience from "./pages/Experience";
import Education from "./pages/Education";
import Technologies from "./pages/Technologies";
import Contact from "./pages/Contact";
import Resume from "./pages/Resume";

export default function App() {
    return (
        <div className="flex flex-col min-h-screen">
            <Header />
            <div className="flex-1">
                <Routes>
                    <Route index element={<Home />} />
                    <Route path="/experience" element={<Experience />} />
                    <Route path="/education" element={<Education />} />
                    <Route path="/technologies" element={<Technologies />} />
                    <Route path="/contact" element={<Contact />} />
                    <Route path="/resume" element={<Resume />} />
                    <Route path="*" element={<Home />} />
                </Routes>
            </div>
            <Footer />
        </div>
    );
}
