import React from 'react'
import { StyleSheet, Text, View } from 'react-native';

function AppLayout(props){

    return(
        <View style={styles.container}>
            <Text>
                {props.saudacao} 
                ,usuario:{props.user}
                ,password:{props.password}
            </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
});
export default AppLayout