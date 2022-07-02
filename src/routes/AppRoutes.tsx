import { Routes, Route } from "react-router-dom";
import Add from "../pages/Add/Add";
import Details from "../pages/Details/Details";
import Edit from "../pages/Edit/Edit";
import Home from '../pages/Home/Home';


const AppRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/id" element={<Details />} />
            <Route path="/add" element={<Add />} />
            <Route path="/edit" element={<Edit />} />
        </Routes>
    );
};

export default AppRoutes;