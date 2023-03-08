import React, { useState, useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";

export const Login = () => {

return (
    <>
    <div className="bodyL">
    <div className="container-form sign-up">
    <div className="welcome-back">
        <div className="message">
            <h2>Bienvenido a mi</h2>
            <p>Si ya tienes cuenta por favor inicia sesion aqui</p>
            <button className="sign-up-btn">Iniciar Sesion</button>
        </div>
    </div>
    <form className="formulario"/>
        <h2 className="create-account">Crear una cuenta</h2>        
        </div>           
        <p className="cuenta-gratis"> Crear una cuenta aqui</p>
        <input type="text" placeholder="Nombre"/>
        <input type="email" placeholder="Email"/>
        <input type="password" placeholder="Contraseña"/>
        <input type="button" value="Registrarse"/>
    
</div>
<div className="container-form sign-in">
    <form className="formulario"/>
        <h2 className="create-account">Iniciar sesion</h2>
        <div className="icons">
            <div className="border-icon">
                <i class='bx bxl-google'></i>
            </div>
            <div class="border-icon">
                <i class='bx bxl-instagram'></i>
            </div>                
            <div class="border-icon">
                <i class='bx bxl-facebook-circle' ></i>
            </div>
        </div>
        <p class="cuenta-gratis">¿Aun no tienes cuenta?</p>            
        <input type="email" placeholder="Email"/>
        <input type="password" placeholder="Contraseña"/>
        <input type="button" value="Iniciar Sesion"/>
    
    <div class="welcome-back">
        <div class="message">
            <h2>Bienvenido de nuevo</h2>
            <p>Si aun no tienes cuenta por favor registrese aqui</p>
            <button class="sign-in-btn">Registrarse</button>
        </div>
    </div>
    
</div> 
    
    </>
)

}