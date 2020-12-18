import React from 'react'
import { StyleSheet,ScrollView,TouchableOpacity,TextInput, Text, View } from 'react-native'
import Constants from 'expo-constants';
import Note from './NoteTodoList';
export default class MainTodo extends React.Component {
    constructor(props){
        super(props);
        this.state={
            noteArray: [],
            noteText:'',
        }
    }
    render(){
        let notes = this.state.noteArray.map((val,key) =>{
            return <Note key = {key} keyval = {key} val={val}
            deleteMethod = {()=>this.deleteNote(key)}/>
        });
        return(

        <View style ={styles.container}>

            <View style = {styles.header}>
                <Text style = {styles.headerText}> Hobbies Activity</Text>
            </View>    

            <ScrollView style = {styles.scrollContainer}>

            </ScrollView>
            <View style = {styles.footer}>
                <TextInput
                    style = {styles.TextInput}
                    placeholder = "Tulis Hobi kamu disini"
                    placeholderTextColor="white"
                    underlineColorAndroid="transparent"
                    onChangeText = {(noteText)=>this.setState({noteText})}
                    
                    >
                    
                </TextInput>
            </View>
            <TouchableOpacity >
                <Text style = {styles.addButtonText}>+</Text>
            </TouchableOpacity>
        </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop:Constants.statusBarHeight,
      },
      header: {
        backgroundColor: '#E91E63',
        alignItems: 'center',
        justifyContent: 'center',
        borderBottomWidth: 10,
        borderBottomColor: '#ddd',
      },
      headerText: {
        color: 'white',
        fontSize: 18,
        padding: 26,
      },
      scrollContainer: {
        flex: 1,
        marginBottom: 100,
      },
      footer: {
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        zIndex: 10,
      },
      textInput: {
        alignSelf: 'stretch',
        color: '#fff',
        padding: 20,
        backgroundColor: '#252525',
        borderTopWidth: 2,
        borderTopColor: '#ededed',
        
      },
      addButton: {
        position: 'absolute',
        zIndex: 11,
        right: 20,
        bottom: 90,
        backgroundColor: '#E91E63',
        width: 90,
        height: 90,
        borderRadius: 50,
        alignItems: 'center',
        justifyContent: 'center',
        elevation: 8,
      },
      addButtonText: {
        color: '#fff',
        fontSize: 50,
      },
});
