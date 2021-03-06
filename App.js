import React, { useState } from 'react';
import { FlatList, StyleSheet, View } from 'react-native';
import InputContainer from './components/InputContainer';
import TarefasItens from './components/TarefasItens';

export default function App() {
    const [tarefas, setTarefas] = useState([])
    const [input, setInput] = useState('')

    // método que cria um objeto com uma key e um value, e adiciona na lista de tarefas
    const addTarefa = input => {
        setTarefas(tarefas => [...tarefas, { id: Math.random().toString(), value: input }])
    }

    //método que substitui a lista de tarefas por usa lista vazia
    const cleanTarefas = () => {
        setTarefas([])
    }

    const removeTarefas = tarefaId => {
        setTarefas(tarefas => {
            return tarefas.filter((tarefa) => tarefa.id !== tarefaId )
        })
    }

    return (
        <View style={styles.screen}>

            <InputContainer addTarefa={addTarefa} cleanTarefas={cleanTarefas} />

            <FlatList
                keyExtractor={(item) => item.id}
                data={tarefas}
                renderItem={itemData => (
                    <TarefasItens id={itemData.item.id} title={itemData.item.value} onDelete={removeTarefas} />
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
