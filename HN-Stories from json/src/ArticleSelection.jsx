import React, { Component } from 'react';
import './ArticleSelection.css';
import { Row, Col } from "react-bootstrap";


  function ArticleSelection(props) {
    let str = props.url;
    let start = str.indexOf("//");
    let url = str.slice(start + 2, str.indexOf("/", start + 2));
    return (
      <div className="container">
        <div className="Row">
          {props.title ? <div className="title" className= "Col">
          <a className="a_link_login" href="{props.url}">{props.title}</a></div>: null} 

          {props.url ?<div className="Col" className="comhead">
                  <a className="comhead_a" href="{props.url}"> ({url}) </a> </div> : null }
        </div>   
        <div className="Row">
          {props.by? <div className="Col" className="subtext" >by {props.by} | </div> :null}
          {props.id? <div className="Col" className="subtext" colSpan="2"> {props.id} </div> : null  }
          {props.time ?<div className="Col" className="subtext"> | {props.time}</div> : null}  
        </div>
      </div>
    );
} 
export default ArticleSelection;

