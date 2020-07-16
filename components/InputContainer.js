import React, { useState } from 'react'
import { View, TextInput, Button, StyleSheet } from 'react-native'

const InputContainer = props => {
    const [input, setInput] = useState('')
    
    // método que pega o que foi digitado e guarda na var input
    const inputTarefa = input => {
        setInput(input)
    }

    return (
        <View style={styles.inputContainer}>
            <TextInput style={styles.input}
                placeholder={"Tarefas"}
                onChangeText={inputTarefa}
                value={input}
            />
            <Button
                color={"green"}
                title={"ADD"}
                onPress={() => props.addTarefa(input)}
            />
            <Button
                color={"red"}
                title={"Clean"}
                onPress={props.cleanTarefas}
            />
        </View>)
}

const styles = StyleSheet.create({
    inputContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: "center",
        alignSelf: "center",
    },
    input: {
        borderWidth: 1,
        padding: 10,
        width: '80%',
        marginHorizontal: 10
    },
})

export default InputContainer