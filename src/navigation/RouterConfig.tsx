import React, { lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import { Path } from "./constants";

const Home = lazy(() => import("pages/home/Home"));

const RouterConfig = () => (
  <Suspense fallback={<div>Loading</div>}>
    <Routes>
      <Route element={<Home />} path={Path.Home} />
    </Routes>
  </Suspense>
);

export default RouterConfig;
