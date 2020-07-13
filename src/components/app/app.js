import React,{Component} from 'react';
import './app.css';
import AppHeader from "../app-header"
import Getting from "../../services/getRep"
import Forms from "../forms"


export default class App extends Component {
/*
  constructor (props) {
    super(props);
    this.state = {};
  }
  */

  countRes(){
    let ar = new Getting();
    ar.getRepos().then ( res => { 
      return res.length;
    })
  }

  render() {
    const count = this.countRes();
    return(
     <>
     <AppHeader count = {count}/>
     <Forms/>
     </>
    )
  }
}


