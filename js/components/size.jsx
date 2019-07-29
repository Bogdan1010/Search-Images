import React from 'react';

export default class Size extends React.Component{
    state={
        show: "hide"
    }
    onDoneWidth = (event) =>{
        if(typeof this.props.withhFunc === "function"){
            this.props.withhFunc(event)
        }
    }

    onDoneHeight = (event) =>{
        if (typeof this.props.heightFunc === "function"){
            this.props.heightFunc(event)
        }
    }

    show =(e)=>{
        if(this.state.show == "hide"){
            this.setState({
                show: "show"
            })
        } else{
            this.setState({
                show: "hide"
            })
        }
    }

    update = (e) =>{
        this.setState({
            show: "hide"
        })
    }
    render(){
        return(
            <div className="position pointer">
                <p onClick={this.show}>Size (larger then)</p>
                <div className={this.state.show}>
                    <div className="divSize">
                        <div>
                            <input type="text" value={this.props.widthProp}
                            onChange={this.onDoneWidth} className="size"/>
                            <span>px</span>
                        </div>
                        <span className="x"> x </span>
                        <div>
                            <input type="text" placeholder="height" value={this.props.heightProp} 
                            onChange={this.onDoneHeight} className="size"/>
                            <span>px</span>
                        </div>
                        <p onClick={this.update} className="x">OK</p>
                    </div>
                    
                </div>
            </div>
        )
    }
}