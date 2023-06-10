import React from "react";
import { Route, Routes } from "react-router-dom";
import {Home, Login, LostPage, SignUp} from '../Models'
export default function App() {
    return (
        <Routes>
            <Route index element={<Home/>}></Route>
            <Route path="/login" element={<Login/>}></Route>
            <Route path="/signup" element={<SignUp/>}></Route>
            <Route path="*" element={<LostPage/>}></Route>
        </Routes>
    )
}