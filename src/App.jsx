import { Routes, Route } from "react-router-dom";
import Home from "./pages/home";

function App() {
    return (
        <div className="flex flex-col min-h-screen">
            <main className="flex-grow">
                <Routes>
                    <Route path="/" element={<Home />} />
                </Routes>
            </main>
        </div>
    );
}

export default App;
