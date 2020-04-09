import React, { Component } from 'react'
import { Text, View, TextInput, Button, Alert, FlatList, Image} from 'react-native'

class HeaderParam extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
      dataSource: [],
    } 
  }

  componentDidMount(){
    return fetch('http://myworkday.nutantek.com/empViewProfile.php?emp_id=102', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            Authorization: "A12",
        }
    }).then((response) => response.json())

        .then((responseJson) => {
           
            console.log(' current')
            console.log('response',responseJson)
        })
        .catch((error) => {
            console.error(error);
        });
};

 
    render() {
        return (
            <View>
             <FlatList
          data={this.state.dataSource}
          renderItem={({item}) =>
          <View>
              <Image source={{uri: item.emp_profile}} style={{height:100, width:100}} />
              <Text >{item.emp_fname} </Text>
              <Text >{item.emp_profile}</Text>
              <Text >{item.user_role} </Text> 
          </View>

          }
        />
                <View style={{ paddingBottom: 10 }}>
                    <TextInput
                        placeholder="User Id"
                        type='outlined'
                        underlineColor='red'
                        style={{ backgroundColor: "transparent", height: 40 }}
                    />
                </View>

                <View style={{ paddingBottom: 10 }}>
                    <TextInput
                        placeholder="Password"
                        type='outlined'
                        underlineColor='red'
                        style={{ backgroundColor: "transparent", height: 40 }}

                    />
                </View>
                <Button title="submit" onPress={this.submit} />
                <Text> {
             
              }</Text>
            </View>
        )
    }
}

export default HeaderParam
