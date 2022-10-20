import {
  StyleSheet,
  FlatList,
  SafeAreaView,
  Platform,
  Button,
  View,
} from "react-native";
import { StatusBar } from "expo-status-bar";
import GoalInput from "./components/GoalInput";
import GoalItem from "./components/GoalItem";
import { useState } from "react";
// main components
export default function App() {
  // hook declaration
  const [modalIsVisiable, setMobalIsVisible] = useState(false);
  const [goalList, setGoalList] = useState([]);

  // start goal handler function
  function startAddGoalHandler() {
    setMobalIsVisible(true);
  }

  // end goal handler
  function endAddGoalHandler() {
    setMobalIsVisible(false);
  }
  // add goal function
  function addGoal(goal) {
    setGoalList((currentGoalList) => {
      return [
        ...currentGoalList,
        {
          id: Math.random().toString(),
          name: goal,
        },
      ];
    });
    setMobalIsVisible(false);
  }
  // Delete item function
  function deleteGoalHandler(id) {
    setGoalList((currentGoalList) => {
      return currentGoalList.filter((goal) => goal.id !== id);
    });
  }

  //  components section
  return (
    <>
      <SafeAreaView style={styles.appContainer}>
        {/* Start Button */}
        <View style={styles.startButtonContainer}>
          <Button
            title="Add New Goal"
            color="#5e0acc"
            onPress={startAddGoalHandler}
          />
        </View>
        {modalIsVisiable && (
          <GoalInput addGoal={addGoal} cancel={endAddGoalHandler} />
        )}

        {/* render List */}

        <FlatList
          data={goalList}
          renderItem={({ item }) => {
            return (
              <GoalItem
                visible={modalIsVisiable}
                name={item.name}
                onDeleteItem={deleteGoalHandler}
                id={item.id}
              />
            );
          }}
          keyExtractor={(item) => item.id}
        />
      </SafeAreaView>
    </>
  );
}

const styles = StyleSheet.create({
  // style to avoid screen notch
  appContainer: {
    flex: 1,
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
    marginTop: 30,
  },
  // startButtonContainer: {
  //   // flex: 1,
  //   justifyContent: "center",
  //   alignContent: "center",
  // },
});
