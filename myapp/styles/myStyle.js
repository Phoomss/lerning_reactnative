import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  continer: {
    backgroundColor: "gray",
    flex: 1,
    // flexDirection:"row",
    // justifyContent: "center",
    alignItems: "center",
    marginTop: 50,
    marginBottom: 50
  },
  img: {
    width: 300,
    height: 300
  },
  content: {
    backgroundColor: "red",
    padding: 25,
    marginTop: 10,
    borderRadius: 25,
    borderWidth: 2,
    borderColor: "yellow"
  },
  input: {
    borderBottomColor: "#ddd",
    borderBottomWidth: 1,
    paddingHorizontal: 8,
    paddingVertical: 6,
    marginBottom: 15
  }
})