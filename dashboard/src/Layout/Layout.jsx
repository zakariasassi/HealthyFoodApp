import React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import { styled, createTheme, ThemeProvider } from "@mui/material/styles";
import { Box } from "@mui/material";
import Sidebar from "../components/Drawer/Sidebar";
import Topbar from "../components/Appbar/Topbar";
function Layout() {
  const defaultTheme = createTheme();

  return (
    <div className="row ">
        <Topbar />
       
        <Sidebar    />
          {/* <div style={{ flex: "1", overflowY: "auto" }}>
            <h1 className="text-xl font-bold underline">Hello world!</h1>{" "}
          </div> */}
      </div>
  );
}

export default Layout;
