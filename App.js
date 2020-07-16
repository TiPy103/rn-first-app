import React, { useState } from 'react';
import { FlatList, StyleSheet, View } from 'react-native';
import InputContainer from './components/InputContainer';
import TarefasItens from './components/TarefasItens';

export default function App() {
    const [tarefas, setTarefas] = useState([])
    const [input, setInput] = useState('')

    // método que cria um objeto com uma key e um value, e adiciona na lista de tarefas
    const addTarefa = input => {
        setTarefas (tarefas => [...tarefas, {id: Math.random().toString(), value: input}])
    }

    //método que substitui a lista de tarefas por usa lista vazia
    const cleanTarefas = () =>{
        setTarefas([])
    }

    return (
        <View style={styles.screen}>

            <InputContainer addTarefa={addTarefa} cleanTarefas={cleanTarefas}/>

            <FlatList
                keyExtractor={(item) => item.id}
                data={tarefas}
                renderItem={itemData => (
                    <TarefasItens title={itemData.item.value}/>
                )}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    screen: {
        padding: 50,
    },
    
});
