import React, {useState} from "react";
import { Link } from "@reach/router";
import { signInWithGoogle } from "../firebase";
import { auth } from "../firebase";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";


const SignIn = () => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);

  const signInWithEmailAndPasswordHandler = (event,email, password) => {
    event.preventDefault();
    auth.signInWithEmailAndPassword(email, password).catch(error => {
    setError("Error signing in with password and email!");
      console.error("Error signing in with password and email", error);
    });
  };
      
  const onChangeHandler = (event) => {
    const {name, value} = event.currentTarget;
  
    if(name === 'userEmail') {
        setEmail(value);
    }
    else if(name === 'userPassword'){
      setPassword(value);
    }
  };
   

  return (
    <Card style={styles.cardContainer}>
      <Card.Header>Sign In</Card.Header>
      <Card.Body style={styles.form}>
        {error !== null && <Card.Text>{error}</Card.Text>}
        <form className="">
          <Card.Text>
            <label htmlFor="userEmail" className="block" style={styles.formLabel}>
              Email:
            </label>
            <input
              type="email"
              name="userEmail"
              value = {email}
              placeholder="email"
              id="userEmail"
              onChange = {(event) => onChangeHandler(event)}
            />
          </Card.Text>
          <Card.Text style={styles.formLabel}> 
            <label htmlFor="userPassword" >
              Password:
            </label>
            <input
              type="password"
              name="userPassword"
              value = {password}
              placeholder="Your Password"
              id="userPassword"
              onChange = {(event) => onChangeHandler(event)}
            />
          </Card.Text>
          </form>
        <div style={styles.buttonBar}>
          <Button  variant="primary"  onClick = {(event) => {signInWithEmailAndPasswordHandler(event, email, password)}}>
            Sign in
          </Button>
          <p style={styles.orLabel}>or</p>
          <Button
            variant="secondary"
            onClick={() => {
              signInWithGoogle();
            }}
          >
            Sign in with Google
          </Button>
        </div>
        <p className="text-center">
          Don't have an account?{" "}
          <Link to="signUp">
            Sign up here
          </Link>{" "}
          <br />{" "}
          <Link to="passwordReset">
            Forgot Password?
          </Link>
        </p>
      </Card.Body>
    </Card>
  );
};

const styles = {
  cardContainer: {
    width: '30rem',
    margin: '20px'
  },
  form: {
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center'
  },
  formLabel: {
    flex: 1,
    padding: '0 8px'
  },
  buttonBar: {
    padding: '5px',
  },
  orLabel: {
    padding: '0 5px',
    display: 'inline'
  }
}

export default SignIn;