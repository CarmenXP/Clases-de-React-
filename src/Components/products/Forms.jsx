import React, {Component} from 'react'
let formulario= "https://veedorfiscal.files.wordpress.com/2014/09/registro1.jpg?w=627&h=470";
let form= "https://www.siva.gov.co/images/imagenes/logo-informes.png"
class Forms extends Component{

    state={
        name: "",
        email: "",
        tel: "",
        age: "",
        message: "",
        logo:"",
    }

whenChange = e =>{
    let value = e.target.value
    let field= e.target.name
    //virtual Dom:
    this.setState({[field]:value})
    console.log(this.state)
}
whenClick=()=>{
  let welcome= `Hola ${this.state.name}, tu registro se realizó de manera correcta. 
  Se ha enviado un correo de confirmación al correo: "${this.state.email}"
  `  
  this.setState({message: welcome})
  this.setState({logo: form})
}


render(){
    return(
        <div className="">
            <img id="formulario"src={formulario}/>

<label for="name">Nombre:</label>
<input name="name" onChange={this.whenChange} type="text" placeholder="Escribe tu nombre"/><br></br>
<label > Correo:</label>
<input name="email" onChange={this.whenChange} type="text" placeholder="example@gmail.com"/><br></br>
<label > Teléfono:</label>
<input name="tel" onChange={this.whenChange} type="text" placeholder="Ingresa tu teléfono"/><br></br>
<label > Edad:</label>
<input name="age" onChange={this.whenChange} type="text" placeholder="Escribe tu edad"/><br></br>
<button name="send" onClick={this.whenClick}>Inicia sesión</button>

    <p>{this.state.message}</p>
    <img  id="logo"src={this.state.logo}/>
        </div>
    )
}
}
export default Forms