import React, { Component, useState } from 'react';
import { Text, View, Dimensions, StyleSheet, Picker, TouchableOpacity } from 'react-native';
import { Appbar, DataTable, IconButton, Divider } from 'react-native-paper';
import { ScrollView } from 'react-native-gesture-handler';

import styles from '../Regularize/DataStyles';

 const DEVICE_WIDTH = Dimensions.get('window').width;

const Pstyles = {
        row: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center'
    },
    picker: {
        width: (DEVICE_WIDTH) / 2
    },
        
}

function PickerComponent() {
    const [selectedValue, setSelectedValue] = useState("CMonth");
    var months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    var now = new Date();
    var year = now.getFullYear();
    var thisMonth = months[now.getMonth()];
    return (
        <View>
            <Text style={{ textAlign: 'center', fontSize: 18 }}>{year}</Text>

            <View style={Pstyles.row}>
                <Text style={{ fontSize: 18 }}>Select Month :-</Text>
                <View>
                    <Picker
                        selectedValue={selectedValue}
                        onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
                        style={Pstyles.picker}
                    >
                        <Picker.Item style={{ color: 'red', backgroundColor: 'blue' }} label={thisMonth} value="CMonth" />
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
        </View>
    );
}


class DataTableComponent extends React.Component {
    render() {
        return (
            <ScrollView horizontal={true}>
                <View style={styles.main}>
                    <View style={styles.row}>
                        <Text style={styles.headtxt}>From Date</Text>
                        <Text style={styles.headtxt}>To Date</Text>
                        <Text style={styles.headtxt}>Leave Type</Text>
                        <Text style={styles.headtxt}>Status</Text>
                    </View>
                    <Divider style={{ backgroundColor: '#000' }} />

                    <View style={styles.row}>
                        <Text style={styles.bodytxt}>2/03/20</Text>
                        <Text style={styles.bodytxt}>5/03/20</Text>
                        <Text style={styles.bodytxt}>Casual Leave</Text>
                        <TouchableOpacity
                            style={styles.btnG}
                            onPress={() => this.props.navigation.navigate('LeaveView')}
                        >
                            <Text style={styles.btntxt}> Approved </Text>
                        </TouchableOpacity>
                    </View>
                    <Divider style={{ backgroundColor: '#000' }} />

                    <View style={styles.row}>
                        <Text style={styles.bodytxt}>22/03/20</Text>
                        <Text style={styles.bodytxt}>22/03/20</Text>
                        <Text style={styles.bodytxt}>Personal Leave</Text>
                        <TouchableOpacity
                            style={styles.btnG}
                            onPress={() => this.props.navigation.navigate('LeaveView')}
                        >
                            <Text style={styles.btntxt}> Approved </Text>
                        </TouchableOpacity>
                    </View>
                    <Divider style={{ backgroundColor: '#000' }} />

                    <View style={styles.row}>
                        <Text style={styles.bodytxt}>26/03/20</Text>
                        <Text style={styles.bodytxt}>26/03/20</Text>
                        <Text style={styles.bodytxt}>Personal Leave</Text>
                        <TouchableOpacity
                            style={styles.btnR}
                            
                        >
                            <Text style={styles.btntxt}> Rejected </Text>
                        </TouchableOpacity>
                    </View>
                    <Divider style={{ backgroundColor: '#000' }} />

                    <View style={styles.row}>
                        <Text style={styles.bodytxt}>28/03/20</Text>
                        <Text style={styles.bodytxt}>31/03/20</Text>
                        <Text style={styles.bodytxt}>Sick Leave</Text>
                        <TouchableOpacity
                            style={styles.btnP}
                            
                        >
                            <Text style={styles.btntxt}> Pending </Text>
                        </TouchableOpacity>
                    </View>
                    <Divider style={{ backgroundColor: '#000' }} />


                </View>
            </ScrollView>
        );
    }
}

export default class LeaveReport extends Component {
    render() {

        return (
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
                    <PickerComponent />
                    <ScrollView horizontal={true}>
                <View style={styles.main}>
                    <View style={styles.row}>
                        <Text style={styles.headtxt}>From Date</Text>
                        <Text style={styles.headtxt}>To Date</Text>
                        <Text style={styles.headtxt}>Leave Type</Text>
                        <Text style={styles.headtxt}>Status</Text>
                    </View>
                    <Divider style={{ backgroundColor: '#000' }} />

                    <View style={styles.row}>
                        <Text style={styles.bodytxt}>2/03/20</Text>
                        <Text style={styles.bodytxt}>5/03/20</Text>
                        <Text style={styles.bodytxt}>Casual Leave</Text>
                        <TouchableOpacity
                            style={styles.btnG}
                            onPress={() => this.props.navigation.navigate('LeaveView')}
                        >
                            <Text style={styles.btntxt}> Approved </Text>
                        </TouchableOpacity>
                    </View>
                    <Divider style={{ backgroundColor: '#000' }} />

                    <View style={styles.row}>
                        <Text style={styles.bodytxt}>22/03/20</Text>
                        <Text style={styles.bodytxt}>22/03/20</Text>
                        <Text style={styles.bodytxt}>Personal Leave</Text>
                        <TouchableOpacity
                            style={styles.btnG}
                            onPress={() => this.props.navigation.navigate('LeaveView')}
                        >
                            <Text style={styles.btntxt}> Approved </Text>
                        </TouchableOpacity>
                    </View>
                    <Divider style={{ backgroundColor: '#000' }} />

                    <View style={styles.row}>
                        <Text style={styles.bodytxt}>26/03/20</Text>
                        <Text style={styles.bodytxt}>26/03/20</Text>
                        <Text style={styles.bodytxt}>Personal Leave</Text>
                        <TouchableOpacity
                            style={styles.btnR}
                            onPress={() => this.props.navigation.navigate('LeaveEdit')}
                        >
                            <Text style={styles.btntxt}> Rejected </Text>
                        </TouchableOpacity>
                    </View>
                    <Divider style={{ backgroundColor: '#000' }} />

                    <View style={styles.row}>
                        <Text style={styles.bodytxt}>28/03/20</Text>
                        <Text style={styles.bodytxt}>31/03/20</Text>
                        <Text style={styles.bodytxt}>Sick Leave</Text>
                        <TouchableOpacity
                            style={styles.btnP}
                            onPress={() => this.props.navigation.navigate('LeaveEdit')}
                        >
                            <Text style={styles.btntxt}> Pending </Text>
                        </TouchableOpacity>
                    </View>
                    <Divider style={{ backgroundColor: '#000' }} />


                </View>
            </ScrollView>

                </View>
            </View>
        )
    }
}
