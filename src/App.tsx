import './App.css'
import {Routes, Route} from "react-router-dom";
import Home from "./page/Home/index";
import Apply from "./page/Apply/index";

function App() {
    return (
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/apply" element={<Apply/>}/>
        </Routes>
    )
}

export default App
