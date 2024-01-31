import React, { Component } from 'react';
import { AppRegistry, Text, View, StyleSheet, Image, TextInput, Picker, Switch, ImageBackground, TouchableHighlight, Alert, Dimensions, ScrollView } from 'react-native';
import Constants from 'expo-constants';
import { Slider } from 'react-native-elements';

let deviceHeight = Dimensions.get('window').height;
let deviceWidth = Dimensions.get('window').width;

export default class App extends Component {
    state = {
        cart: [ ],
        
        name: ' ',
        location: ' ',
        confirm: false,
        message: ' ',
        total: 0,
        
        menuPageDisplay: 'block',
        purchaseInfoPageDisplay: 'none',
        cartPageDisplay: 'none',
        orderPageDisplay: 'none',
        
        menu: {
            'milk tea' : {topping: 'none', sweetness: '100%'},
            'thai tea' : {topping: 'none', sweetness: '100%'},
            'taro milk tea' : {topping: 'none', sweetness: '100%'},
            'lychee green tea' : {topping: 'none', sweetness: '100%'},
            'peach black tea' : {topping: 'none', sweetness: '100%'},
            'grapefruit green tea' : {topping: 'none', sweetness: '100%'},
            'mung bean milk tea' : {topping: 'none', sweetness: '100%'},
            'jasmine green tea' : {topping: 'none', sweetness: '100%'},
        },
    }
    
    handleMenuPagePress = () => this.setState(state => ({
        menuPageDisplay: 'block',
        purchaseInfoPageDisplay: 'none',
        cartPageDisplay: 'none',
        orderPageDisplay: 'none',
    }));
        
    handlePurchaseInfoPagePress = () => this.setState(state => ({
        menuPageDisplay: 'none',
        purchaseInfoPageDisplay: 'block',
        cartPageDisplay: 'none',
        orderPageDisplay: 'none',
    }));
    
    handleCartPagePress = () => this.setState(state => ({
        menuPageDisplay: 'none',
        purchaseInfoPageDisplay: 'none',
        cartPageDisplay: 'block',
        orderPageDisplay: 'none',
    }));
    
    add2Cart = (drink) => {
        this.state.cart.splice(this.state.cart.length, 1, {
            name: drink,
            topping: this.state.menu[drink].topping,
            sweetness: this.state.menu[drink].sweetness,
        })
        this.getTotal();
    };
    
    getTotal = () => {
        var temp = 0;
        for(var i=0; i<this.state.cart.length; i++){
            if(this.state.cart[i].topping!='none'){
                temp+= 0.50;
            }
        }
        
        this.setState({
            total: (this.state.cart.length*3)+temp,
        })
    };
    
    setTopping = (name, topping) => {
        let menu = this.state.menu;
        menu[name].topping = topping;
        
        this.setState({
            menu: menu
        })
    };
    
    setSweetness = (name, sweetness) => {
        let menu = this.state.menu;
        menu[name].sweetness = sweetness;
        
        this.setState({
            menu: menu
        })
    };
    
    toggleSwitch = () => {
        this.setState({
            confirm: !this.state.confirm,
        })
    };
    
    placeOrder = () => {
        if(this.state.confirm==false){
            this.setState({
                message: 'you need to confirm your purchase info before placing an order :('
            })
        } else if(this.state.cart.length==0){
            this.setState({
                message: 'please add something to your cart before placing an order :('
            })
        } else if(this.state.cart.length>=1 && this.state.confirm){
            this.setState({
                message: 'your order has been placed :)'
            })
        }
        this.setState({
            menuPageDisplay: 'none',
            purchaseInfoPageDisplay: 'none',
            cartPageDisplay: 'none',
            orderPageDisplay: 'block',
        })
    };
    
    removeOrder = (drink) => {
        var temp = this.state.cart;
        var index = temp.indexOf(drink);
        if (index != -1) {
            temp.splice(index, 1);
            this.setState({
                cart: temp
            })
        }
        this.getTotal();
        this.handleCartPagePress();
    };
    
    restart = () => {
        this.setState({
            cart: [ ],
            total: 0,
            confirm: false,
            name: ' ',
            location: ' ',
            message: ' ',
        })
        this.handleMenuPagePress();
    };
    
    render () {
        return (
            <View style={styles.container}>
                <View style={styles.titleContainer}>
                    <Text style={styles.title}>
                        BOBA APP
                    </Text>
                    
                    <Image
                        source={{ uri: 'https://codehs.com/uploads/dc25b131fd2a101320c10d3291770957' }}
                        style={{ height: 60, width: 50, margin: 8, }}
                    />
                </View>
                
                <View style={{ display: this.state.menuPageDisplay }}>
                    <View style={styles.pageContainer}>
                        <ScrollView>
                            <View style={styles.menuContainer}>
                                {Object.keys(this.state.menu).map((drink) => (
                                    <View style={styles.itemContainer}>
                                        <View style={styles.drinkContainer}>
                                            <View style={styles.button2}>
                                                <Text style={styles.buttonText2}>
                                                    {drink}
                                                </Text>
                                            </View>
                                            <TouchableHighlight
                                                onPress = {() => this.add2Cart(drink)} 
                                            >
                                                <View style={styles.button1}>
                                                    <Text style={styles.buttonText1}>
                                                        add to cart
                                                    </Text>
                                                </View>
                                            </TouchableHighlight>
                                        </View>
                                        <View style={styles.drinkContainer}>
                                            <Picker
                                                selectedValue={this.state.selectedTopping}
                                                style={{ height: 30, width: 180, borderRadius: 10, borderWidth: 2, borderColor: 'black', margin: 5,}}
                                                onValueChange={(itemValue, itemIndex) => this.setTopping(drink, itemValue)}
                                              >
                                                <Picker.Item label="none" value="none" />
                                                <Picker.Item label="boba" value="boba" />
                                                <Picker.Item label="grass jelly" value="grass jelly" />
                                                <Picker.Item label="aloe vera jelly" value="aloe vera jelly" />
                                                <Picker.Item label="egg custard" value="egg custard" />
                                                <Picker.Item label="red bean" value="red bean" />
                                            </Picker>
                                            <Picker
                                                style={{ height: 30, width: 70, borderRadius: 10, borderWidth: 2, backgroundColor: 'tan', color: 'white', borderColor: 'black', margin: 5,}}
                                                onValueChange={(itemValue, itemIndex) => this.setSweetness(drink, itemValue)}
                                              >
                                                <Picker.Item label="100%" value="100%" />
                                                <Picker.Item label="50%" value="50%" />
                                                <Picker.Item label="25%" value="25%" />
                                                <Picker.Item label="0%" value="0%" />
                                            </Picker>
                                        </View>
                                    </View>
                                ))}
                            </View>
                        </ScrollView>
                    </View>
                </View>
                
                <View style={{ display: this.state.purchaseInfoPageDisplay }}>
                    <View style={styles.barContainer2}>
                        <Text style={styles.buttonText1}>
                            please confirm your purchase details
                        </Text>
                    </View>
                    <View style={styles.pageContainer2}>
                        <View style={styles.paymentContainer2}>
                            <Picker
                                style={{ height: 30, width: 220, borderRadius: 10, borderWidth: 2, borderColor: 'black', margin: 10, backgroundColor: 'tan', color: 'white'}}
                              >
                                <Picker.Item label="pickup location" value="default" />
                                <Picker.Item label="anaheim" value="anaheim" />
                                <Picker.Item label="cypress" value="cypress" />
                                <Picker.Item label="la palma" value="la palma" />
                                <Picker.Item label="garden grove" value="garden grove" />
                                <Picker.Item label="buena park" value="buena park" />
                            </Picker>
                            <Picker
                                style={{ height: 30, width: 220, borderRadius: 10, borderWidth: 2, borderColor: 'black', margin: 10,}}
                              >
                                <Picker.Item label="form of payment" value="default" />
                                <Picker.Item label="credit" value="credit" />
                                <Picker.Item label="debit" value="debit" />
                                <Picker.Item label="apple pay" value="apple pay" />
                                <Picker.Item label="google pay" value="google pay" />
                                <Picker.Item label="cash during pickup" value="cash during pickup" />
                            </Picker>
                            <Picker
                                style={{ height: 30, width: 220, borderRadius: 10, borderWidth: 2, borderColor: 'black', margin: 10, backgroundColor: 'burlywood', color: 'white'}}
                              >
                                <Picker.Item label="time of pickup" value="default" />
                                <Picker.Item label="5 min after order" value="5 min after order" />
                                <Picker.Item label="10 min after order" value="10 min after order" />
                                <Picker.Item label="15 min after order" value="15 min after order" />
                                <Picker.Item label="20 min after order" value="20 min after order" />
                            </Picker>
                        </View>
                        <View style={styles.paymentContainer1}>
                            <View style={styles.confirmContainer}>
                                <Text style={styles.paragraph2}>
                                    CONFIRM YOUR DELIVERY:
                                </Text>
                                <Switch
                                    style={{marginLeft: 10}}
                                    onValueChange={this.toggleSwitch}
                                    value={this.state.confirm}
                                />
                            </View>
                        </View>
                    </View>
                </View>
                
                <View style={{ display: this.state.cartPageDisplay }}>
                    <ScrollView>
                        <View style={styles.pageContainer2}>
                            {this.state.cart.map((drink) => (
                                <View style={styles.itemContainer}>
                                    <View style={styles.drinkContainer}>
                                        <View style={styles.button2}>
                                            <Text style={styles.buttonText2}>
                                                {drink.name}
                                            </Text>
                                        </View>
                                        <TouchableHighlight
                                            onPress = {() => this.removeOrder(drink)} 
                                        >
                                            <View style={styles.button1}>
                                                <Text style={styles.buttonText1}>
                                                    remove drink
                                                </Text>
                                            </View>
                                        </TouchableHighlight>
                                    </View>
                                    <View style={styles.drinkContainer}>
                                        <View style={{ height: 30, width: 160, justifyContent: 'center', alignItems: 'center', borderRadius: 10, borderWidth: 2, borderColor: 'black', margin: 5, alignItems: 'center'}}>
                                            <Text style={styles.paragraph}>
                                                topping: {drink.topping}
                                            </Text>
                                        </View>
                                        <View style={{ height: 30, width: 90, justifyContent: 'center', alignItems: 'center', borderRadius: 10, borderWidth: 2, borderColor: 'black', margin: 5,  alignItems: 'center',}}>
                                            <Text style={styles.paragraph}>
                                                sweetness lvl: {drink.sweetness}
                                            </Text>
                                        </View>
                                    </View>
                                </View>
                            ))}
                        </View>
                    </ScrollView>
                    <View style ={styles.barContainer1}>
                        <View style={styles.totalContainer}>
                            <Text style={styles.paragraph2}>
                                TOTAL:
                                ${this.state.total}
                            </Text>
                        </View>
                        <View style={styles.orderContainer}>
                            <TouchableHighlight
                                onPress = {() => this.placeOrder()} 
                            >
                                <View style={styles.button1}>
                                    <Text style={styles.buttonText1}>
                                        place order
                                    </Text>
                                </View>
                            </TouchableHighlight>
                        </View>
                    </View>
                </View>
                
                <View style={{ display: this.state.orderPageDisplay }}>
                    <View style={styles.pageContainer}>
                        <View style={styles.messageContainer}>
                            <Text style={styles.messageText}>
                                {this.state.message}
                            </Text>
                        </View>
                        <TouchableHighlight
                            onPress = {() => this.handlePurchaseInfoPagePress()} 
                        >
                            <View style={styles.button2}>
                                <Text style={styles.buttonText2}>
                                    confirm your purchase info
                                </Text>
                            </View>
                        </TouchableHighlight>
                        <TouchableHighlight
                            onPress = {() => this.handleMenuPagePress()} 
                        >
                            <View style={styles.button4}>
                                <Text style={styles.buttonText4}>
                                    add more to cart
                                </Text>
                            </View>
                        </TouchableHighlight>
                        <TouchableHighlight
                            onPress = {() => this.restart()} 
                        >
                            <View style={styles.button3}>
                                <Text style={styles.buttonText2}>
                                    place another order
                                </Text>
                            </View>
                        </TouchableHighlight>
                    </View>
                </View>
                
                <View style={styles.navbarContainer}>
                        <TouchableHighlight style={styles.navButton}
                        onPress={this.handleMenuPagePress}
                        >
                            <Text style={styles.navButtonText}>
                                MENU
                            </Text>
                        </TouchableHighlight>
                        <TouchableHighlight style={styles.navButton}
                        onPress={this.handlePurchaseInfoPagePress}
                        >
                            <Text style={styles.navButtonText}>
                                PURCHASE INFO
                            </Text>
                        </TouchableHighlight>
                        <TouchableHighlight style={styles.navButton}
                        onPress={this.handleCartPagePress}
                        >
                            <Text style={styles.navButtonText}>
                                CART
                            </Text>
                        </TouchableHighlight>
                    </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        height: deviceHeight,
        width: deviceWidth,
    },
    titleContainer: {
        height: deviceHeight/6,
        width: deviceWidth,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#009688',
        flexDirection: 'row',
        borderBottomWidth: 4,
        borderColor: 'black',
    },
    title: {
        color: 'white',
        fontSize: deviceHeight/16,
        textAlign: 'center',
        fontWeight: 'bold',
        textShadowColor: 'black',
        textShadowOffset: { width: 1, height: 3 },
        textShadowRadius: 3,
    },
    menuContainer: {
        height: 2*deviceHeight/3,
        width: deviceWidth,
        alignItems: 'center',
        justifyContent: 'top',
    },
    pageContainer: {
        height: 2*deviceHeight/3,
        width: deviceWidth,
        alignItems: 'center',
        justifyContent: 'top',
        backgroundColor: 'snow',
    },
    pageContainer2: {
        height: 5*deviceHeight/9,
        width: deviceWidth,
        alignItems: 'center',
        justifyContent: 'top',
        backgroundColor: 'snow',
    },
    messageContainer: {
        height: 2*deviceHeight/7,
        width: 3*deviceWidth/4,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'snow',
    },
    barContainer1: {
        height: deviceHeight/9,
        width: deviceWidth,
        alignItems: 'center',
        justifyContent: 'top',
        backgroundColor: 'snow',
        borderTopWidth: 4,
        borderColor: 'black',
        flexDirection: 'row',
    },
    barContainer2: {
        height: deviceHeight/9,
        width: deviceWidth,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'snow',
        borderBottomWidth: 4,
        borderColor: 'black',
        flexDirection: 'row',
    },
    confirmContainer: {
        alignItems: 'top',
        justifyContent: 'top',
        backgroundColor: 'snow',
        borderColor: 'black',
        flexDirection: 'row',
        marginTop: 10,
    },
    totalContainer: {
        height: deviceHeight/9,
        width: deviceWidth/2,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'snow',
    },
    orderContainer: {
        height: deviceHeight/9,
        width: deviceWidth/2,
        alignItems: 'center',
        justifyContent: 'top',
        backgroundColor: 'snow',
    },
    paragraph: {
        fontSize: deviceHeight/50,
        textAlign: 'center',
        color: 'black',
        fontWeight: 'bold',
    },
    messageText: {
        fontSize: deviceHeight/30,
        textAlign: 'center',
        color: 'black',
        fontWeight: 'bold',
    },
    navbarContainer: {
        height: deviceHeight/6,
        width: deviceWidth,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#009688',
        borderBottomWidth: 4,
        borderColor: 'black',
    },
    navButton: {
        height: deviceHeight/14,
        width: 2*deviceWidth/7,
        backgroundColor: 'white',
        alignItems: 'center',
        justifyContent: 'center',
        margin: 5,
    },
    drinkContainer: {
        height: deviceHeight/11,
        width: deviceWidth,
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
    },
    itemContainer: {
        height: deviceHeight/4,
        width: deviceWidth,
        alignItems: 'center',
        justifyContent: 'center',
        borderStyle: 'dotted',
        borderBottomWidth: 3,
    },
    paymentContainer1: {
        height: deviceHeight/9,
        width: deviceWidth,
        alignItems: 'center',
        justifyContent: 'center',
    },
    paymentContainer2: {
        height: 4*deviceHeight/9,
        width: deviceWidth,
        alignItems: 'center',
        justifyContent: 'center',
        borderStyle: 'dotted',
        borderBottomWidth: 3,
    },
    button1: {
        height: deviceHeight/13,
        width: 2*deviceWidth/7,
        borderRadius: 10,
        borderWidth: 2,
        borderColor: 'black',
        backgroundColor: 'white',
        alignItems: 'center',
        justifyContent: 'center',
        margin: 5,
    },
    button2: {
        height: deviceHeight/13,
        width: 4*deviceWidth/7,
        borderRadius: 10,
        borderWidth: 2,
        borderColor: 'black',
        backgroundColor: 'burlywood',
        alignItems: 'center',
        justifyContent: 'center',
        margin: 5,
    },
    button3: {
        height: deviceHeight/13,
        width: 4*deviceWidth/7,
        borderRadius: 10,
        borderWidth: 2,
        borderColor: 'black',
        backgroundColor: '#009688',
        alignItems: 'center',
        justifyContent: 'center',
        margin: 5,
    },
    button4: {
        height: deviceHeight/13,
        width: 4*deviceWidth/7,
        borderRadius: 10,
        borderWidth: 2,
        borderColor: 'black',
        backgroundColor: 'white',
        alignItems: 'center',
        justifyContent: 'center',
        margin: 5,
    },
    buttonText1: {
        fontSize: deviceHeight/40,
        textAlign: 'center',
        color: 'black',
        fontWeight: 'bold',
    },
    buttonText2: {
        fontSize: deviceHeight/32,
        textAlign: 'center',
        color: 'white',
        fontWeight: 'bold',
    },
    buttonText4: {
        fontSize: deviceHeight/32,
        textAlign: 'center',
        color: 'black',
        fontWeight: 'bold',
    },
    paragraph2: {
        fontSize: deviceHeight/32,
        textAlign: 'center',
        color: '#009688',
        fontWeight: 'bold',
    },
    navButtonText: {
        fontSize: deviceHeight/40,
        textAlign: 'center',
        color: 'black',
        fontWeight: 'bold',
    },
    drinkName: {
        fontSize: deviceHeight/30,
        textAlign: 'center',
        color: 'burlywood',
        fontWeight: 'bold',
    },
});
