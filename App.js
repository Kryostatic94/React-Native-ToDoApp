import * as React from 'react';
import { TextInput, Text, View, StyleSheet,Keyboard, ScrollView,TouchableOpacity } from 'react-native';
import Task from './src/components/Task';




export default function App() {
  const [task, setTask] = React.useState();
  const [taskItems, setTaskItems] = React.useState([]);


  

  const handleAddTask = () => {
    Keyboard.dismiss();
    setTaskItems([...taskItems, task])
    setTask(null);
  }

  const completeTask = (index) => {
    let itemsCopy = [...taskItems];
    itemsCopy.splice(index, 1);
    setTaskItems(itemsCopy)
  }


  return (
    <View style={styles.background}>
      <ScrollView
        contentContainerStyle={{
          flexGrow: 1
        }}
        keyboardShouldPersistTaps='handled'
      >
      <View style={styles.tasksWrapper}>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>What needs to be done?</Text>
      </View>
        <View style={styles.items}>
          {
            taskItems.map((item, index) => {
              return (
                    <TouchableOpacity key={index}  onPress={() => completeTask(index)}>
                      <Task text={item} /> 
                    </TouchableOpacity>
              )
            })
          }
        </View>
      </View>
      </ScrollView>
      <View style={styles.inputContainer}>
          <TextInput style={styles.input} placeholder={'Write a task'} value={task} onChangeText={text => setTask(text)} />
          <TouchableOpacity style={styles.radius} onPress={() => handleAddTask()}>
          <View style={styles.addWrapper}>
            <Text style={styles.addText}>+</Text>
          </View>
          </TouchableOpacity>
      </View>
    </View>
  );
} 

const styles = StyleSheet.create({
  background:{
    flex: 2,
    backgroundColor:'#007fff',
  },
  titleContainer:{
    flex: 0.5,
    justifyContent: 'space-around',
    alignItems: 'center'
    
  },
  title:{
    color: "white",
    fontWeight: "bold",
    fontSize: 24,
    marginBottom: 20,
  },
  inputContainer:{
    flexDirection:"row",
    paddingBottom:20,
    marginTop:10,
  }
  ,tasksWrapper: {
    paddingTop: 80,
    paddingHorizontal: 20,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: 'bold'
  },
  items: {

  },
  writeTaskWrapper: {
    position: 'absolute',
    bottom: 10,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center'
  },
  input: {
    paddingVertical: 15,
    paddingHorizontal: 15,
    marginEnd: 20,
    marginStart: 20,
    backgroundColor: '#FFF',
    borderRadius: 60,
    borderColor: '#C0C0C0',
    borderWidth: 1,
    width: 250,
  },
  addWrapper: {
    width: 60,
    height: 60,
    backgroundColor:'#007fff',
    borderRadius: 60,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: '#FFF',
    borderWidth: 2,
  },
  addText:{
    color:'#fff',
  }
});