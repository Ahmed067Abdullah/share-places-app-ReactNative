import React, { Component } from "react";
import ImagePicker from "react-native-image-picker";
import { connect } from "react-redux";
import {
  StyleSheet,
  Text,
  View,
  Button,
  Image,
  ScrollView
} from "react-native";

import FeedItem from "../components/FeedItem";
import { addPhoto, removePhoto } from "../store/actions/feed";

class Feed extends Component {
  onAddPost = () => {
    const options = {
      title: "Select Image",
      storageOptions: {
        skipBackup: true,
        path: "images"
      }
    };

    const response = response => {
      console.log("Response = ", response);

      if (response.didCancel) {
        console.log("User cancelled image picker");
      } else if (response.error) {
        console.log("ImagePicker Error: ", response.error);
      } else if (response.customButton) {
        console.log("User tapped custom button: ", response.customButton);
      } else {
        const source = { uri: response.uri };

        this.props.onAddPhoto({
          source,
          user: this.props.auth.username
        });
      }
    };
    ImagePicker.showImagePicker(options, response);
  };
  render() {
    const { isAuthenticated } = this.props.auth;
    const { photos } = this.props.feed;
    console.log(photos);
    const images = photos.map((photo, index) => (
      <FeedItem
        key={index}
        index={index}
        source={photo.source}
        user={photo.user}
        onRemovePhoto={this.props.onRemovePhoto}
      />
    ));
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>Newsfeed</Text>
        <Button
          style={styles.button}
          title="Add Post"
          onPress={this.onAddPost}
          disabled={!isAuthenticated}
        />
        {isAuthenticated ? null : (
          <Text style={styles.msg}>Please Login to share photos</Text>
        )}
        <ScrollView style={{ width: 300, height: 300, marginTop: 5 }}>
          {images}
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F5FCFF"
  },
  welcome: {
    fontSize: 25,
    textAlign: "center",
    margin: 10,
    color: "green"
  },
  msg: {
    fontSize: 15,
    textAlign: "center",
    margin: 5
  },
  button: {
    marginTop: 5,
    marginBottom: 5
  },
  image: {
    width: 300,
    height: 300,
    marginTop: 5,
    borderWidth: 1
  }
});

const mapStateToProps = state => {
  return {
    auth: state.auth,
    feed: state.feed
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onAddPhoto: photoObj => dispatch(addPhoto(photoObj)),
    onRemovePhoto: index => dispatch(removePhoto(index))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Feed);
