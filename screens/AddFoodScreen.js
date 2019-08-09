import React from 'react';
import styled from 'styled-components/native';
import {
    HEADER_BAR_TITLE,
    HEADER_BAR_STYLE,
    HEADER_BAR_TITLE_STYLE
} from '../constants/HeaderStyle';

import { View, Text, TouchableOpacity } from 'react-native'
import { Camera } from 'expo-camera'
import * as Permissions from 'expo-permissions'
import * as FileSystem from 'expo-file-system'


const AddFoodText = styled.Text`

`;

class AddFoodScreen extends React.Component {
    static navigationOptions = {
        title: HEADER_BAR_TITLE,
        headerStyle: HEADER_BAR_STYLE,
        headerTitleStyle: HEADER_BAR_TITLE_STYLE,
    };

    camera = null
    state = {
        hasCameraPermission: null,
    }

    async componentDidMount() {
        const { status } = await Permissions.askAsync(Permissions.CAMERA)
        this.setState({ hasCameraPermission: status === 'granted' })
    }

    render() {
        const { hasCameraPermission } = this.state;

        if (hasCameraPermission === null) {
            return <View />
        } else if (hasCameraPermission === false) {
            return <Text>Access to camera has been denied.</Text>
        }
        return (
            <View style={{ flex: 1 }}>
                <Camera
                    style={{ flex: 1 }}
                    type={Camera.Constants.Type.back}
                    ref={ref => {this.camera = ref}}
                >
                </Camera>
            </View>
        )
    }
}

export default AddFoodScreen;