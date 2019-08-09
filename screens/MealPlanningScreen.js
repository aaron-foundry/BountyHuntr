import React from 'react';
import styled from 'styled-components/native';
import {Image} from 'react-native';
import {
    HEADER_BAR_TITLE,
    HEADER_BAR_STYLE,
    HEADER_BAR_TITLE_STYLE
} from '../constants/HeaderStyle';


const SuggestedRecipesText = styled.Text`

`;

class MealPlanningScreen extends React.Component {
    static navigationOptions = {
        title: HEADER_BAR_TITLE,
        headerStyle: HEADER_BAR_STYLE,
        headerTitleStyle: HEADER_BAR_TITLE_STYLE,
    };

    render() {
        return (
            <Image source={require('../assets/images/planning_list.png')}/>
        );
    }
}

export default MealPlanningScreen;