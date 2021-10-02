import React, { useState } from "react";
import './Navbar.css'
const Navbar = () => {
    return(
        <div className="row">

            <nav>
                <div className="nav-wrapper grey darken-3">
                    <div className="container">
                        <div className="row navRow">
                            <div className="col s1">
                                <a href="https://wesoly97.github.io/reactToDo/" className="brand-logo">E-TASK</a>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default  Navbar