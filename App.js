import React from 'react';
import {ActivityIndicator, View, Text,StyleSheet } from 'react-native';
import firebase from 'react-native-firebase';

// import LoginForm from './LoginForm';
// import {Input } from './input';
// import {Button} from './button';
import { StackNavigator} from 'react-navigation';
import Loading from './Loading'
import SignUp from './SignUp'
import Login from './Login'
import Main from './Main'

const App = StackNavigator(
  {
    Loading,
    SignUp,
    Login,
    Main
  },
  {
    initialRouteName: 'Loading'
  }
)


export default App
// export default class App extends React.Component {
//   state = {
//     email:'',
//     password:'',
//     authenticating:false
//   }
//   constructor() {
//     super();
//     this.unsubscriber = null;
//     this.state = {
//       user: null,
//     };
//   }
//
//   componentWillMount(){
//     const firebaseConfig = {
//       apiKey : 'AIzaSyB8G-6VZsUMUxxJfdShW1rASUYqv_O-Zqo',
//       authDomain :'wahsahalat-e0340.firebaseapp.com'
//     }
//
//     firebase.initializeApp(firebaseConfig);
//   }
//
//   onPressSignIn(){
//     firebase
//      .auth()
//      .createUserWithEmailAndPassword(this.state.email, this.state.password)
//      .then(() => this.props.navigation.navigate('Main'))
//      .catch(error => this.setState({ errorMessage: error.message }))
//   }
//   renderCurrentState(){
//       if(this.state.authenticating){
//         return (
//           <View>
//             <ActivityIndicator size='large'/>
//
//           </View>
//         )
//       }
//
//       return(
//         <View style={styles.form}>
//           <Input
//             placeholder="Votre email SVP "
//             label="Email"
//             onChangeText={email=>this.setState({email})}
//             value={this.state.email}
//           />
//           <Input
//             placeholder="Votre mot de passe "
//             label="Password"
//             secureTextEntry
//             onChangeText={password=>this.setState({password})}
//             value={this.state.password}
//           />
//           <Button onPress={()=>this.onPressSignIn()}>S'inscrire</Button>
//         </View>
//       )
//   }
//
//   componentDidMount() {
//     this.unsubscriber = firebase.auth().onAuthStateChanged((user) => {
//       this.setState({ user });
//     });
//   }
//   //
//   // componentWillUnmount() {
//   //   if (this.unsubscriber) {
//   //     this.unsubscriber();
//   //   }
//   // }
//
//   render() {
//
//     // if (!this.state.user) {
//     //   return <LoginForm />;
//     // }
//     return (
//       <View style={styles.form}>
//         {this.renderCurrentState()}
//       </View>
//     );
//   }
// }
//
// const styles = StyleSheet.create({
//   container:{
//     flex:1,
//     alignItems: 'center',
//     justifyContent: 'center',
//     flexDirection: 'row'
//   },
//   form:{
//     flex: 1
//   }
// });
