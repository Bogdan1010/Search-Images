import React from 'react';

export default class Order extends React.Component{
    state={
        show: "hide"
    }
    onDone = (event) =>{
        if (typeof this.props.done === "function"){
            this.props.done(event)
        }
        this.setState({
            show: "hide"
        })
    }

    show =(e)=>{
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
                <p onClick={this.show}>Order</p>
                <select value={this.props.order} onChange={this.onDone} className={this.state.show}>
                    <option value="popular">Popular</option>
                    <option value="latest">Newest</option>
                </select>
            </div>
        )
    }
}