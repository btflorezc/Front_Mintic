import React, { Component, Fragment, useState, useEffect } from "react";
import { useQuery, gql } from "@apollo/client";
import Form from "react-bootstrap/Form";
import Accordion from "react-bootstrap/Accordion";
import ListGroup from "react-bootstrap/ListGroup";
import Button from "react-bootstrap/Button";

function FormularioAvance() {
  const PROYECTOS = gql`
    query {
      proyectos {
        lider
        nombre
        presupuesto
        objetivos_generales
        objetivos_especificos
        fecha_inicio
        fase
      }
    }
  `;

  const { loading, error, data } = useQuery(PROYECTOS);
  if (loading) return <h1>Cargando....</h1>;
  if (error) return <h1>Error</h1>;

  return (
    <Fragment>
      <h2 className="te">Registrar Avances  </h2>
      <div className="row">
        <div className="col "></div>
      </div>
      <hr className="lin"></hr>
      <table className="table row1">
        {" "}
        <thead className="table-dark">
          {" "}
          <tr>
            <th scope="col">Avances</th>
          </tr>
        </thead>
        <tbody> 
            <td >
       <Form>
        <Form.Group className="mb-3" controlId="formGroupEmail">
          <Form.Label>Descripción</Form.Label>
          <Form.Control  type="email" placeholder="Describa el anvance" />
        </Form.Group>
      </Form>
      </td>
      
      </tbody>
      </table>
      <Button variant="dark" style={{ marginLeft:'40%' }} >Guardar Cambios </Button>
    </Fragment>
    
  );
}

export default FormularioAvance;
