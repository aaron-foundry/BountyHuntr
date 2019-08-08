import React from 'react';
import { Platform } from 'react-native';
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';

import TabBarIcon from '../components/TabBarIcon';
import MyFoodScreen from '../screens/MyFoodScreen';
import AddFoodScreen from '../screens/AddFoodScreen';
import MealPlanningScreen from '../screens/MealPlanningScreen';


const MyFoodStack = createStackNavigator({
  MyFood: MyFoodScreen,
});

MyFoodStack.navigationOptions = {
  tabBarLabel: 'My Food',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={
        Platform.OS === 'ios'
          ? 'ios-home'
          : 'md-home'
      }
    />
  ),
};

MyFoodStack.path = '';

const AddFoodStack = createStackNavigator({
  AddFood: AddFoodScreen,
});

AddFoodStack.navigationOptions = {
  tabBarLabel: 'Add Food',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon focused={focused} name={Platform.OS === 'ios' ? 'ios-add-circle-outline' : 'md-add-circle-outline'} />
  ),
};

AddFoodStack.path = '';

const MealPlanningStack = createStackNavigator({
  MealPlanning: MealPlanningScreen,
});

MealPlanningStack.navigationOptions = {
  tabBarLabel: 'Meal Planning',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon focused={focused} name={Platform.OS === 'ios' ? 'ios-restaurant' : 'md-restaurant'} />
  ),
};

MealPlanningStack.path = '';

const tabNavigator = createBottomTabNavigator({
  MyFoodStack,
  AddFoodStack,
  MealPlanningStack,
});

tabNavigator.path = '';

export default tabNavigator;
