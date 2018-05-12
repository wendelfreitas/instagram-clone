import React, { Component } from 'react';
import { Avatar, Icon } from 'react-native-elements';
import {
  StyleSheet,
  View,
  Image,
  Text
} from 'react-native';

class Post extends Component {
   like({item,key}){
   	alert(key);
   }

  render() {
    return (
    	<View style={styles.base}>
    		<View style={styles.top}>
    			<View style = {styles.profile}>
					<Avatar
					  small
					  rounded
					  source={{uri: this.props.post.photo}}
					  onPress={() => console.log("Works!")}
					  activeOpacity={0.7}
					  containerStyle={{marginRight:8}}
					/>
		    		<Text>
		    		  <Text style={styles.nickname}>
		    		  	{this.props.post.nickname}{'\n'}
		    		  </Text>
		    		  <Text style={styles.location}>
		    		    {this.props.post.location}
		    		  </Text>
		    		</Text>     				
	    		</View>
				<View >
					<Icon
						name='dots-three-vertical'
						type='entypo'
						color='#cccccc'
						style={styles.menuPost}
					/>  
				</View>	    		   			
    		</View>
    		<View style={styles.middle}>
    			<Image
    			  style={styles.image}
    			  source={{uri: this.props.post.image}}
    			/>
    		</View>
    		<View style={styles.bottom}>
    			<View style={{flexDirection:'row',justifyContent:'space-between',width:90}}> 
					<Icon
						name={(this.props.post.liked) ? 'heart' : 'heart-o'}
						type='font-awesome'
						color={(this.props.post.liked) ? '#ff4d4d' : '#333333'}
						size={24}
						// onPress={this.props.like}
						iconStyle={{paddingTop:2}}
					/>  
					<Icon
						name='comment-o'
						type='font-awesome'
						size={24}
						color='#333333'
					/>
			        <Icon
			            name='paper-plane'
			            type='simple-line-icon'
			            color='#262626'
			            size={24}
			        />  					
    			</View>
				<Icon
					name='bookmark-o'
					color='#333333'
					type='font-awesome'
				/>				 				
    		</View>
    		<View style={styles.comments}>
	    		<Text style={{color:'black', fontWeight:'bold'}}>
	    		  {this.props.post.likes} Likes
	    		</Text>
	    		<Text>
	    		  <Text style={{fontWeight:'bold',color:'black',paddingRight:15}}>
	    		    {this.props.post.nickname}{' '}
	    		  </Text>
	    		  <Text style={{color:'black',marginLeft:10}}>
	    		     {this.props.post.status}
	    		  </Text>
	    		</Text>    			
    		</View>
    	</View>
    );
  }
}

const styles = StyleSheet.create({
	top:{
		marginHorizontal: 15,
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'space-between',
	},
	middle:{
		marginVertical: 9
	},
	bottom:{
		flexDirection: 'row',
		justifyContent: 'space-between',
		marginHorizontal: 15
	},
	comments:{
		marginHorizontal: 17,
		marginVertical:5
	},
	image:{
		flex: 1,
		width: '100%',
		height: 300
	},
	location:{
		color: 'black',
		fontSize: 12
	},
	profile:{
		flexDirection:'row',
		alignItems: 'center',
	},
	base:{
		width: '100%',
		marginTop: 10
	},
	nickname:{
		color:'black',
		fontSize: 14,
		paddingLeft:10,
		fontWeight: 'bold'
	},
	menuPost:{
	}
});


export default Post;