import axios from 'axios';

import React, { Component } from 'react'

export default class Forms extends Component {
    constructor() {
        super();
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.state = {
        keyword: "",
        results: []
        }
    }
     async handleSubmit(e) {
        e.preventDefault();
        const key = "_6BxmIaoA4_E59wZFWYzf_2cfbVSZo7S-QMrnuDcLJE";
     const term = this.state.keyword
     const {data} = await axios.get(`https://api.unsplash.com/search/photos?client_id=${key}&query=${term}`)
     
      this.setState({
        results: data.results
      })

    }
    handleChange(e) {
    this.setState({
        keyword: e.target.value
    })  
    }
    render() {
    return (
<div>
    <form onSubmit={this.handleSubmit}>
        <input 
        type="text"
         name="search" 
         id="search"
         onChange={this.handleChange}
         value={this.state.keyword}
         />
        <button id='searchBtn'>Search</button>
    </form>
        <div>
            {
                this.state.results.map(image => {
                    return <img src={image.urls.small} />
                })
            }
        </div>
</div>
    )
  }
}
