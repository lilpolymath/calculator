import React, { Component } from 'react'
import { Text, View, StyleSheet, Button, TouchableOpacity} from 'react-native'

export class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.calculation}>
          <Text style={styles.calculationText}>11 + 11</Text>
        </View>
        <View style={styles.result}>
          <Text style={styles.resultText}>121</Text>
        </View>
        <View style={styles.buttons}>
        <View style={styles.numbers}>
        <View style={styles.row}>
          <TouchableOpacity>
            <Text>0</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text>0</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text>0</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.row}>
          <Button title="0" />
          <Button title="0" />
          <Button title="0" />
        </View>
        <View style={styles.row}>
          <Button title="0" />
          <Button title="0" />
          <Button title="0" />
        </View>
        </View>
        <View style={styles.operations}>
          <Button title="+" />
          <Button title="-" />
          <Button title="*" />
          <Button title="/" />
        </View>
        </View>
      </View>
    )
  }
}

export default App

const styles =  StyleSheet.create({
  container: {
    flex: 1,
  },
  calculation: {
    flex: 2,
    backgroundColor: "green",
    alignItems: "flex-end",
    justifyContent: "center"
  },
  result: {
    flex: 1,
    backgroundColor: "red",
    justifyContent: "center",
    alignItems: "flex-end"
  },
  buttons: {
    flex: 7,
    flexDirection: "row",
    backgroundColor: "blue",
  },
  numbers: {
    flex: 3,
    backgroundColor: "yellow",
  },
  operations: {
    flex: 1,
    backgroundColor: "black",
    alignItems: "stretch",
    justifyContent: "space-around",
  },
  row: {
    flexDirection: "row",
    flex: 1,
    alignItems: "center",
    justifyContent: "space-around",
  },
  resultText: {
    fontSize: 24,
  },
  calculationText: {
    fontSize: 48
  }
})
