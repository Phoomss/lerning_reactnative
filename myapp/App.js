import { Alert, Button, FlatList, Image, ScrollView, Text, View } from "react-native";
import { styles } from "./styles/myStyle";
import { useState } from "react";
import Person from "./components/Person";
import AddForm from "./components/AddForm";
const logo = require('./assets/adaptive-icon.png')

export default function App() {
  const [data, setData] = useState([
    { id: 1, name: "Phomm" },
    { id: 2, name: "Phomm" },
    { id: 3, name: "Phomm" }

  ])

  const handleDelete = (id) => {
    setData((prevData) => {
      return prevData.filter((item) => item.id != id)
    })
  }

  const insertData = (name, age) => {
    if (name) {
      setData((prevData) => {
        return [
          
            { id: Math.random().toString(), name, age },
          ...prevData
          
        ]
})
    }else {
  Alert.alert("not nam")
}
  }
return (
  <View style={styles.continer}>
    <FlatList data={data}
      renderItem={({ item }) => (
        <Person item={item} handleDelete={handleDelete} />
      )}
      keyExtractor={(item) => item.id}
      ListHeaderComponent={<Text>x</Text>}
      ListEmptyComponent={<Text>not found data</Text>}
    />
    <AddForm insertData={insertData} />
  </View>
);
}

