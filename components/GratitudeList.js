import React from 'react';
import { Text, View, StyleSheet, TouchableOpacity, FlatList, Modal } from 'react-native';
import {AntDesign} from "@expo/vector-icons";
import Constants from 'expo-constants';
import {theme} from "../reusable/theme"; 
import TempData from "../reusable/tempData";
import ToDoList from "./ToDoList";
import AddListModal from "./AddListModal";


export default class GratitudeList extends React.Component {
    state={
        //jadiin tru untuk debug si modal
        addToDoVisible:false,
        lists:TempData,
        user:{}
      };
    
      renderList=list=>{
        return <ToDoList list={list} updateList={this.updateList} />
      }
    
      // componentDidMount(){
      //   firebase = new Fire((error, user) =>{
      //     if(error){
      //       return alert ("uh oh! Something went wrong")
      //     }
    
      //     this.setState({user})
      //   });
      // }
    
      toogleAddToDoModal() {
        this.setState({addToDoVisible:!this.state.addToDoVisible})
      }
    
      updateList=list=>{
        this.setState({
          lists:this.state.lists.map(item => {
            return item.id===list.id ? list : item;
          })
        })
      }
    
      addList = list =>{
        this.setState({lists:[...this.state.lists, { ...list, id:this.state.lists.length + 1, todos: [] }] })
      };
    
      render(){
        return (
          <View style={styles.container}>
            <Modal 
            animationType="slide" 
            visible={this.state.addToDoVisible}
            onRequestClose={() =>this.toogleAddToDoModal()}
            >
              <AddListModal closeModal={() => this.toogleAddToDoModal()} addList={this.addList} />
            </Modal >
            <View>
              <Text>User : {this.state.user.uid}</Text>
            </View>
            <View style={{flexDirection:"row"}}>
              <View style={styles.divider} />
                <Text style={styles.title}>
                Gratitude <Text style={{fontWeight:"700", color:Colors.blue}}>List</Text>
                </Text>
              <View style={styles.divider} />
            </View>
            <View style={{marginVertical:48}}>
              <TouchableOpacity style={styles.addList} onPress={() => this.toogleAddToDoModal()}>
                <AntDesign name="plus" size={20} color={Colors.black} />
              </TouchableOpacity>
              <Text style={styles.add}>Add List</Text>
            </View>
            
            <View style={{height:275, marginLeft:10}}>
              <FlatList 
              data={this.state.lists}
              keyExtractor={item => item.name}
              horizontal={true}
              showsHorizontalScrollIndicator={false}
              renderItem={({ item }) => this.renderList(item)
              }
              keyboardShouldPersistTaps="always"
               />
            </View>
          </View>
        );
      }
    }
    
    const styles = StyleSheet.create({
      container: {
        flex: 1,
        justifyContent: "center",
        paddingTop: Constants.statusBarHeight,
        backgroundColor: 'white',
        alignItems:"center",
      },
      divider:{
        backgroundColor:"#d9d9d9",
        height:1,
        flex:1,
        alignSelf:"center",
      },
      title:{
        fontSize:38,
        fontWeight:"700",
        color:Colors.black,
        paddingHorizontal:64,
      },
      addList:{
        borderWidth:2,
        borderColor:"#d9d9d9",
        borderRadius:50,
        padding:12,
        alignItems:"center",
        justifyContent:"center"
      },
      add:{
        color:Colors.blue,
        fontWeight:"600,"
      },
});
