import { Button, TextField } from "@mui/material";
import React from "react";

const Mui = () => {
  return (
    <div>
      <TextField id="filled-basic" label="Filled" variant="standard" />
      <Button variant="contained">Click me</Button>
      <Button variant="outlined">Click me</Button>
    </div>
  );
};

export default Mui;
