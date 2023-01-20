import React, { useState, useRef } from "react";
import { AppBar, Toolbar } from "@mui/material";

import "./App.css";

function App() {
  return (
    <>
      <AppBar position="fixed">
        <Toolbar>
          <div className="flex-1"></div>
          <div className="flex-bold">NOTEPAD</div>
          <div className="flex-1"></div>
        </Toolbar>
      </AppBar>
    </>
  );
}

export default App;
