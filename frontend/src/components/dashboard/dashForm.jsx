import { Grid } from "@material-ui/core"
import Form from "../../layouts/form"
import {Button, Select, Input} from "../../controls"
import EditIcon from '@mui/icons-material/Edit'
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline'
import { useState, useEffect } from "react"
import RestaurantService from "../../service/restaurant"
import React from 'react'
import './dash.css'

let idAdm = Number(localStorage.getItem('idAdm'))

export default function DashForm(){
    const [selected, setSelected] = useState('')
    const [name, setName] = useState('Nome')
    const [restaurantes, setRestaurantes] = useState([])
    let allRestaurants =[]

    useEffect(() => {
        (async function getAdmById(){
            const resp = await RestaurantService.getAdmById(idAdm)
            setName(resp["name"])
            if(resp["restaurants"]){
                setRestaurantes(resp["restaurants"].map(function(item){
                    return item.name
                }))
            }
            else{
                allRestaurants = []
            }
        })()
    },[])

    for(var i=0; i<restaurantes.length; i++){
        let aux = {id:i, title: restaurantes[i]}
        allRestaurants.push(aux)
    }

    localStorage.setItem("editId",selected)

    const handleDelete = () =>{
        (async function removeRestaurant(){
            if (selected >= 0){
                console.log(selected)
                RestaurantService.deleteRestaurant(idAdm, {selected})
                window.location.reload()
            }
            else alert("Selecione um Restaurante")
            
        })()
    }

    return(
        <Form id='aux'>
            <Grid container>
                <Grid item xs={6}>
                    <Input
                    disabled
                    label = {name}
                    name = "nome"
                    />
                    <Select
                        label = "Restaurante"
                        name = "restauranteId"
                        onChange = {event => {setSelected(event.target.value)}}
                        options = {allRestaurants}
                    />

                    <Button
                    size = "small"
                    startIcon = {<EditIcon />}
                    color = "primary"
                    href = "/edit"
                    variant  = "contained"
                    ></Button>

                    <Button
                    size = "small"
                    startIcon = {<DeleteOutlineIcon />}
                    color = "secondary"
                    onClick = {handleDelete}
                    ></Button>
                </Grid>

                <Button
                    size = "small"
                    href="/add" 
                    variant="contained"
                >Add Restaurante</Button>

                <Button
                    size = "large" href="/" 
                    variant="contained"
                >Sair</Button>
            </Grid>
        </Form>
    )
}