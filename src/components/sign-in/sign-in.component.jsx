import React from "react";
import "./sign-in.styles.scss";
import FormInput from '../form-input/form-input.component';
import CustomButton from "../custom-button/custom-button.component";
import { signInWithGoogle } from "../../firebase/firebase.utils";

class SignIn extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: "",
    };
  }
  handleSubmmit = (event) => {
    event.preventDefault();

    this.setState({ email: "", password: "" });
  };

  handleChange=event=>{
        const {name,value} = event.target;

        this.setState({[name]:value});
    };

  render() {
    return (
      <div className="sign-in">
        <h2>I already have an account</h2>
        <span>Sign in with your email and password</span>
        <form onSubmit={this.handleSubmmit}>
          <FormInput type="email" label="email" name="email" value={this.state.email} required handleChange={this.handleChange}></FormInput>
          
          <FormInput type="password" label="password"  name="password" value={this.state.password} required handleChange={this.handleChange}></FormInput>
          
          <CustomButton type="submit">
          sign in
          </CustomButton>
          <CustomButton onClick={signInWithGoogle}>
          {' '}sign in with Google{' '}
          </CustomButton>
        </form>
      </div>
    );
  }
}
export default SignIn;
