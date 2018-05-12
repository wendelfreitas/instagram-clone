import React, { Component } from 'react';
import { Icon } from 'react-native-elements'
import Post from './src/components/Post';
import { Posts, Me } from './src/utils/posts';
import History from './src/components/History';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Image,
  FlatList
} from 'react-native';

export default class App extends Component {
  state = {
    data: Posts,
    me: Me,
  }
  Posts({item,index}){
    return (
      <Post key={index} post={item}/>
    );
  }


  History({item,index}){
    return (
      <History key={index} post={item} />
    )
  }


  render() {
   const AddHistory = () => {
        return(
            <History post={this.state.me} add={true}/>
        );
   }

   const HistoriesList = () => {
      return(
        <View style={styles.histories}>
          <FlatList
            data={this.state.data}
            horizontal
            keyExtractor={(item, index) => item.id}
            ListHeaderComponent={AddHistory}
            showsHorizontalScrollIndicator={false}
            renderItem={this.History}
          />
        </View>
      );
    }
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <Icon
            name='camera'
            type='font-awesome'
            color='#262626'
            size={22}
          />        
          <Image
            style={styles.logo}
            source={require('./src/images/logo.png')}
          />
          <Icon
            name='paper-plane'
            type='simple-line-icon'
            color='#262626'
            size={22}
          />           
        </View>
        <FlatList
          keyExtractor={(item, index) => item.id}
          data={this.state.data}
          ListHeaderComponent={HistoriesList}
          renderItem={this.Posts}
        />        
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
  histories:{
    marginHorizontal:10,
    marginTop:5
  },  
  logo:{
    marginTop:5,
    paddingBottom:42,
    width: 115,
    height: 25,
  },
  header:{
    paddingHorizontal: 15,
    flexDirection: 'row',
    height: 50,
    width: '100%',
    backgroundColor: '#ffffff',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#cccccc',
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
});
