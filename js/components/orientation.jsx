import React from 'react';

export default class Orientation extends React.Component{
    state={
        show: "hide"
    }
    onDone = (event) =>{
        if(typeof this.props.done === "function"){
            this.props.done(event);
        }
        this.setState({
            show: "hide"
        })
    }

    show = (e) =>{
        if (this.state.show == "hide"){
            this.setState({
                show: "show"
            })
        } else {
            this.setState({
                show: "hide"
            })
        }
    }
    render(){
        return(
            <div className="position pointer">
                <p onClick={this.show}>Orientation</p>
                <select value={this.props.orientation} onChange={this.onDone} className={this.state.show}>
                    <option value="all">All</option>
                    <option value="horizontal">Horizontal</option>
                    <option value="vertical">Vertical</option>
                </select>
            </div>
        )
    }
}