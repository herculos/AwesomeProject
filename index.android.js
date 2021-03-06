/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TextInput,
  ListView,
  Image,
  ScrollView,
} from 'react-native';

class Greeting extends Component {
  render() {
    return (
      <Text>Hell {this.props.name} ! </Text>
    );
  }
}


class Blink extends Component {
  constructor(props) {
    super(props);
    this.state = {showText: true};

    // Toggle the state every second
    setInterval(() => {
      this.setState({ showText: !this.state.showText });
    }, 1000);
  }

  render() {
    let display = this.state.showText ? this.props.text : ' ';
    return (
      <Text>{display}</Text>
    );
  }
}


class AwesomeProject extends Component {

  constructor(props) {
    super(props);
{/*}    this.state = {text: ''}; {*/}
    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    this.state = {
      dataSource: ds.cloneWithRows(['John', 'Joel', 'James', 'Jimmy', 'Jackson', 'Jillian', 'Julie', 'Devin'])
    };
  }

  render() {
    let pic = {
        uri: 'https://upload.wikimedia.org/wikipedia/commons/d/de/Bananavarieties.jpg'
    };

    return (
     <View style={styles.container}>

        <ListView
          dataSource={this.state.dataSource}
          renderRow={(rowData) => <Text>{rowData}</Text>}
        />

{/*}        <ScrollView>
          <Text style={{fontSize:96}}>Scroll me plz</Text>
          <Image source={require('image!favicon')} />
          <Image source={require('image!favicon')} />
          <Image source={require('image!favicon')} />
          <Image source={require('image!favicon')} />
          <Image source={require('image!favicon')} />
          <Text style={{fontSize:96}}>If you like</Text>
          <Image source={require('image!favicon')} />
          <Image source={require('image!favicon')} />
          <Image source={require('image!favicon')} />
          <Image source={require('image!favicon')} />
          <Image source={require('image!favicon')} />
          <Text style={{fontSize:96}}>Scrolling down</Text>
          <Image source={require('image!favicon')} />
          <Image source={require('image!favicon')} />
          <Image source={require('image!favicon')} />
          <Image source={require('image!favicon')} />
          <Image source={require('image!favicon')} />
          <Text style={{fontSize:96}}>Whats the best</Text>
          <Image source={require('image!favicon')} />
          <Image source={require('image!favicon')} />
          <Image source={require('image!favicon')} />
          <Image source={require('image!favicon')} />
          <Image source={require('image!favicon')} />
          <Text style={{fontSize:96}}>Framework around?</Text>
          <Image source={require('image!favicon')} />
          <Image source={require('image!favicon')} />
          <Image source={require('image!favicon')} />
          <Image source={require('image!favicon')} />
          <Image source={require('image!favicon')} />
          <Text style={{fontSize:80}}>React Native</Text>
        </ScrollView>

        <View style={{padding: 10, width: 386}}>
             <TextInput
               style={{height: 40}}
               placeholder="Type here to translate!"
               onChangeText={(text) => this.setState({text})}
             />
             <Text style={{padding: 10, fontSize: 42}}>
               {this.state.text.split(' ').map((word) => word && '🍕').join(' ')}
             </Text>
        </View>

        <Image source={pic} style={{width: 386, height: 220}}/>
        <Text style={styles.welcome}>
          Welcome to Recichic!
        </Text>
        <Text style={styles.instructions}>
          To get started, edit index.android.js
        </Text>
        <Text style={styles.instructions}>
          Shake or press menu button for dev menu
        </Text>
        <Greeting name = 'Hibiscus'> </Greeting>
        <Greeting name = 'GuoGuo' />
        <Greeting name = 'RanRna' />


        <Blink text='I love to blink' />
        <Blink text='Yes blinking is so great' />
        <Blink text='Why did they ever take this out of HTML' />
        <Blink text='Look at me look at me look at me' />


        <Text style={styles.bigblue}>just bigblue</Text>
        <Text style={[styles.bigblue, styles.red]}>bigblue, then red</Text>
        <Text style={[styles.red, styles.bigblue]}>red, then bigblue</Text>

        <View style={{
          flex: 1,
          flexDirection: 'column',
          justifyContent: 'center',
        }}>
          <View style={{width: 50, height: 50, backgroundColor: 'powderblue'}} />
          <View style={{width: 50, height: 50, backgroundColor: 'skyblue'}} />
          <View style={{width: 50, height: 50, backgroundColor: 'steelblue'}} />
        </View>
{*/}
      </View>

    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
    padding: 10,
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
  bigblue: {
    color: 'blue',
    fontWeight: 'bold',
    fontSize: 30,
  },
  red: {
    color: 'red',
  },
});

AppRegistry.registerComponent('AwesomeProject', () => AwesomeProject);
