import React from 'react';
import {
    Image,
    Platform,
    FlatList,
    ScrollView,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
  } from 'react-native';
import {getRecipes} from '../API.js';
import styled from 'styled-components/native';

import {
    HEADER_BAR_TITLE,
    HEADER_BAR_STYLE,
    HEADER_BAR_TITLE_STYLE
} from '../constants/HeaderStyle';

import { SwipeListView } from 'react-native-swipe-list-view';
import {classifiedResponse, recipeResponse, secondRecipeResponse} from '../stubdata.js';

const SuggestedRecipesText = styled.Text`
    font-size: 24px;
    font-weight: 500;
    padding-left: 10px;
    padding-bottom: 10px;
`;

const RecipeContainer = styled.View`
    align-items: center;
    max-width: 120px;
    padding-bottom: 30px;
    margin-right: 20px;
`;

const RecipeLabel = styled.Text`
    font-size: 18px;
`;

const RecipeSubLabel = styled.Text`
    color: gray;
    font-size: 18px;
`;

const StoredItem = styled.View`
    background-color: white;
    height: 50px;
    color: gray;
    font-size: 18px;
    flex-direction: row;
    justify-content: space-between;
`;

const StoredItemTitle = styled.Text`
    width: 180px;
    top: 8px;
    font-size: 18px;
`;


const StoredItemText = styled.Text`
    top: 8px;
    font-size: 18px;
`;

const StoredItemAmountText = styled.Text`
    width: 65px;
    top: 8px;
    font-size: 18px;
`;

const DeleteText = styled.Text`
    background-color: red;
    height: 120px;
    color: black;
    font-weight: 500;
    font-size: 18px;
    line-height: 45px;
    padding-left: 10px;
    color: #181818;

`;

const recipeLists = [recipeResponse, secondRecipeResponse]

class MyFoodScreen extends React.Component {
    state = {
        fridgeList: [],
        recipes: [],
        recipeToggle: 0,
        pressedId: null,
    }
    static navigationOptions = {
        title: HEADER_BAR_TITLE,
        headerStyle: HEADER_BAR_STYLE,
        headerTitleStyle: HEADER_BAR_TITLE_STYLE,
    };

    removeItemFromFridgeList = (id) => {
        const newFridgeList = this.state.fridgeList.filter(x => x.id !== id);
        this.setState({
            fridgeList: newFridgeList
        })
    }

    swapRecipeList = () => {
        this.setState({
            recipeToggle: this.state.recipeToggle + 1,
            recipes: recipeLists[(this.state.recipeToggle + 1) % 2]
        })
    }

    componentDidMount() {
        this.setState(
            {
                fridgeList: classifiedResponse,
                recipes: recipeResponse
            }
        );
    }

    render() {
        return (
            <View>
                <SuggestedRecipesText>{`Suggested Recipes`}</SuggestedRecipesText>
                <FlatList horizontal
                    data={this.state.recipes}
                    keyExtractor={(item, index) => item.id.toString()}
                    style={{borderBottomColor: "#ccc", borderBottomWidth: 1, marginLeft: 10, marginRight: 10}}
                    renderItem={({item}) => <RecipeContainer><TouchableOpacity onPress={() => this.setState({pressedId: this.state.pressedId !== item.id ? item.id: null})}>
                            <View><Image
                                style={{width: 120, height: 120, borderRadius: 10}}
                                source={{uri: item.image}}
                            />
                            {this.state.pressedId === item.id && 
                                <Image style={{width: 120, height: 120, borderRadius: 10, position: "absolute", zIndex:5}} source={require('../assets/images/added_ico.png')}/>
                            }
                            </View>
                            </TouchableOpacity>
                            <RecipeLabel>{item.title}{"\n"}<RecipeSubLabel>{item.usedIngredients[0].name}</RecipeSubLabel></RecipeLabel></RecipeContainer>
                        }
                    />
                    <ScrollView nestedScrollEnabled>
                        <SuggestedRecipesText>{`Fridge`}</SuggestedRecipesText>
                        <SwipeListView
                        
                        style={{height: 320}}
                        data={this.state.fridgeList}
                        keyExtractor={(item, index) => item.id.toString()}
                        renderItem={ (data, rowMap) => (
                            <TouchableOpacity onPress={() => this.swapRecipeList()}>
                                <StoredItem>
                                    <Image
                                        style={{marginLeft: 10, marginRight: 30, width: 40, height: 40, borderRadius: 10}}
                                        source={{uri: data.item.image}}
                                    />
                                    <StoredItemTitle>{data.item.cleanTitle}</StoredItemTitle>
                                    <StoredItemAmountText>{data.item.amount}</StoredItemAmountText>
                                    <StoredItemText>  2W</StoredItemText>
                                </StoredItem>
                            </TouchableOpacity>
                        )}
                        renderHiddenItem={ (data, rowMap) => (
                            <View>
                            </View>
                        )}
                        leftOpenValue={75}
                        rightOpenValue={-75}
                        swipeToClosePercent={75}
                        onRowClose={(rowKey) => this.removeItemFromFridgeList(parseInt(rowKey))}
                        onRowOpen={(rowKey) => this.removeItemFromFridgeList(parseInt(rowKey))}
                    />
                    </ScrollView>
            </View>
        );
    }
}

export default MyFoodScreen;