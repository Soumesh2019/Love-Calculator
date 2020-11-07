import { StatusBar } from "expo-status-bar";
import React from "react";
import { TextInput, Appbar, Button } from "react-native-paper";
import { Alert, StyleSheet, View } from "react-native";
import DisplayLove from "./compoents/DisplayLove";

class App extends React.Component {
  state = {
    fname: "",
    sname: "",
    result:"loading"
  };

  submit() {
      fetch(
        `https://love-calculator.p.rapidapi.com/getPercentage?fname=${this.state.fname}&sname=${this.state.sname}`,
        {
          method: "GET",
          headers: {
            "x-rapidapi-key":
              "d66ab11d36mshd68affa52123ceep12163ajsn908dd079bb25",
            "x-rapidapi-host": "love-calculator.p.rapidapi.com",
          },
        }
      )
        .then((data) => data.json())
        .then((data2) => {
          console.log(data2);
          this.setState({
           result: data2
          })
        });
    } 


  render() {
    return (
      <View style={styles.container}>
        <Appbar.Header>
          <Appbar.Content
            title="Love % Calculator"
            style={{ alignItems: "center" }}
          />
        </Appbar.Header>

        <TextInput
          label="Person1(Male)"
          style={{ margin: 10, marginTop: 50 }}
          value={this.state.fname}
          onChangeText={(text) => {
            this.setState({
              fname: text
            });
          }}
        />

        <TextInput
          label="Person2(Female)"
          style={{ margin: 10 }}
          value={this.state.sname}
          onChangeText={(text) => {
            this.setState({
              sname: text
            });
          }}
        ></TextInput>

        <Button
          icon="percent"
          mode="contained"
          onPress={() => {
            this.submit();
          }}
          color="red"
          style={styles.Button}
        >
          Calculate
        </Button>

        <DisplayLove data={this.state.result}/>

        <StatusBar style="auto" />
      </View>
    );
  }
}

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    // alignItems: 'center',
    // justifyContent: 'center',
  },
  Button: {
    margin: 100,
    marginTop: 10,
    marginBottom: 0,
  },
});
