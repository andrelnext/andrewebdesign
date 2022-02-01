import React from 'react';
import { render } from "react-dom";
import {
    BrowserRouter,
    Routes,
    Route
} from "react-router-dom";
import App from './App';
import Exp from './expensive';

const rootElement = document.getElementById("root");
    render(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<App />} />
                <Route path="expenses" element={<Exp />} />
            </Routes>
        </BrowserRouter>,
    rootElement
);
