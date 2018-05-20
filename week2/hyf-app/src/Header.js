import React, { Component } from 'react';
import './Header.css';
import logo from './image/y18.gif';


  


function Header() {
    return ( 
        <table className="Main-table">
            <tbody>
                <tr>
                    <td className="Main-Table-td">
                        <table className="Sub-table">
                            <tbody>
                                <tr> 
                                    <td className="Sub-table-td">
                                    <span>
                                    <img className="header_logo" src= {logo} alt="logo" />
                                    <b><a className="header_link" href="#">Hacker News</a></b>
                                    |
                                    <a className="header_link" href="#">new</a>
                                    |
                                    <a className="header_link" href="#">comments</a>
                                    |
                                    <a className="header_link" href="#">show</a>
                                    |
                                    <a className="header_link" href="#">ask</a>
                                    |
                                    <a className="header_link" href="#">jobs</a>
                                    |
                                    <a className="header_link" href="#">submit</a>
                                    </span>
                                    </td>
                                    <td className="login">
                                    <span>
                                    <a className="header_link_login" href="#">login</a>
                                    </span>
                                    </td>   
                                </tr>
                            </tbody>
                        </table>
                    </td>
                </tr>
            </tbody>        
        </table>

  );
}
export default Header;