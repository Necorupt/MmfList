import React from "react";

import { Routes, Route } from "react-router";

import MainLayout from "./Layouts/MainLayout";

import MainPage from "./Pages/MainPage";
import MmfList from "./Pages/MmfList";
import MmfInfoLayout from "./Layouts/MmfInfoLayout";

export default class App extends React.Component {
    render() {
        return (
            <Routes>
                <Route path="/" element={<MainLayout />}>
                    <Route index element={<MainPage />} />
                </Route>
                <Route path="mmf-list" element={<MmfInfoLayout />}>
                    <Route index element={<MmfList />}></Route>
                </Route>
            </Routes>
        );
    }
}
