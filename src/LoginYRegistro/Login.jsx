import React,{Fragment} from 'react';
import ProyectosAdmin from '../ProtectosAdmin/ProyectosAdmin';
import { useQuery, gql } from "@apollo/client";




function login(){
    return (
        <Fragment>
            <form action="/authenticate" method="POST">
                <h2>Login</h2>
                <div class="section">
                    <div class="title">Correo</div>
                    <div class="field"><input type="email" id="correo" name="correo"/></div>
                </div>
                <div class="section">
                    <div class="title">Clave</div>
                    <div class="field"><input type="password" id="clave" name="clave"/></div>
                </div>
                <div class="section">
                    <div class="button"><input type="submit" value="Login"/></div>
                </div>
            </form>
        </Fragment>
    );
}
export default login;