import React from "react";
import { Image, View, Text, StyleSheet, TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";

const FeedItem = props => {
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={props.source} />
      <View style={styles.info}>
        <View style={{ flexDirection: "row" }}>
          <Text style={[styles.user, { fontWeight: "bold" }]}>Shared By:</Text>
          <Text style={styles.user}>{props.user}</Text>
        </View>
        <TouchableOpacity onPress={() => props.onRemovePhoto(props.index)}>
          <Icon name="remove" color="red" size={25} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F5FCFF",
    marginBottom: 10
  },
  user: {
    fontSize: 15,
    textAlign: "center",
    margin: 5
  },
  image: {
    width: 300,
    height: 300,
    marginTop: 5,
    borderWidth: 1,
    borderRadius: 5
  },
  info: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "stretch"
  }
});

export default FeedItem;
