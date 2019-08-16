import React, { Component } from "react";
import { Text, View, StyleSheet, Button, TouchableOpacity } from "react-native";

export class App extends Component {
  showNumbers = () => {
    let rows = [];
    for (let i = 0; i < 4; i++) {
      let row = [];
      for (let j = 0; j < 3; j++) {
        row.push(<TouchableOpacity><Text>{i + j}</Text></TouchableOpacity>);
      }
      rows.push(<View style={styles.row}> {i + j} </View>);
    }
  }
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
            {this.showNumbers}
        <View style={styles.row}>
          <Button title="." />
          <Button title="0" />
          <Button title="=" />
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
    );
  }
}

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  calculation: {
    flex: 2,
    backgroundColor: "green",
    alignItems: "flex-end",
    justifyContent: "center",
  },
  result: {
    flex: 1,
    backgroundColor: "red",
    justifyContent: "center",
    alignItems: "flex-end",
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
    fontSize: 48,
  },
});
