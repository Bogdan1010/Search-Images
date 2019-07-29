import React from 'react';

export default class EditorsChoice extends React.Component{
    state={
        bool: "false pointer"
    }
    onDone =(event)=>{
        if(typeof this.props.done === "function"){
            this.props.done(event)
        }
        if(this.props.editorsChoise == true){
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
                <p onClick={this.onDone} className={this.state.bool}>Editor's Choice</p>
            </div>
        )
    }
}