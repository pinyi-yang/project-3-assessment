import React from 'react';
import './App.css';
import axios from 'axios';
import Posts from './Posts'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userId: 1,
      posts:[]
    }
    this.handleLeftArrowClick = this.handleLeftArrowClick.bind(this);
    this.handleRightArrowClick = this.handleRightArrowClick.bind(this);
  }

  handleLeftArrowClick() {
    let id = this.state.userId;
    id === 1 ? id = 10: id--;
    axios.get(`https://jsonplaceholder.typicode.com/posts?userId=${id}`).then(response => {
      this.setState({
        posts: response.data,
        userId: id
      })
    })
  }

  handleRightArrowClick() {
    let id = this.state.userId;
    id === 10 ? id = 1: id++;
    axios.get(`https://jsonplaceholder.typicode.com/posts?userId=${id}`).then(response => {
      this.setState({
        posts: response.data,
        userId: id
      })
    })
  }

  componentDidMount() {
    axios.get('https://jsonplaceholder.typicode.com/posts?userId=1').then(response => {
      this.setState({
        posts: response.data
      })
    })
  }

  render() {
    return (
      <div className="main">
        <header className="header">
          <h1>Cycle Through Users:</h1>
        </header>
        <div className='buttons'>
          <button onClick={this.handleLeftArrowClick}>&larr;</button>
          <button onClick={this.handleRightArrowClick}>&rarr;</button>
        </div>
        <div className='posts'>
          <Posts posts={this.state.posts}/>
        </div>
      </div>
    );
  }
}

export default App;
