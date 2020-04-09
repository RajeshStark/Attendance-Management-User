import React, { Component } from 'react';
import { Text, View, StyleSheet, Dimensions, TouchableOpacity, TextInput } from 'react-native';
import { Button, Paragraph, Dialog, Portal, Divider } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';

import styles from '../DataStyles';

class RDataTable extends Component {

  state = {
    visible: false,
  };

  _showDialog = () => this.setState({ visible: true });

  _hideDialog = () => this.setState({ visible: false });

  render() {

    return (
      <View style={styles.main}>

        <View style={styles.hrow}>
          <Text style={styles.headtxt}>Date</Text>
          <Text style={styles.headtxt}>Cloack Hrs</Text>
          <Text style={styles.headtxt}>Shortfall</Text>
          <Text style={styles.headtxt}>Regularize</Text>
        </View>
        <Divider style={{ backgroundColor: '#000' }} />

        <View style={styles.row}>
          <Text style={styles.bodytxt}>25/03/20</Text>
          <Text style={styles.bodytxt}>08:00</Text>
          <Text style={styles.bodytxt}>01:30</Text>
          <TouchableOpacity
            style={styles.btnA}
            onPress={this._showDialog}
          >
            <Text style={styles.btntxt}> Apply </Text>
          </TouchableOpacity>
        </View>
        <Divider style={{ backgroundColor: '#000' }} />

        <View style={styles.row}>
          <Text style={styles.bodytxt}>26/03/20</Text>
          <Text style={styles.bodytxt}>08:00</Text>
          <Text style={styles.bodytxt}>01:30</Text>
          <TouchableOpacity
            style={styles.btnG}
            onPress={() => this.props.navigation.navigate('regularizeView')}
          >
            <Text style={styles.btntxt}> Approved </Text>
          </TouchableOpacity>
        </View>
        <Divider style={{ backgroundColor: '#000' }} />

        <View style={styles.row}>
          <Text style={styles.bodytxt}>27/03/20</Text>
          <Text style={styles.bodytxt}>08:00</Text>
          <Text style={styles.bodytxt}>01:30</Text>
          <TouchableOpacity
            style={styles.btnR}
            onPress={() => this.props.navigation.navigate('regularizeApply')}
          >
            <Text style={styles.btntxt}> Rejected </Text>
          </TouchableOpacity>
        </View>
        <Divider style={{ backgroundColor: '#000' }} />

        <View style={styles.row}>
          <Text style={styles.bodytxt}>28/03/20</Text>
          <Text style={styles.bodytxt}>08:00</Text>
          <Text style={styles.bodytxt}>01:30</Text>
          <TouchableOpacity
            style={styles.btnP}
            onPress={() => this.props.navigation.navigate('regularizeView')}
          >
            <Text style={styles.btntxt}> Pending </Text>
          </TouchableOpacity>
        </View>
        <Divider style={{ backgroundColor: '#000' }} />

        <Portal>
          <Dialog
            visible={this.state.visible}
            onDismiss={this._hideDialog}>
            <Dialog.Title>Apply For Regularization</Dialog.Title>
            <Dialog.Content>
              <Text style={styles.text}>Date : 26/03/20</Text>
              <Text style={styles.text}>Shortfall : 1 hr</Text>
              <Text style={styles.text}>Justification :</Text>
              <TextInput
                style={styles.textinput}
                multiline={true}
                textAlignVertical="top"
                type='outlined'
              />
            </Dialog.Content>
            <Dialog.Actions>
              <TouchableOpacity style={styles.touchable} 
              onPress={this._hideDialog}>
                <Text style={styles.touchabletext}>Submit</Text>
              </TouchableOpacity>
              <Button onPress={this._hideDialog}><Text style={{color:'#2B65EC'}}>Cancel</Text></Button>
            </Dialog.Actions>
          </Dialog>
        </Portal>


      </View>
    )
  }
}


export default function (props) {
  const navigation = useNavigation();

  return <RDataTable {...props} navigation={navigation} />;
}