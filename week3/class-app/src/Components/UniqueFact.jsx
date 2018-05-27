import React, { Component } from 'react';
import './UniqueFact.css';
import {Col, Row, Grid} from 'react-bootstrap';



function UniqueFact(props) {
    let d = new Date(props.time);
          let year = d.getFullYear();
          let date = d.getDate();
          let month = d.getMonth() + 1;
          let newDate = date + "-" + month + "-" + year;
  return (
    <Row>
      <Col>
          {props.title ? <a href="{props.url}"><h5>{props.title}</h5></a>: null}
          <p> by {props.by} | {newDate} | id {props.id} </p>
      </Col>
    </Row>
  );
} 
export default UniqueFact;