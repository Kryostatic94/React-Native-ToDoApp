import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';


const Task = (props) => {

  return (
    <View style={styles.item}>
      <View style={styles.itemLeft}>
        <Text style={styles.done}></Text>
        <Text style={styles.itemText}>{props.text}</Text>
      </View>
      <Text style={styles.done}> X </Text>
    </View>
  )
}

const styles = StyleSheet.create({
  item: {
    backgroundColor: '#FFF',
    padding: 15,
    borderRadius: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  itemLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    flexWrap: 'wrap'
  },
  done: {
    fontWeight: "bold",
  },
});

export default Task;