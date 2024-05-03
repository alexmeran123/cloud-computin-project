import {BrowserRouter, Routes, Route} from 'react-router-dom'
import ProtectedPage from "./components/ProtectedPage"
import Home from './pages/Home'
import Login from './pages/Login'
import Register from './pages/Register'
import React from 'react'
import Profile from "./pages/Profile";
import {useSelector} from "react-redux";
import Spinner from "./components/Spinner";
import ProjectInfo from "./pages/ProjectInfo";

function App() {
    const {loading} = useSelector((state) => state.loaders);
    return (
        <div>
            {loading && <Spinner/>}
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<ProtectedPage>
                        <Home/>
                    </ProtectedPage>}/>
                    <Route path="/profile" element={<ProtectedPage>
                        <Profile/>
                    </ProtectedPage>}/>
                    <Route
                        path="/project/:id"
                        element={
                            <ProtectedPage>
                                <ProjectInfo/>
                            </ProtectedPage>
                        }
                    />

                    <Route path="/login" element={<Login/>}/>
                    <Route path="/register" element={<Register/>}/>
                </Routes>
            </BrowserRouter>
        </div>
    )
}

export default App
