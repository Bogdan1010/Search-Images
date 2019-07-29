import React from 'react';

export default class SafeSearch extends React.Component{
    state={
        bool: "true pointer"
    }
    onDone=(event)=>{
        if (typeof this.props.done === "function"){
            this.props.done(event)
        }
        if (this.props.safeSearch == true){
            this.setState({
                bool: "false pointer"
            })
        } else {
            this.setState({
                bool: "true pointer"
            })
        }
    }
    render(){
        return(
            <div>
                <p onClick={this.onDone} className={this.state.bool}>Safe Search</p>
            </div>
        )
    }
}