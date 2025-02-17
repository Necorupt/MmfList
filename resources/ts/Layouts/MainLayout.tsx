import React from "react";
import Header from "../components/Header";
import { Outlet } from "react-router";

class MainLayout extends React.Component {
    render() {
        return (
            <>
                <Header />
                <Outlet />
            </>
        );
    }
}

export default MainLayout;
