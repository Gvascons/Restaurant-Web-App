import React from "react"
import { Container, Typography } from "@material-ui/core"
import Add from "../components/add"
import { MuiThemeProvider, createTheme } from '@material-ui/core/styles';
import './Homepage.css'

const themeAdd = createTheme({
  palette: {
    secondary: { main: '#008000'}
  }
});

function AddPage(){
    return (
    <Container maxWidth = "md" class="aux">
      <Typography
      gutterBottom
      variant = "h2"
      align = "center">
        Cadastrar Restaurante
      </Typography>

      <MuiThemeProvider theme = {themeAdd}>
      <Add />
      </MuiThemeProvider>

    </Container>
    )
}

export default AddPage;