import React, { Component } from "react";
import { StyleSheet, Text, View, Button, TextInput } from "react-native";
import { connect } from "react-redux";

import { login, logout } from "../store/actions/auth";

class Auth extends Component {
  state = {
    username: "",
    password: "",
    error: ""
  };

  logoutHandler = () => {
    this.props.onLogout();
  };
  loginHandler = () => {
    let error = "";
    const { username, password } = this.state;
    if (username.trim() === "" || password.trim() === "") {
      error = "Username and Password are required";
    } else if (username.trim().length < 2) {
      error = "Username must be longer than 2 characters";
    } else if (password.trim().length < 5) {
      error = "Password must be longer than 5 characters";
    } else {
      this.props.onLogin(username.trim());
      error = "";
    }
    if (error === "") {
      this.setState(
        {
          username: "",
          password: "",
          error: ""
        },
        () => {
          this.props.navigation.navigate("Feed");
        }
      );
    }
    this.setState({ error });
  };
  render() {
    let authContent = (
      <Button title="Logout" color="red" onPress={this.logoutHandler} />
    );
    if (!this.props.auth.isAuthenticated) {
      authContent = (
        <View style={{ alignItems: "center" }}>
          <Text style={styles.heading}>Share Photos App</Text>
          <Text style={styles.subheading}>Please Sign in to Continue</Text>
          <TextInput
            placeholder="Username"
            style={styles.input}
            onChangeText={username => this.setState({ username })}
            value={this.state.username}
          />
          <TextInput
            placeholder="Password"
            style={styles.input}
            onChangeText={password => this.setState({ password })}
            value={this.state.password}
            secureTextEntry={true}
          />
          {this.state.error ? (
            <Text style={styles.error}>{this.state.error}</Text>
          ) : null}
          <Button title="Sign in" onPress={this.loginHandler} />
        </View>
      );
    }
    return <View style={styles.container}>{authContent}</View>;
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F5FCFF"
  },
  heading: {
    fontSize: 30,
    fontWeight: "bold",
    textAlign: "center",
    color: "green"
  },
  subheading: {
    fontSize: 20,
    textAlign: "center",
    marginBottom: 10
  },
  error: {
    fontSize: 20,
    textAlign: "center",
    marginBottom: 10,
    color: "red"
  },
  input: {
    height: 40,
    width: 300,
    borderRadius: 10,
    marginBottom: 10,
    borderColor: "gray",
    borderWidth: 1
  }
});

const mapStateToProps = state => {
  return {
    auth: state.auth
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onLogin: username => dispatch(login(username)),
    onLogout: () => dispatch(logout())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Auth);
