import logo from "./logo.svg";
import "antd/dist/antd.css";
import "./App.css";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { Breadcrumb, Layout, Menu } from "antd";
import HomeLayout from "./layouts/HomeLayout";
import Login from "./pages/Login/Login";
import React from "react";
export default function App({}) {
  const getToken = localStorage.getItem("token");
  console.log("getToken", getToken);

  return (
    <div>
      <br></br>
      <div>
        {!getToken ? (
          <Routes>
            <Route path="login" element={<Login />} />
            <Route path="*" element={<Login />} />
          </Routes>
        ) : (
          <HomeLayout></HomeLayout>
        )}
      </div>
    </div>
  );
}
