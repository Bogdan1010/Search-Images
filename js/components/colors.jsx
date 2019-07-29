import React from 'react';

export default class Colors extends React.Component{
    state={
        colors:["all", "transparent", "grayscale", "red", "orange", "yellow", "green", "turquoise", "blue", "lilac", "pink", 
                "white", "gray", "black", "brown"],
        show: "hide"
    }

    onDone = (event) =>{
        if (typeof this.props.done === "function"){
            this.props.done(event);
        }
        this.setState({
            show: "hide"
        })
    }

    show = (e)=>{
        if(this.state.show == "hide"){
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
                <p onClick={this.show}>Colors</p>
                <select value={this.props.colors} onChange={this.onDone} className={this.state.show}>
                    {this.state.colors.map(el => {
                    return <option value={el}>{el}</option>
                    })}
                </select>
            </div>
        )
    }
}