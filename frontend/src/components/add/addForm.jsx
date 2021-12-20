import React, { useState } from "react"
import { Grid } from "@material-ui/core"
import SaveIcon from '@mui/icons-material/Save'
import ArrowBackIcon from '@mui/icons-material/ArrowBack'
import Form from "../../layouts/form"
import { Input, Button } from "../../controls"
import RestaurantService from "../../service/restaurant"
import { useNavigate } from "react-router-dom"

export default function AddForm(props){
    const navigate = useNavigate()
    const [flag, setFlag] = useState(props.edit)
    const [editedFlag, setEditedFlag] = useState(false)

    let editId = Number((localStorage.getItem("editId")))
    let idAdm  = Number((localStorage.getItem("idAdm")))

    const [name,   setName]   = useState('')
    const [tel,    setTel]    = useState('')
    const [email,  setEmail]  = useState('')
    const [bairro, setBairro] = useState('')
    const [num,    setNum]    = useState('')
    const [cidade, setCidade] = useState('')
    const [rua,    setRua]    = useState('')
    const [preco,  setPreco]  = useState('')
    const [desc,   setDesc]   = useState('')

    const handleChangeName   = e => setName(e.target.value)
    const handleChangeTel    = e => setTel(e.target.value)
    const handleChangeEmail  = e => setEmail(e.target.value)
    const handleChangeBairro = e => setBairro(e.target.value)
    const handleChangeNum    = e => setNum(e.target.value)
    const handleChangeCidade = e => setCidade(e.target.value)
    const handleChangeRua    = e => setRua(e.target.value)
    const handleChangePreco  = e => setPreco(e.target.value)
    const handleChangeDesc   = e => setDesc(e.target.value)
    
    if (flag=="true"){
        (async function getRestaurant(){
            const resp = await RestaurantService.getAdmById(idAdm)
            let rest = resp["restaurants"][Number(editId)]

            setName(rest["name"])
            setTel(rest["tel"])
            setEmail(rest["email"])
            setBairro(rest["bairro"])
            setNum(rest["num"])
            setRua(rest["rua"])
            setCidade(rest["city"])
            setPreco(rest["price"])
            setDesc(rest["desc"])

            setFlag("false")
            setEditedFlag(true)
        })()
    }

    const validateForm = () =>{
        let valid = true
        let temp = {}
        temp.errors = {}

        temp.name   = name
        temp.tel    = tel
        temp.email  = email
        temp.bairro = bairro
        temp.num    = num
        temp.cidade = cidade
        temp.rua    = rua
        temp.preco  = preco
        temp.desc   = desc

        if (!temp.tel){
            valid = false
            temp.errors["tel"] = "Campo Necessário"
        }
        if (typeof temp.tel !== "undefined"){
            if (!temp.tel.match(/^[0-9]+$/)){
                valid = false
                temp.errors["tel"] = "Apenas números"
            }
        }
        if (!temp.email){
            valid = false
            temp.errors["email"] = "Campo Necessário"
        }
        if (typeof temp.email !== "undefined"){
            let lastAtPos  = temp.email.lastIndexOf("@")
            let lastDotPos = temp.email.lastIndexOf(".")

            if(
                !(
                    lastAtPos < lastDotPos &&
                    lastAtPos > 0 &&
                    temp.email.indexOf("@@") == -1 &&
                    lastDotPos > 2 &&
                    temp.email.length - lastDotPos > 2
                )
            ) {
                valid = false
                temp.errors["email"] = "Email não válido"
            }
        }
        if (!temp.bairro){
            valid = false
            temp.errors["bairro"] = "Campo Necessário"
        }
        if (!temp.num){
            valid = false
            temp.errors["num"] = "Campo Necessário"
        }
        if (typeof temp.num !== "undefined"){
            if (!temp.num.match(/^[0-9]+$/)){
                valid = false
                temp.errors["num"] = "Apenas números"
            }
        }
        if (!temp.cidade){
            valid = false
            temp.errors["cidade"] = "Campo Necessário"
        }
        if (!temp.rua){
            valid = false
            temp.errors["rua"] = "Campo Necessário"
        }
        if (!temp.preco){
            valid = false
            temp.errors["preco"] = "Campo Necessário"
        }
        if (typeof temp.preco !== "undefined"){
            if (!temp.preco.match(/^[$]+$/)){
                valid = false
                temp.errors["preco"] = "Apenas $"
            }
        }
        if (!temp.desc){
            valid = false
            temp.errors["desc"] = "Campo Necessário"
        }

        return valid
    }

    const handleSubmit = e =>{
        e.preventDefault()
        if(validateForm()){
            (async function getAdmById(){
                //const admin = await RestaurantService.getAdmById(idAdm)
                let temp ={
                    name: name,
                    tel: tel,
                    email: email,
                    bairro: bairro,
                    num: num,
                    city: cidade,
                    rua: rua,
                    price: preco,
                    desc: desc
                }
                
                try{
                    if(!editedFlag){
                        await RestaurantService.createNewRestaurant(idAdm, temp)
                    }
                    else{
                        temp.idRest = editId
                        const data = await RestaurantService.updateRestaurant(idAdm, temp)
                    }

                    setEditedFlag(false)                
                    alert("Salvo")
                    window.location.href = '/dash'
                    
                }
                catch(error){
                    console.log("ERROR", error)
                    alert("Erro de salvamento")
                }
            })()      
        }
        else{
            alert("Erro de Preenchimento")
        }
    }

    return(
        <Form onSubmit={handleSubmit}>
            <Grid container>
                <Grid item xs={6}>
                    <Input
                    //disabled
                    value = {name}
                    onChange={handleChangeName}
                    label = "Nome"
                    name = "nome"
                    />
                </Grid>
                <Grid item xs={6}>
                    <Input
                    //disabled
                    value = {tel}
                    onChange={handleChangeTel}
                    label = "Telefone"
                    name = "telefone"
                    />
                </Grid>
                <Grid item xs={6}>
                    <Input
                    //disabled
                    value = {email}
                    onChange={handleChangeEmail}
                    label = "E-mail"
                    name = "email"
                    />
                </Grid>
                <Grid item xs={6}>
                    <Input
                    //disabled
                    value = {cidade}
                    onChange={handleChangeCidade}
                    label = "Cidade"
                    name = "cidade"
                    />
                </Grid>
                <Grid item xs={6}>
                    <Input
                    //disabled
                    value = {bairro}
                    onChange={handleChangeBairro}
                    label = "Bairro"
                    name = "bairro"
                    />
                </Grid>
                <Grid item xs={6}>
                    <Input
                    //disabled
                    value = {rua}
                    onChange={handleChangeRua}
                    label = "Rua"
                    name = "rua"
                    />
                </Grid>
                <Grid item xs={6}>
                    <Input
                    //disabled
                    value = {num}
                    onChange={handleChangeNum}
                    label = "Número"
                    name = "numero"
                    />
                </Grid>
                <Grid item xs={6}>
                    <Input
                    //disabled
                    value = {preco}
                    onChange={handleChangePreco}
                    label = "Preço (Ex. $ ou $$$)"
                    name = "preco"
                    />
                </Grid>
                <Grid item xs={12}>
                    <Input
                    value = {desc}
                    onChange={handleChangeDesc}
                    label = "Descrição"
                    name = "descricao"
                    />

                    <Button
                    size = "large"
                    startIcon = {<SaveIcon />}
                    color = "secondary"
                    type = "submit"
                    >SALVAR</Button>
                    
                    <Button
                    size = "large"
                    startIcon = {<ArrowBackIcon />}
                    href="/dash" 
                    variant="contained"
                    >VOLTAR</Button>
                </Grid>
            </Grid>
        </Form>
    )
}