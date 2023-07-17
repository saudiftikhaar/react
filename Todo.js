import React, { Component } from 'react'

export default class Todo extends Component {
    constructor() {
        super();
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.state = {
            item: "",
            list: []
        }
    }
    handleChange(e) {
          this.setState({
            item: e.target.value
          })
    }
    // TODO
    /**
     * DELETION
     *  SEARCH
     * KEYBOARD INTEGRATION
     */
    handleSubmit(e) {
        e.preventDefault();
        if(this.state.item === "") {
            alert("empty item is not allowed. (da sa ka?)")
        }
        else if(this.state.list.indexOf(this.state.item) < 0){
            this.setState({
                list: this.state.list.concat(this.state.item)
            })
           }
           else{
            alert('item is already exist.')
           }
    }
    render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
            <input 
            type="text"
            id='item'
            name='item'
            value={this.state.item}
            onChange={this.handleChange}
            />
            <button>Add</button>
        </form>
        <ul>
            {
                this.state.list.map((l, k) => {
                    return <li key={k}>{l}</li>
                })
            }
        </ul>
            <button onClick={() => this.setState({list: []})}>Reset</button>
      </div>
    )
  }
}
