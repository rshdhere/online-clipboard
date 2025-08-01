import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { Sender } from "./pages/Sender";
import { Receiver } from "./pages/Receiver";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/send" element={<Sender />} />
                <Route path="/receive" element={<Receiver />} />
                <Route path="*" element={<Navigate to="/send" replace />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
