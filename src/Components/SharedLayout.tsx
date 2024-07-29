import * as React from "react";

import { Suspense } from "react";
import { Outlet } from "react-router-dom";
import { Container, CssBaseline } from "@mui/material";
import ResponsiveAppBar from "./ResponsiveAppBar";

export const SharedLayout: React.FC = () => {
  return (
    <div>
      <CssBaseline />
      <Container maxWidth="xl">
        <ResponsiveAppBar />
        <Suspense fallback={<div>Loading page...</div>}>
          <Outlet />
        </Suspense>
      </Container>
    </div>
  );
};
