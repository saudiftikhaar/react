import React, { Component } from 'react'
import axios from 'axios';
export default class extends Component {
    constructor(){
        super();
         this.state = {
          users: []
        }
    }
    render() {
        const loadData = async () => {
        const {data} = await axios.get("https://api.github.com/users")


             
                this.setState({
                    users: data
                })
            
        }
    return (
      <div>
          <ol> 
      {
        this.state.users.map(
            (m, i) =>  <li key={i}>{m.login} - <img src={m.avatar_url} alt={m.login} /></li>)
      }
      </ol>
      <button onClick={loadData}>Fetch</button>
      </div>
    )
  }
}
