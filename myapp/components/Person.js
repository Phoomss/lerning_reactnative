import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { styles } from '../styles/myStyle';
import { MaterialIcons } from '@expo/vector-icons';

export default function Person({ item, handleDelete }) {
    return (
        <TouchableOpacity onPress={() => handleDelete(item.id)}>
            <View style={styles.content}>
                <Text>ประชากร</Text>
                <Text>{item.id} {item.name}</Text>
                <MaterialIcons name="delete" size={24} color="black" />
            </View>
        </TouchableOpacity>
    );
}
