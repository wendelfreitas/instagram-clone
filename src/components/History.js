import React, { Component } from 'react';
import { Avatar, Icon } from 'react-native-elements';
import {
  StyleSheet,
  View,
  Image,
  Text
} from 'react-native';

 function _substring(nickname){
 	if(nickname.length > 10){
  		return nickname.toString().substring(0,10) + '...';
 	}else{
 		return nickname;
 	}
  }

class History extends Component {



  render() {
    return (
      <View style={{alignItems: 'center',}}>
      	<Image
      	  style={[styles.avatar,{borderWidth: this.props.add ? 0 : 2}]}
      	  source={{uri: this.props.post.photo}}
      	/>
      	
		<Text style={{color:'black',fontSize:12}} >
		    { this.props.add ? <Text>You</Text> : _substring(this.props.post.nickname)}	  
		</Text>

      </View>
    );
  }
}

const styles = StyleSheet.create({
 avatar:{
 	marginHorizontal:8,
 	height: 52,
 	borderRadius:50,
 	width: 52,
    borderColor: '#8a0f48',
 }
});


export default History;