import './App.css'
import {Routes, Route, Navigate} from "react-router-dom";
import Home from "./page/Home/index";
import Apply from "./page/Apply/index";
import List from "./page/List";
import ListDetails from "./page/List/Details";

function App() {
    return (
        <Routes>
            <Route path="/home" element={<Home/>}/>
            <Route path="/register-api" element={<Apply/>}/>
            <Route path="/list-api" element={<List/>}/>
            <Route path="/list-api-detail" element={<ListDetails/>}/>
            <Route path="/" element={<Navigate to="/home" />} />
        </Routes>
    )
}

export default App
