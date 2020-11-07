import React from "react";
import { Alert, StyleSheet, View, Text } from "react-native";

const DisplayLove = (props) => {
  if (props.data == "loading") {
    return <Text style={styles.Text}>Enter Your and your Patner Details</Text>;
  } else if (props.data.message) {
    return <Text>Something went Wrong Calculate Again</Text>;
  } else {
    return (
      <View style={styles.container}>
        <Text style={{ ...styles.Text, marginTop: 20 }}>
          Perentage:- {props.data.percentage}%
        </Text>
        <Text style={styles.Text}>Result:- {props.data.result}</Text>
      </View>
    );
  }
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "pink",
    marginTop: 20,
  },
  Text: {
    fontSize: 35,
    marginLeft: 20,
    flexWrap:"wrap"
  },
});

export default DisplayLove;
