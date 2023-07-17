import React, { Component } from 'react'
import axios from 'axios';
export default class Life extends Component {
  constructor(props) {
    super(props)
    this.change = this.change.bind(this);
    this.state = {
        num: 0,
        users: []
    }
  }
  async componentDidMount() {
        const {data} = await axios.get("https://api.github.com/users");
         this.setState({
          users: data

         })
  }
  componentDidUpdate() {
            console.log('component did unpdate')
  }
  componentWillUnmount() {
    console.log('component will unmount')
  }
    change() {
        this.setState({
            num: Math.floor(Math.random() * 100)
        })
    }
  render() {
    
        return (
      <div>
        <ul>
          {
            this.state.users.map((user => {
              return <li key={user.id}>{user.login}</li>
            }))
          }
        </ul>
      </div>
    )
  }
}
