import React from 'react';

export default class Category extends React.Component{
    state={
        category:["all", "animals", "backgrounds", "buildings", "business", "computer", "education",
        "fashion", "feelings", "food", "health", "industry", "music", "nature", "people",
        "places", "religion", "sports", "transportation", "travel"],
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

    show =(e)=>{
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
                <p onClick={this.show}>Category</p>
                <select value={this.props.category} onChange={this.onDone} className={this.state.show}>
                    {this.state.category.map(el =>{
                        return <option value={el}>{el}</option>
                    })}
                </select>
            </div>
        )
    }
}