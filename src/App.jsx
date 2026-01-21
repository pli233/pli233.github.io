import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Resume from "./pages/Resume";

export default function App() {
    return (
        <div className="flex flex-col min-h-screen">
            <Header />
            <div className="flex-1">
                <Routes>
                    <Route index element={<Home />} />
                    <Route path="/resume" element={<Resume />} />
                    <Route path="*" element={<Home />} />
                </Routes>
            </div>
            <Footer />
        </div>
    );
}
