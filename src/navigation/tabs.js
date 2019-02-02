import React from "react";
import { createBottomTabNavigator, createAppContainer } from "react-navigation";
import Icon from "react-native-vector-icons/Entypo";
import Auth from "../screens/Auth";
import Feed from "../screens/Feed";

const AppRoutes = createBottomTabNavigator(
  {
    Auth: {
      screen: Auth,
      navigationOptions: {
        tabBarLabel: "Authenticate",
        showIcon: true,
        tabBarIcon: ({ tintColor }) => <Icon name="login" size={25} />
      }
    },
    Feed: {
      screen: Feed,
      navigationOptions: {
        tabBarLabel: "Newsfeed",
        showIcon: true,
        tabBarIcon: ({ tintColor }) => <Icon name="list" size={25} />
      }
    }
  },
  { headerMode: "none" }
);

const AppContainer = createAppContainer(AppRoutes);

export default AppContainer;
