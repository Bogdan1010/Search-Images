import React from 'react';

export default class Update extends React.Component{
    onDone = (event) =>{
        if(typeof this.props.done === "function"){
            this.props.done(event)
        }
    }

    render(){
        return(
            <p onClick={this.onDone} className="pointer">Update</p>
        )
    }
}