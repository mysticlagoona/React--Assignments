import React, { Component } from 'react';
import getHNStories from './getHNStories';
import UniqueFact from './UniqueFact';
import './Loading.css';

export default class Jobs extends Component {
    constructor() {
        super();
        this.state = {
            data: [],
            Loading : false,
        };
        getHNStories('job')
        .then(data => { console.log( data ); return data; })
        .then(data => { 
            this.setState({ 
                data : data,
                loading : true, 
            })
        })
        .catch( error => console.log(error));
    }

    render () {
        return (
            <div>
                {this.state.data.length === 0 ?  <div class="loader align-middle"></div> : null }
                
                
                { this.state.data.map(item => 
                    <UniqueFact 
                        title={item.title} 
                        url={item.url}
                        time={item.timeISO}
                        id={item.id}
                        by={item.by.id} />
                        ) 
                }
                
            </div>    
        );
    
    }
}
