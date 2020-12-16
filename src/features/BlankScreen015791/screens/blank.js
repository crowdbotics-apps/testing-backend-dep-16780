import React, {Component} from 'react';
import {connect} from 'react-redux';
import {rest_auth_login_create} from '../../../store/actions.js';
import {SlideMenuIcon} from '../../../navigator/slideMenuIcon';
import {
  View,
  Image,
  ImageBackground,
  TouchableOpacity,
  Text,
  TextInput,
  StyleSheet,
} from 'react-native';

// Enter screen to navigate to
const HOME_SCREEN = 'BlankScreen115792';

const TextInputField = props => (
  <View>
    <Text style={styles.label}>{props.label}</Text>
    <TextInput
      autoCapitalize="none"
      style={styles.textInput}
      underlineColorAndroid={'transparent'}
      {...props}
    />
    {!!props.errorMessage && (
      <Text style={styles.error}>{props.errorMessage}</Text>
    )}
  </View>
);

class Blank extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      emailError: '',
      passwordError: '',
      loading: false,
    };
  }

  static navigationOptions = ({navigation}) => {
    return {
      headerLeft: <SlideMenuIcon navigationProps={navigation} />,
    };
  };

  componentDidUpdate(prevProps) {
    if (!this.state.loading) return;
    if (this.props.token) {
      console.log('Navigate');
      this.props.navigation.navigate(HOME_SCREEN);
    }
  }

  onValueChange = (value, type) => {
    switch (type) {
      case 'email':
        const emailRegex = '^[^\s@]+@[^\s@]+.[^\s@]+';
        const emailError = !value.match(emailRegex)
          ? 'Please enter a valid email address.'
          : '';
        this.setState({emailError: emailError});
        this.setState({email: value});
        this.setState({disabled: Boolean(emailError)});
        break;
      case 'password':
        const passwordError =
          !value || !value.length ? 'Please enter a valid password.' : '';
        this.setState({passwordError: passwordError});
        this.setState({password: value});
        this.setState({disabled: Boolean(passwordError)});
        break;
    }
  };

  onLogin = () => {
    const {email, password, passwordError, emailError} = this.state;
    if (!(passwordError && emailError)) {
      this.setState({loading: true});
      this.props.login(email, password);
    }
  };

  render = () => (
    <View style={styles.container}>
      <View style={styles.backgroundImage}>
        <ImageBackground
          source={{
            uri:
              'https://crowdbotics-slack-dev.s3.amazonaws.com/media/project_component_resources/halfbg.png',
          }}
          style={{flex: 1, justifyContent: 'center', resizeMode: 'cover'}}>
          <Image
            source={{
              uri:
                'https://crowdbotics-slack-dev.s3.amazonaws.com/media/project_component_resources/cb-icon.png',
            }}
            style={styles.logo}
          />
        </ImageBackground>
      </View>
      <View style={styles.inputContainer}>
        <Text style={{fontSize: 30, textAlign: 'center', color: '#91c0c9'}}>
          Login
        </Text>
        <TextInputField
          keyboardType="email-address"
          label="Email address"
          placeholder="Email Address"
          onChangeText={email => this.onValueChange(email, 'email')}
          value={this.state.email}
          errorMessage={this.state.emailError}
        />
        <TextInputField
          label="Password"
          placeholder="Password"
          secureTextEntry={true}
          onChangeText={password => this.onValueChange(password, 'password')}
          value={this.state.password}
          errorMessage={this.state.passwordError}
        />
        <TouchableOpacity
          onPress={() => this.onLogin()}
          style={styles.button}
          disabled={this.state.loading}>
          <Text>Login</Text>
        </TouchableOpacity>
        {this.props.error && (
          <Text style={styles.error}>{this.props.error.message}</Text>
        )}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  button: {
    backgroundColor: '#b2e3ed',
    borderRadius: 10,
    borderColor: '#000000',
    justifyContent: 'center',
    marginTop: 10,
    marginBottom: 10,
    height: 44,
    alignItems: 'center',
  },
  textInput: {
    borderColor: '#CCCCCC',
    width: '100%',
    borderWidth: 0.5,
    borderRadius: 5,
    fontSize: 18,
    marginVertical: 10,
    paddingHorizontal: 15,
    paddingVertical: 7,
    color: '#000000',
  },
  label: {color: '#6A6A6A', fontSize: 12, marginTop: 5},
  error: {color: '#FF0000', fontSize: 9},
  inputContainer: {
    paddingHorizontal: 30,
    marginTop: -80,
    marginBottom: 20,
    marginHorizontal: 20,
    backgroundColor: '#FFFFFF',
    justifyContent: 'center',
    alignItems: 'stretch',
    flex: 1,
    borderRadius: 10,
    elevation: 3,
    shadowOffset: {height: 10, width: 10},
    shadowOpacity: 0.3,
    shadowColor: '#CCCCCC',
  },
  backgroundImage: {
    flex: 1,
    width: '100%',
  },
  logo: {
    width: 155,
    height: 155,
    alignSelf: 'center',
    resizeMode: 'contain',
  },
});

function mapStateToProps(state) {
  // WILL REMOVE COMMENTS AND CONSOLE WHEN WORKING
  console.log('State Login');
  console.log(JSON.stringify(state.apiReducer));
  // whatever is the name of the connector for this (testingBackendDeployAPI or something else)
  const loginResponse = state.apiReducer.testingBackendDeployAPI?.find(
    elem => elem?.data?.key,
  ); // token exist
  const error = state.apiReducer.testingBackendDeployAPI?.find(
    elem => elem?.message
  ); // error message exist

  console.log(loginResponse?.data?.key);
  return {
    token: loginResponse?.data?.key,
    error: error, // will figure out how to handle after codegen
  };
}

const mapDispatchToProps = dispatch => {
  return {
    login: (email, password) =>
      dispatch(rest_auth_login_create({email, password})), // whatever is the action here
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Blank);
