import {
  StyleSheet,
  TextInput,
  View,
  Button,
  Modal,
  Image,
} from "react-native";
import { useState } from "react";
function GoalInput(props) {
  // useState
  const [goal, setGoal] = useState("");

  //   textInputHandler funciton
  function onChangeText(enterText) {
    setGoal(enterText);
  }
  //  Add goal function
  function addGoalHandler() {
    props.addGoal(goal);
    setGoal("");
  }
  return (
    <Modal visible={props.visible} animationType="slide">
      <View style={styles.inputContainer}>
        {/* image component */}
        <Image
          source={require("../assets/images/goal.jpeg")}
          style={styles.image}
        />
        {/* Input Text */}
        <TextInput
          style={styles.textInput}
          placeholder="Enter Your Goal"
          onChangeText={onChangeText}
          value={goal}
        />
        <View style={styles.buttonContainer}>
          <View style={styles.button}>
            <Button title="Add Goal" onPress={addGoalHandler} color="#425F57" />
          </View>
          <View style={styles.button}>
            <Button title="Cancel" onPress={props.cancel} color="#DD5353" />
          </View>
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,

    justifyContent: "center",
    alignItems: "center",
    marginHorizontal: 10,
  },

  textInput: {
    padding: 10,
    borderWidth: 1,
    borderRadius: 5,
    width: "100%",
  },
  buttonContainer: {
    flexDirection: "row",
    marginTop: 16,
  },
  button: {
    width: 100,
    marginHorizontal: 8,
  },
  image: {
    width: 100,
    height: 100,
    margin: 20,
  },
});

export default GoalInput;
