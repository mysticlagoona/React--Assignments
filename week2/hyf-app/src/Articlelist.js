import React, { Component } from 'react';
import './Articlelist.css';




function Articlelist(props) {
    let str = props.url;
    let start = str.indexOf("//");
    let url = str.slice(start + 2, str.indexOf("/", start + 2));

    return (
        <tbody>
        <tr>
            <td className="title">
                {props.title ? <a className="a_link_login" href="{props.url}">{props.title}</a>: null} 
            </td>
            <td className="comhead">
                <a className="comhead_a" href="{props.url}"> ({url}) </a>
            </td>
        </tr>

        <tr>
            <td className="subtext" colSpan="2">{props.id}</td>
            <td className="subtext" > | by {props.by}</td>
            <td className="subtext" > | {props.time}</td>
        </tr>
        </tbody>
        

  );
}
export default Articlelist;