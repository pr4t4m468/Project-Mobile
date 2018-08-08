import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { 
    Card, 
    ListItem, 
    Button, 
    Icon, 
    FormLabel, 
    FormInput,
    Header
} from 'react-native-elements'

export default class Register extends Component {
    render() {
        return (
            <View>
                <Card title='REGISTER'>
                    <FormLabel>Full Name</FormLabel>
                    <FormInput/>
                    <FormLabel>Username</FormLabel>
                    <FormInput/>
                    <FormLabel>Password</FormLabel>
                    <FormInput
                        visible-password={true}
                        secureTextEntry={true}
                    />

                    <Text> {'\n'} </Text>
                    
                    <Button
                        icon={<Icon name='code' color='#ffffff' />}
                        backgroundColor='#2ecc71'
                        fontFamily='Lato'
                        buttonStyle={{borderRadius: 5, marginLeft: 0, marginRight: 0, marginBottom: 0, marginTop: 5}}
                        title='Register'
                        onPress={() => this.props.navigation.navigate('login')} 
                    />

                </Card>

            </View>
        )
    }
}
