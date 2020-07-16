import React, { useState } from 'react';
import { Button, Text, View } from 'react-native';

const TarefasItens = props => {
    const [color, setColor] = useState('#ccc')
    const [colorFont, setColorFont] = useState('black')
    return (
        <View style={{
            padding: 10,
            backgroundColor: color,
            borderWidth: 1,
            marginVertical: 10,
        }}>
            <Text style={{ color: colorFont }}>{props.title}</Text>
            <Button title={'done'} onPress={() => { setColor('green'); setColorFont('white') }} />
            <Button title={'undone'} onPress={() => { setColor('#ccc'), setColorFont('black') }} />
        </View>
    )
}

export default TarefasItens;