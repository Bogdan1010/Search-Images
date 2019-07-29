import React from 'react';

export default class ImageType2 extends React.Component{
    state={
        show: "inputs hide"
    }
    onDone =(event)=>{
        if(typeof this.props.done === "function"){
            this.props.done(event);
        }
        this.setState({
            show: "inputs hide"
        })
    }

    show =(e)=>{
        if(this.state.show == "inputs hide"){
            this.setState({
                show: "inputs show"
            })
        } else{
            this.setState({
                show: "inputs hide"
            })
        }
        
    }
    render(){
        return(
            <div className="position pointer">
                <p onClick={this.show}>Image Type</p>
                <select value={this.props.imageType} onChange={this.onDone} className={this.state.show}>
                    <option value="all">All</option>
                    <option value="photo">Photo</option>
                    <option value="illustration">Illustration</option>
                    <option value="vector">Vector</option>
                </select>
            </div>
        )
    }
}
