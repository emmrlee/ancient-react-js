import React, { Component } from 'react';
import { AppRegistry, Text, View, StyleSheet, Image, TextInput, ImageBackground, TouchableHighlight, Alert, Dimensions } from 'react-native';
import Constants from 'expo-constants';

let deviceHeight = Dimensions.get('window').height;
let deviceWidth = Dimensions.get('window').width;

export default class App extends Component {
    
    state= {
      team1: 'Team 1',
      team2: 'Team 2',
    }
    
    
    render() {
        return (
            <View style={styles.container}>
                <ImageBackground
                        style={styles.background}
                        source={{ uri: 'https://codehs.com/uploads/dc101aff71785f62d41de60b9edbb2c2' }}
                    >
                    <View style={styles.titleContainer}>
                        <Text style={styles.title}>
                            BASKETBALL&#127936; &#10024;SCOREKEEPER
                        </Text>
                    </View>
                    
                    <View style={styles.buttonContainer}>
                        <TouchableHighlight 
                            onPress={() => {alert('add +2 to '+this.state.team1) }}
                        >
                            <View style={styles.button}>
                                <TextInput style={styles.buttonText}
                                onChangeText={(team1) => this.setState({team1})}
                                value={this.state.team1}
                                />
                                <Text style={styles.buttonText}>
                                    &#9996;&#65039; BASKET!
                                </Text>
                            </View>
                        </TouchableHighlight>
                        
                        <TouchableHighlight
                            onPress={() => {alert('add +2 to '+this.state.team2) }}
                        >
                            <View style={styles.button}>
                                <TextInput style={styles.buttonText}
                                onChangeText={(team2) => this.setState({team2})}
                                value={this.state.team2}
                                />
                                <Text style={styles.buttonText}>
                                    &#9996;&#65039; BASKET!
                                </Text>
                            </View>
                        </TouchableHighlight>
                    </View>
                    
                    <View style={styles.buttonContainer}>
                        <TouchableHighlight
                            onPress={() => {alert('add +3 to '+this.state.team1) }}
                        >
                            <View style={styles.button}>
                                <TextInput style={styles.buttonText}
                                onChangeText={(team1) => this.setState({team1})}
                                value={this.state.team1}
                                />
                                <Text style={styles.buttonText}>
                                    &#128076; 3-POINTER!
                                </Text>
                            </View>
                        </TouchableHighlight>
                        
                        <TouchableHighlight
                            onPress={() => {alert('add +3 to '+this.state.team2) }}
                        >
                            <View style={styles.button}>
                                <TextInput style={styles.buttonText}
                                onChangeText={(team2) => this.setState({team2})}
                                value={this.state.team2}
                                />
                                <Text style={styles.buttonText}>
                                    &#128076; 3-POINTER!
                                </Text>
                            </View>
                        </TouchableHighlight>
                    </View>
                    
                    <View style={styles.buttonContainer}>
                        <TouchableHighlight
                            onPress={() => {alert('add +1 to '+this.state.team1) }}
                        >
                            <View style={styles.button}>
                                <TextInput style={styles.buttonText}
                                onChangeText={(team1) => this.setState({team1})}
                                value={this.state.team1}
                                />
                                <Text style={styles.buttonText}>
                                    &#9757;&#65039; FREE THROW!
                                </Text>
                            </View>
                        </TouchableHighlight>
                        
                        <TouchableHighlight
                            onPress={() => {alert('add +1 to '+this.state.team2) }}
                        >
                            <View style={styles.button}>
                                <TextInput style={styles.buttonText}
                                onChangeText={(team2) => this.setState({team2})}
                                value={this.state.team2}
                                />
                                <Text style={styles.buttonText}>
                                    &#9757;&#65039; FREE THROW!
                                </Text>
                            </View>
                        </TouchableHighlight>
                    </View>
                    
                    <View style={styles.titleContainer2}>
                        <Text style={styles.title}>
                            &#128203;SCORE&#9999;&#65039;
                        </Text>
                    </View>
                    
                    <View style={styles.paragraphContainer}>
                        <Text style={styles.paragraph}>
                            &#9977;&#127995;&#8205;&#9792;&#65039;
                        </Text>
                        <TextInput style={styles.paragraph}
                        onChangeText={(team1) => this.setState({team1})}
                        value={this.state.team1}
                        />
                        <Text style={styles.paragraph}>
                            : 0
                        </Text>
                    </View>
                    
                    <View style={styles.paragraphContainer}>
                        <Text style={styles.paragraph}>
                            &#9977;&#127997;&#8205;&#9794;&#65039;
                        </Text>
                        <TextInput style={styles.paragraph}
                        onChangeText={(team2) => this.setState({team2})}
                        value={this.state.team2}
                        />
                        <Text style={styles.paragraph}>
                            : 0
                        </Text>
                    </View>
                </ImageBackground>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#ff9966',
    },
    background: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    titleContainer: {
        height: deviceHeight/7,
        marginTop: 10,
    },
    titleContainer2: {
        height: deviceHeight/9,
        marginTop: 10,
    },
    title: {
        color: 'white',
        fontSize: deviceHeight/16,
        textAlign: 'center',
        fontWeight: 'bold',
        textShadowColor: 'black',
        textShadowOffset: { width: 1, height: 3 },
        textShadowRadius: 3
    },
    paragraphContainer: {
        height: deviceHeight/10,
        width: deviceWidth*6/7,
        backgroundColor: '#ff8000',
        borderColor: 'white',
        borderWidth: 2,
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 10,
        flexDirection: 'row',
    },
    paragraph: {
        color: 'white',
        fontSize: 20,
        width: deviceWidth/3,
        textAlign: 'center',
        fontWeight: 'bold',
    },
    buttonContainer: {
        flexDirection: 'row',
        height: deviceHeight/7,
        width: deviceHeight*5/6,
        alignItems: 'center',
        justifyContent: 'center',
    },
    button: {
        height: deviceHeight/10,
        width: deviceWidth*2/5,
        backgroundColor: '#ff8000',
        borderColor: 'white',
        borderWidth: 2,
        alignItems: 'center',
        justifyContent: 'center',
        margin: 10,
    },
    buttonText: {
        color: 'white',
        fontSize: deviceHeight/38,
        textAlign: 'center',
        fontWeight: 'bold',
    },
});
