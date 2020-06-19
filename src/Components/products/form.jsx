import React, {Component} from 'react'
let logo = "https://send.firefox.com/icon.fd04d81a.svg"
class Form extends Component{

    state={
        name: "",
        email: "",
        tel: "",
        age: "",
    }

whenChange = e =>{
    let value = e.target.value
    let field= e.target.name
    //virtual Dom:
    this.setState({[field]:value})
    console.log(this.state)
}

render(){
    return(
        <nav className="">
            <img src={logo}/>
<h2>
    {this.state.name}
    {this.state.email} 
    {this.state.tel} 
    {this.state.age} 
    {/* nombre, correo, tel, edad*/}
</h2>
<input name="name" onChange={this.whenChange} type="text" placeholder="Escribe tu nombre"/>
<input name="email" onChange={this.whenChange} type="text" placeholder="Escribe tu email"/>
<input name="tel" onChange={this.whenChange} type="text" placeholder="Escribe tu tel"/>
<input name="age" onChange={this.whenChange} type="text" placeholder="Escribe tu edad"/>
<button>Inicia sesión</button>
        </nav>
    )
}
}
export default Form