import React from "react";
import { Button, Text, View } from "react-native";

export default props => (
    <View style={{ flex: 1}}>
        <View>
            {props.avancar ? 
            <Button title='Avaçar' onPress={() =>{
                props.navigation.navigate(props.avancar)}}/>
                :false
            }
        </View>
        <View style={{ flex: 1 }}>
            {props.children}
        </View>

    </View>
)