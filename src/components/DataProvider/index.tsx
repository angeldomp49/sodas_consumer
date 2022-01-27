import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import App from "../../App";
import EditForm from "../EditForm";
import Table from "../Table";

export const DataProvider = () => {

    return (
        <BrowserRouter>
                <Routes>
                <Route path="/" element={<Table />} />
                <Route path="edit" element={<EditForm />}>
                    <Route path=":sodaId" element={<EditForm />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
};

export default DataProvider;