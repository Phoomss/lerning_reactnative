import React, { useState } from 'react';
import { Button, TextInput, View, Alert } from 'react-native';
import { styles } from '../styles/myStyle';

export default function AddForm({ insertData }) {
    const [name, setName] = useState("");
    const [age, setAge] = useState("15");

    const handleAddData = () => {
        // ตรวจสอบให้แน่ใจว่า name ไม่ว่างและ age เป็นตัวเลขที่ถูกต้อง
        if (!name.trim()) {
            Alert.alert("Error", "Please enter a name.");
            return;
        }

        const numericAge = parseInt(age, 10);
        if (isNaN(numericAge) || numericAge <= 0) {
            Alert.alert("Error", "Please enter a valid age.");
            return;
        }

        insertData(name, numericAge);
        setName(""); // รีเซ็ตฟอร์มหลังจากกดปุ่ม
        setAge("15");
    };

    return (
        <View>
            <TextInput
                placeholder='Enter name'
                keyboardType='default'
                style={styles.input}
                value={name}
                onChangeText={(value) => setName(value)}
            />
            <TextInput
                placeholder='Enter age'
                keyboardType='number-pad'
                style={styles.input}
                value={age}
                onChangeText={(value) => setAge(value)}
            />
            <Button title='Add data' onPress={handleAddData} />
        </View>
    );
}
