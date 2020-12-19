import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity, Modal, SafeAreaView, FlatList, KeyboardAvoidingView, TextInput, Keyboard} from 'react-native';
import { theme } from "../reusable/theme";
import {AntDesign, Ionicons} from "@expo/vector-icons";

export default class ToDoModal extends React.Component {
  
  state={
    newTodo:""
  };

  toogleToDoCompleted = index => {
    let list = this.props.list;
    list.todos[index].completed=!list.todos[index].completed;

    this.props.updateList(list);
  }

  addTodo =()=>{
      let list=this.props.list;
      list.todos.push({title:this.state.newTodo, completed:false});

      this.props.updateList(list);
      this.setState({newTodo:""})
      Keyboard.dismiss();
  }

  renderToDo =(todo, index)=>{
    return(
      <View style={styles.todoContainer}>
      <TouchableOpacity onPress={() => this.toogleToDoCompleted(index)}>
        <Ionicons 
        name={todo.completed ? "ios-square" : "ios-square-outline"} 
        size={28} color={theme.colors.gray} 
        style={{width:32}} />
      </TouchableOpacity>
        <Text style={[styles.todo, 
        {textDecorationLine : todo.completed ? "line-through" : "none", 
        color: todo.completed ? theme.colors.gray: theme.colors.black}]}
        >{todo.title}</Text>
      </View>
    )
  }

  render(){
    const list=this.props.list
    const taskCount=list.todos.length
    const completeCount=list.todos.filter(todo=>todo.completed).length
    return (
    <KeyboardAvoidingView style={{flex:1}} >
      <SafeAreaView style={styles.container}>
        <TouchableOpacity style={{position:"absolute", top:35, right:25, zIndex:10}} 
        onPress={this.props.closeModal}>
          <AntDesign name="close" size={24} color={theme.colors.black} />
        </TouchableOpacity>

        <View style={[styles.section, styles.header, {borderBottomColor:list.color}]}>
          <View>
            <Text style={styles.title}>{list.name}</Text>
            <Text style={styles.taskCount}>
            {completeCount} of {taskCount} tasks
            </Text>
          </View>
        </View>

        <View style={[styles.section, {flex:2}]}>
          <FlatList 
          data={list.todos}
          renderItem={({item, index}) => this.renderToDo(item, index)}
          keyExtractor={item => item.title}
          contentContainerStyle={{paddingHorizontal:32, paddingVertical:64}}
          showsVerticalScrollIndicator={false}
           />
        </View>

        <View style={[styles.section, styles.footer]} >
        
          <TextInput 
          style={[styles.input, {borderColor:list.color}]} 
          onChangeText={text => this.setState({newTodo:text})} value={this.state.newTodo} />
          <TouchableOpacity style={[styles.addTodo, {backgroundColor:list.color}]} onPress={() => this.addTodo()}>
            <AntDesign name="plus" size={20} color={theme.colors.white} />
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    </KeyboardAvoidingView>
  );
  }
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    justifyContent:"center",
    alignItems:"center",
  },
  section:{
    flex:1,
    alignSelf:"stretch"
  },
  header:{
    justifyContent:"flex-end",
    marginLeft:64,
    borderBottomWidth:3,
  },
  title:{
    fontSize:38,
    fontWeight:"700",
    color:theme.colors.black
  },
  taskCount:{
    marginTop:5,
    marginBottom:16,
    color:theme.colors.gray,
    fontWeight:"600"
  },
  footer:{
    paddingHorizontal:32,
    flexDirection:"row",
    alignItems:"center",
    borderTopColor:theme.colors.gray,
    // borderTopWidth:0.5,
  },
  input:{
    flex:1,
    height:48,
    borderWidth:StyleSheet.hairlineWidth,
    borderRadius:15,
    paddingHorizontal:8,
    backgroundColor:theme.colors.white,
  },
  addTodo:{
    borderRadius:25,
    alignItems:"center",
    justifyContent:"center",
    padding:15,
    marginLeft:10,
  },
  todoContainer:{
    paddingVertical:16,
    flexDirection:"row",
    alignItems:"center",
  },
  todo:{
    color:theme.colors.black,
    fontWeight:"700",
    fontSize:18,
  }
});