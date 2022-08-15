import PropTypes from "prop-types";
import MyButton from "./MyButton";
import { useMsal } from "@azure/msal-react";
import useStyles from "../styles/useStyles";

import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";

import { useIsAuthenticated } from "@azure/msal-react";

import { loginRequest } from '../authConfig';

const Header = ({ title, onLogin }) => {
  const classes = useStyles();
  const { instance } = useMsal();
  const isAuthenticated = useIsAuthenticated();

  const LoginHandler = () => {
  
    try {
      instance.loginPopup(loginRequest).then((response) => {
        onLogin(response.idToken);
      });
    } catch (err) {
      console.log(err);
    }
  };

  const LogoutHandler = () => {
    try {
      instance.logout();
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" className={classes.title}>
          {title}
        </Typography>
        <MyButton
          text={isAuthenticated ? "Logout" : "Login"}
          variant="text"
          onClick={isAuthenticated ? LogoutHandler : LoginHandler}
        ></MyButton>
      </Toolbar>
    </AppBar>
  );
};

Header.defaultProps = {
  title: "Sample React App",
};

Header.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Header;
