import React from 'react';
import { connect } from 'react-redux';

import * as actions from '../ducks/saving';

export default connect(({ saving }) => ({ saving }))(
  ({ saving: { initial, years, rate, employeCategory, costUniversity, discountUniversity  }, className, dispatch }) => (
    <div className="container-fluid col-md-8">
     <h2>Datos Iniciales</h2>
      <div className="container-fluid">
        <label className="container-fluid col-md-8">Ahorro Mensual</label>
        <input className="container-fluid col-md-4" type="text" maxLength="7" value={ initial } onChange={ e=>dispatch(actions.setInitial(e.target.value)) } />
      </div>
      <div className="container-fluid">
        <label className="container-fluid col-md-8">Curso del estudiante</label>
        <select className="container-fluid col-md-4" type="number" maxLength="2" value={ years } onChange={ e=>dispatch(actions.setYears(e.target.value)) }>
            <option value="0">0</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
            <option value="6">6</option>
            <option value="7">7</option>
            <option value="8">8</option>
            <option value="9">9</option>
            <option value="10">10</option>
            <option value="11">11</option>
        </select>
      </div>
      <div className="container-fluid">
        <label className="container-fluid col-md-8">Categoria del empleado</label>
        <select className="container-fluid col-md-4" type="number" maxLength="2" value={ employeCategory } onChange={ e=>dispatch(actions.setCategory(e.target.value)) }>
            <option value="0.5">C1</option>
            <option value="0.43">C2</option>
            <option value="0.33">C3</option>
            <option value="0.2">C4</option>
        </select>
      </div>
      <div className="container-fluid">
        <label className="container-fluid col-md-8">Costo de la Universidad</label>
        <select className="container-fluid col-md-4" type="number" maxLength="2" value={ costUniversity } onChange={ e=>dispatch(actions.setCost(e.target.value)) }>
            <option value="2000000">2.000.000</option>
            <option value="2500000">2.500.000</option>
            <option value="5500000">5.500.000</option>
        </select>
      </div>
      <div className="container-fluid">
        <label className="container-fluid col-md-8">Descuento de la Universidad</label>
        <select className="container-fluid col-md-4" type="number" maxLength="2" value={ discountUniversity } onChange={ e=>dispatch(actions.setDiscount(e.target.value)) }>
            <option value="0.05">5%</option>
            <option value="0.10">10%</option>
            <option value="0.15">15%</option>
            <option value="0.20">20%</option>
        </select>
      </div>
    </div>
  ));