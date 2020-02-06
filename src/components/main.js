import React, { Component } from 'react'
import List from './List'


const inline = {
    float: 'left'
}


 class main extends Component {
    
   

    constructor(props) {
        super(props)
    
        this.state = {
             term: '',
             item: []
        }
        this.delete = this.delete.bind(this)
    }


    handleTaskChange = (event) => {
        this.setState({
            term: event.target.value
        })
    }

    submitHandler = (event) => {
        this.setState({
            term: '',
            item: [...this.state.item, this.state.term]
        })
        event.preventDefault()
    }


    delete(toDelete) {
        for(let i=0; i<this.state.item.length; i++)
        {
            if(toDelete === this.state.item[i]){
                delete this.state.item[i]
                this.setState({
                    item: this.state.item
                })
                
            }
        }
    }
    
    
    
    render() {
        const itemList = this.state.item.map((item,index) => (<List key={index} item={item} deleteHandler={this.delete}></List>))
        return (
            <div style={inline}>
                <form onSubmit={this.submitHandler}>
                    <label>Task :</label>
                    <input type="text" value={this.state.term} onChange={this.handleTaskChange}></input>
                    <button type="submit">Add</button>
                </form>
                <ul style={inline}>
                {itemList}
                </ul>
            </div>
        )
    }
}

export default main
