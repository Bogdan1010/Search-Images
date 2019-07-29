import React from 'react';

export default class Images extends React.Component{
    state={
        show: "hide"
    }

    onDone=()=>{
        if (typeof this.props.done === "function"){
            this.props.done(this.props.imgsrc, event)
        }
    }

    mouseEnter=(e)=>{
            this.setState({
                show: "tags"
            })
    }

    mouseLeave=(e)=>{
        this.setState({
            show: "hide"
        })
}
    render(){
        let tags = this.props.imgsrc.tags.split(",")
        return(
            <div className="tagsContainer">
                <img src={this.props.imgsrc.webformatURL} onClick={this.onDone}
                onMouseEnter={this.mouseEnter} onMouseLeave={this.mouseLeave}/>
                <div className={this.state.show}>
                    {tags.map(el=> <span>{el}</span>)}
                </div>
                
            </div>      
        )
    }
}