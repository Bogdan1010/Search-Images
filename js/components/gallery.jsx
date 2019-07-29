import React from 'react';

export default class Gallery extends React.Component{
    
    onDone =(event)=>{
        if(typeof this.props.done === "function"){
            this.props.done(event)
        }
    }

    render(){
        return(
            <img src={this.props.whatImg.largeImageURL} onClick={this.onDone}/>
        )
    }
}