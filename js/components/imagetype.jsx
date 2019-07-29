import React from 'react';

export default class ImageType extends React.Component{
    onDone =(event)=>{
        if(typeof this.props.done === "function"){
            this.props.done(event);
        }
    }
    render(){
        return(
            <div>
                <select value={this.props.imageType} onChange={this.onDone}
                className="inputs">
                    <option value="all">All</option>
                    <option value="photo">Photo</option>
                    <option value="illustration">Illustration</option>
                    <option value="vector">Vector</option>
                </select>
            </div>
        )
    }
}