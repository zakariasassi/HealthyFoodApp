import React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import { styled, createTheme, ThemeProvider } from "@mui/material/styles";
import { Box } from "@mui/material";
import Sidebar from "../components/Drawer/Sidebar";
import Topbar from "../components/Appbar/Topbar";
function Layout(props) {
  const defaultTheme = createTheme();

  return (
    <>
      <div className="col">
        <div className="row">
          <Topbar />
        </div>
        <div className="col" style={{ marginTop: 60 }}>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
            }}
          >
            {props.page}
            <Sidebar />
          </div>
        </div>
      </div>
    </>
  );
}

export default Layout;
