import React,{Fragment} from 'react';
import ProyectosAdmin from '../ProtectosAdmin/ProyectosAdmin';
import { useQuery, gql } from "@apollo/client";




function registro(){
    return (
        <Fragment>
<form action="/register" method="POST">
        <h2>Registro</h2>
        <div class="section">
            <div class="title">Nombre Completo</div>
            <div class="field"><input type="text" id="nombre_completo" name="nombre_completo"/></div>
        </div>
        <div class="section">
            <div class="title">Identificación</div>
            <div class="field"><input type="number" id="identificacion" name="identificacion"/></div>
        </div>
        <div class="section">
            <div class="title">Correo</div>
            <div class="field"><input type="email" id="correo" name="correo"/></div>
        </div>
        <div class="section">
            <div class="title">Clave</div>
            <div class="field"><input type="password" id="clave" name="clave"/></div>
        </div>
        <div class="section">
            <div class="title">Rol</div>
        </div>
        <select class="field" type="text" id="tipo_usuario" name="tipo_usuario">
            <option>Estudiante</option>
            <option>Líder</option>
            <option>Administrador</option>
        </select>
        <div class="section">
            <div class="button"><input type="submit" value="Registrar usuario"/></div>
        </div>
    </form>
        </Fragment>
    );
}
export default registro;