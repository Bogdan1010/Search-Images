import React from 'react';

export default class NewSearch extends React.Component{
    onDone = (event) =>{
        if (typeof this.props.done === "function"){
            this.props.done(event)
        }
    }

    render(){
        return(
            <input type="text" placeholder="New Search" value={this.props.qsearch} 
            onChange={this.onDone} id="newSearch"/>
        )
    }
}