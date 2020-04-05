import React,{Component} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import AppLayout from './src/appLayout'

class componentes extends Component{

  constructor(props){
    super(props)
    this.state={
      user:"hallan",
      password:'1234'
    }
  }
  render(){
    return (
      <AppLayout
        saudacao="olá mundoo"
        user={this.state.user}
        password={this.state.password}
      />
    );
  }
  
}
export default componentes
