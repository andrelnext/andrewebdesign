import React from 'react';
// import logo from './logo.svg';
import './App.css';
import { Link } from "react-router-dom";

function Exp() {
    return (
        <div className="App">
            <div className="header">
                <Link to="/">Invoices</Link> |{" "}
                <Link to="/expenses">Expenses</Link>
            </div>
            <div className="header-home">
                Estamos na pagina dois
            </div>
        </div>
    )
        ;
}

export default Exp;
