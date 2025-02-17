import React from "react";
import Header from "../components/Header";
import { Outlet } from "react-router";

class MmfInfoLayout extends React.Component {
    render() {
        return (
            <>
                <Header />
                <div className="mt-40 mx-20 m-auto bg-slate-300 rounded-xl p-6">
                    <Outlet />
                </div>
            </>
        );
    }
}

export default MmfInfoLayout;
