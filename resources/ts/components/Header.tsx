import React from "react";
import { NavLink } from "react-router";

interface Props {}

interface State {}

class Header extends React.Component<Props, State> {
    state = { userName: "user" };
    constructor() {
        super();
    }
    render() {
        return (
            <div className="flex justify-between sticky-top bg-slate-500 p-2">
                <div className="flex items-center justify-between mx-4">
                    <NavLink to="/">
                        <h1 className="text-white text-2xl font-bold">
                            MmfList
                        </h1>
                    </NavLink>
                </div>
                <div className="flex items-center justify-between mx-4">
                    <NavLink to="/mmf-list">
                        <span className="text-white text-md font-bold">Список устройств</span>
                    </NavLink>
                </div>
                <div className="flex items-center space-x-2">
                    <span className="text-white text-sm">
                        Hello, {this.state.userName} test
                    </span>
                    <button className="border border-white text-white px-4 py-2 rounded-md">
                        Logout
                    </button>
                </div>
            </div>
        );
    }
}

export default Header;
