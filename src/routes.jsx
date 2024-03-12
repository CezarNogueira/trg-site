import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home"

function AppRoutes() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />}></Route>
                <Route path="/sobre" element={<Sobre />}></Route>
                <Route path="/contato" element={<Contato />}></Route>
                <Route path="/faq" element={<Faq />}></Route>
                <Route path="/privacidade" element={<Privacidade />}></Route>
                <Route path="/servico" element={<Servico />}></Route>
                <Route path="/servicos" element={<Servicos />}></Route>
            </Routes>
        </BrowserRouter>
    )
}

export default AppRoutes