//import logo from './logo.svg';
//import List from './List.js';



/*
class Timer extends Component {
  constructor(props){
    super(props)
    this.state = {
      time : props.start
    }
  }

componentDidMount(){
  this.addInterval =  setInterval( () => this.increase(), 1000)
}

componentWillUnmount(){
  clearInterval(this.addInterval)
}

increase(){
  this.setState((state, props) => ({
    time : parseInt(state.time) + 1
  }))
}

    render(){
        return(
          <div> {this.state.time} detik </div>
        )
    }
}*/

/*
class Toggle extends Component {
  constructor(props){
    super(props)
    this.state = {
      toggleStatus:true
    }
    this.pengaturclick = this.pengaturclick.bind(this)
  }

  pengaturclick(){
    this.setState(state => ({
      toggleStatus : !state.toggleStatus
    }))
  }

  render(){
    return(
      <button onClick={this.pengaturclick}>
        {this.state.toggleStatus ? 'on' : 'off'}
      </button>
    )
  }
}
/*
class Todolist extends Component {
  constructor(props){
    super(props)
    this.state={
      todoitem:'',
      items:[]
    }
  }

  submit = (event) =>{
    event.preventDefault()
    this.setState({
      items: [...this.state.items, this.state.todoitem],
      todoitem: ''
    })
  }

  change = (event) => {
    event.preventDefault()
    this.setState({
      todoitem: event.target.value
    })
  }

  render(){
    return(
      <div>
        <form onSubmit={this.submit}>
          <input type='text' value={this.state.todoitem} onChange={this.change} />
          <button>Add </button>
        </form>
        <List items={this.state.items}/>
      </div>
    )
  }
}
*/
import './App.css';
import React, { Component } from 'react';
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";


function Home(){
  return <React.Fragment>
    <h1>Home </h1>
    <p>hello this is home page </p>
   </React.Fragment>
}

function Users(){
  return <h1>Users </h1>
}

function NoMatch(){
  return <h1>Error 404 not found </h1>
}

class App extends Component{
  render(){
    return (
      <BrowserRouter>
        <div>
          <nav>
            <p> <Link to="/"> Home </Link> </p>
            <p> <Link to="/users"> Users </Link> </p>
          </nav>

          <Switch>
            <Route path='/' exact component={Home} />
            <Route path='/users' exact component={Users} />
            <Route component={NoMatch}/>
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
