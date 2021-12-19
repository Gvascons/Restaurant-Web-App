import React from "react"
import { Container, Typography } from "@material-ui/core"
import Add from "../components/add"
import { MuiThemeProvider, createTheme } from '@material-ui/core/styles'
import './Homepage.css'

const themeAdd = createTheme({
  palette: {
    secondary: { main: '#008000'}
  }
});

function EditPage(){
    return (
    <Container maxWidth = "md" class="aux">
      <Typography
      gutterBottom
      variant = "h2"
      align = "center">
        Editar Cadastro
      </Typography>

      <MuiThemeProvider theme = {themeAdd}>
      <Add
        edit = "true"
      >
      </Add>
      </MuiThemeProvider>

    </Container>
    )
}

export default EditPage;