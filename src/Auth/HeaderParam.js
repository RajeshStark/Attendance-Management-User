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
    return fetch('http://myworkday.nutantek.com/emp_attandancemonthwise.php?emp_id=102', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            Authorization: "A12",
        }
    }).then((response) => response.json())
    .then((responseJson)=> {
        console.log("response "+responseJson)
        this.setState({
         dataSource: responseJson
        })
    })
        // .then((responseJson) => {
           
        //     console.log(' current')
        //     console.log('response',responseJson)
        // })
        .catch((error) => {
            console.error(error);
        });
}


 
    render() {
        return (
            <View>
                <Text>HII</Text>
             <FlatList
          data={this.state.dataSource}
          renderItem={({item}) =>
          <View>
              <Text >{item.emp_fname} </Text>
              <Text >{item.emp_profile}</Text>
              <Text >{item.user_role} </Text> 
          </View>

          }
        />
                
            </View>
        )
    }
}

export default HeaderParam
