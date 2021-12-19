import React from "react"
import { Container, Typography } from "@material-ui/core"
import Dash from "../components/dashboard";
import './Homepage.css'

function DashPage(){
    return (
    <Container maxWidth = "md" class="aux">
      <Typography
      gutterBottom
      variant = "h2"
      align = "center">
        Homepage!
      </Typography>
      <Dash />
    </Container>
    )
}

export default DashPage;