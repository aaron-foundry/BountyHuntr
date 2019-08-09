import React from 'react';
import styled from 'styled-components/native';
import {
    HEADER_BAR_TITLE,
    HEADER_BAR_STYLE,
    HEADER_BAR_TITLE_STYLE
} from '../constants/HeaderStyle';


const AddFoodText = styled.Text`

`;

class AddFoodScreen extends React.Component {
    static navigationOptions = {
        title: HEADER_BAR_TITLE,
        headerStyle: HEADER_BAR_STYLE,
        headerTitleStyle: HEADER_BAR_TITLE_STYLE,
    };

    render() {
        return (
            <AddFoodText>{`Add Food`}</AddFoodText>
        );
    }
}

export default AddFoodScreen;