import React, { Component, useState } from 'react';
import { Text, View, Dimensions, Picker, TouchableOpacity, FlatList, ScrollView } from 'react-native';
import { Appbar, IconButton, Divider } from 'react-native-paper';
import AsyncStorage from '@react-native-community/async-storage';

import styles from '../Regularize/DataStyles';
import LeaveData from '../../Services/Leave/LeaveData';

const DEVICE_WIDTH = Dimensions.get('window').width;

const Pstyles = {
    row: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: (DEVICE_WIDTH) / 1.5,
        paddingHorizontl: 20,
    },
    picker: {
        width: (DEVICE_WIDTH) / 2.8
    },

}


function PickerYearComponent() {
    const [selectedValue, setSelectedValue] = useState("CYear");
    var now = new Date();
    var thisYear = now.getFullYear().toString();
    var pYear = now.getFullYear() - 1;
    var lastYear = pYear.toString();
    return (
        <View>
            <View style={Pstyles.row}>
                <View>
                    <Picker
                        selectedValue={selectedValue}
                        onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
                        style={Pstyles.picker}
                    >
                        <Picker.Item label={thisYear} value="CYear" />
                        <Picker.Item label={lastYear} value="jan" />
                    </Picker>
                </View>
            </View>
        </View>
    );
}


function PickerComponent() {
    const [selectedValue, setSelectedValue] = useState("CMonth");
    var months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    var now = new Date();
    var thisMonth = months[now.getMonth()];
    return (
        <View>

            <View>
                <Picker
                    selectedValue={selectedValue}
                    onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
                    style={Pstyles.picker}
                >
                    <Picker.Item label={thisMonth} value="CMonth" />
                    <Picker.Item label="January" value="jan" />
                    <Picker.Item label="February" value="feb" />
                    <Picker.Item label="March" value="mar" />
                    <Picker.Item label="April" value="apr" />
                    <Picker.Item label="May" value="may" />
                    <Picker.Item label="June" value="jun" />
                    <Picker.Item label="July" value="jul" />
                    <Picker.Item label="August" value="aug" />
                    <Picker.Item label="September" value="sep" />
                    <Picker.Item label="October" value="oct" />
                    <Picker.Item label="November" value="nov" />
                    <Picker.Item label="December" value="dec" />
                </Picker>
            </View>

        </View>
    );
}



export default class LeaveReport extends Component {
    constructor(props) {
        super(props);
        this.state = {
            userInfo: [],
            // User_Authkey:'',

        }
    }


    async componentDidMount() {

        const User_Authkey = await AsyncStorage.getItem('User_Authkey');
        const emp_id = await AsyncStorage.getItem('emp_id');

        console.log("Token from Dashboard " + " user authkey " + User_Authkey + " ID " + emp_id)

        return fetch('http://myworkday.nutantek.com/emp_leaves_view.php?emp_id=' + emp_id, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                Authorization: User_Authkey,
            }
        }).then((response) => response.json())
            //   .then((json) => {
            //     return json.data 
            //   })
            .then(data => this.setState({ userInfo: data }))
            .catch((error) => {
                console.error(error);
            });
    };

    render() {
        //   const User = this.state.userInfo;
        console.log(this.state.userInfo)
        return (
            <ScrollView>
                <View>
                    <Appbar.Header style={{ backgroundColor: '#fff' }}>
                        <Appbar.BackAction
                            onPress={() => this.props.navigation.goBack()}
                        />
                        <Appbar.Content
                            title="Leave History"
                        />
                        <IconButton
                            icon="file-excel"
                            size={25}
                            onPress={() => console.log('Pressed')}
                        />
                    </Appbar.Header>
                    <View>
                        <View style={Pstyles.row}>

                            <PickerYearComponent />
                            <PickerComponent />
                        </View>


                        <View style={styles.main}>
                            <View style={styles.row}>
                                <Text style={styles.headtxt}>From Date</Text>
                                <Text style={styles.headtxt}>To Date</Text>
                                <Text style={styles.headtxt}>Leave Type</Text>
                                <Text style={styles.headtxt}>Status</Text>
                            </View>
                            <Divider style={{ backgroundColor: '#000' }} />
                            <FlatList
                                // data={this.state.userInfo}
                                data={LeaveData}
                                renderItem={({ item }) =>
                                    <View>
                                        <View style={styles.row}>
                                            <Text style={styles.bodytxt}>{item.leave_from_date}</Text>
                                            <Text style={styles.bodytxt}>{item.leave_to_date}</Text>
                                            <Text style={styles.bodytxt}>{item.Leavetype}</Text>
                                            <TouchableOpacity
                                                style={[(item.leave_status == "Pending")? styles.btnP : (item.leave_status == "Approved")? styles.btnG  : (item.leave_status == "Rejected")? styles.btnR : (item.leave_status == "Pending")? styles.btnP : ""]}
                                                
                                                onPress= {()=>
                                                    {
                                                       let destination = (item.leave_status === "Rejected")? "LeaveEdit" : "LeaveView"
                                                       this.props.navigation.navigate(destination ,{
                                                         check_in_date : (item.leave_from_date),
                                                         shortfall_hrs : (item.leave_to_date), 
                                                         rm_comments : (item.leave_status),
                                                         leavetype: (item.Leavetype)
                                                       }
                                                       );
                                                     } 
                                                }
                                            >
                                                <Text style={styles.btntxt}> {item.leave_status} </Text>
                                            </TouchableOpacity>
                                        </View>
                                        <Divider style={{ backgroundColor: '#000' }} />
                                    </View>
                                }
                                keyExtractor={item => item.id}
                            />
                        </View>


                    </View>
                </View>
            </ScrollView>
        )
    }
}
