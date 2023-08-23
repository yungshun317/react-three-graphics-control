import CameraControl from "./components/CameraControl";
import OrbitControl from "./components/OrbitControl";
import PresentationControl from "./components/PresentationControl";
import TransformControl from "./components/TransformControl";
import PivotControl from "./components/PivotControl";
import {BrowserRouter, Navigate, Route, Routes, Link, NavLink} from "react-router-dom";

const Scene = () => {
    return (
        <BrowserRouter>
            { /* <CameraControl /> */ }
            { /* <OrbitControl /> */ }
            { /* <PresentationControl /> */ }
            { /* <TransformControl /> */ }
            { /* <PivotControl /> */ }
            <Routes>
                <Route index element={<Homepage />} />
                <Route path="camera" element={<CameraControl />} />
                <Route path="orbit" element={<OrbitControl />} />
                <Route path="presentation" element={<PresentationControl />} />
                <Route path="transform" element={<TransformControl />} />
                <Route path="pivot" element={<PivotControl />} />
                <Route path="*" element={<Homepage />} />
            </Routes>
        </BrowserRouter>
    );
};

const Homepage = () => {
    return (
        <div>
            <NavLink to="camera">CameraControls</NavLink>
            <NavLink to="/orbit">OrbitControls</NavLink>
            <NavLink to="/presentation">PresentationControls</NavLink>
            <NavLink to="/transform">TransformControls</NavLink>
            <NavLink to="/pivot">PivotControls</NavLink>
        </div>
    )
}

export default Scene;