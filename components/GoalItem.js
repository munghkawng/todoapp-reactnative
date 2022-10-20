import { StyleSheet, Text, View, Pressable } from "react-native";

function GoalItem(props) {
  return (
    <View style={styles.listContainer}>
      <Pressable
        android_ripple={{ color: "#" }}
        onPress={props.onDeleteItem.bind(this, props.id)}
        style={({ pressed }) => pressed && styles.pressedItem}
      >
        <Text style={styles.listItem}>{props.name}</Text>
      </Pressable>
    </View>
  );
}

export default GoalItem;

const styles = StyleSheet.create({
  listContainer: {
    flex: 1,
    margin: 10,
    backgroundColor: "#5e0acc",
    borderRadius: 5,
  },
  pressedItem: {
    opacity: 0.5,
  },
  listItem: {
    marginRight: 10,
    padding: 8,
    color: "white",
  },
});
