import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity, Modal} from 'react-native';
import { theme } from "../reusable/theme";
import ToDoModal from "./ToDoModal"

export default class ToDoList extends React.Component {
  state={
    showListVisible:false
  }
  
  toogleListModal(){
      this.setState({showListVisible:!this.state.showListVisible})
  }

  

  render(){

    const list=this.props.list;

    const completedCount = list.todos.filter(todo=>todo.completed).length;
    const remainingCount = list.todos.length - completedCount;
    
    return (
      <View>
        <Modal 
        animationType="fade" 
        visible={this.state.showListVisible} 
        onRequestClose={() => this.toogleListModal()}>
          <ToDoModal list={list} 
          closeModal={() => this.toogleListModal()} 
          updateList={this.props.updateList} 
          />
        </Modal>
        <TouchableOpacity 
        style={ [styles.listContainer, {backgroundColor:list.color} ]} 
        onPress={() => this.toogleListModal()}
        >
        <Text style={styles.listTitle} numberOfLines={1}>
          {list.name}
        </Text>

        <View>
          <View style={{alignItems:"center"}}>
            <Text style={styles.remaining}>{remainingCount}</Text>
            <Text style={styles.count}>Remaining</Text>
          </View>
          <View style={{ alignItems:"center"}}>
            <Text style={styles.completed}>{completedCount}</Text>
            <Text style={styles.count}>Completed</Text>
          </View>
        </View>
      </TouchableOpacity>
      </View>
      
  );
  }
};

const styles = StyleSheet.create({
  listContainer:{
    paddingVertical:32,
    paddingHorizontal:16,
    borderRadius:6,
    marginHorizontal:10,
    alignItems:"center",
    width:200,
  },
  listTitle:{
    fontSize:22,
    fontWeight:"700",
    color:theme.colors.white,
    marginBottom:18,
  },
  count:{
    fontSize:15,
    fontWeight:"600",
    color:"#FFFFFF"
  },
  completed:{
    fontSize:38,
    fontWeight:"500",
    color:"#40ff00",
  },
  remaining:{
    fontSize:38,
    fontWeight:"500",
    color:"#ff7075",
  }
});