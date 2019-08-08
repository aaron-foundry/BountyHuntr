import React from 'react';
import styled from 'styled-components/native';


const SuggestedRecipesText = styled.Text`

`;

class MealPlanningScreen extends React.Component {
    render() {
        return (
            <SuggestedRecipesText>{`Suggested Recipes`}</SuggestedRecipesText>
        );
    }
}

export default MealPlanningScreen;