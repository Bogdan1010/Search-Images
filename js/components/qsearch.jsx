import React from 'react';

export default class QSearch extends React.Component{
    onDone = (event) =>{
        if(typeof this.props.done === "function"){
            this.props.done(event)
        }
    }

    onDoneAPI = (event) =>{
        if(typeof this.props.api === "function"){
            this.props.api(event)
        }
    }
    render(){
        return(
            <div className="qsearch">
                <p onClick={this.onDoneAPI}>SEARCH</p>
                <input type="text" placeholder="What are you looking for?"
                value={this.props.qsearch} onChange={this.onDone} className="inputs searchBar"/>
            </div>
        )
    }
}