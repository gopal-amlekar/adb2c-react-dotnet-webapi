import PropTypes from "prop-types";
import MyButton from "./MyButton";
import { useMsal } from "@azure/msal-react";
import useStyles from "../styles/useStyles";

import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";

import { useIsAuthenticated } from "@azure/msal-react";

const Header = ({ title, onLogin }) => {
  const classes = useStyles();
  const { instance, accounts, inProgress } = useMsal();
  const isAuthenticated = useIsAuthenticated();

  const LoginHandler = () => {
    console.log("Trying to login via popup");
    try {
      const loginResponse = instance.loginPopup().then((response) => {
        console.log(response);
        onLogin(response.idToken);
      });

      console.log(loginResponse);
    } catch (err) {
      console.log(err);
    }
  };

  const LogoutHandler = () => {
    try {
      console.log("Trying to logout");
      const logoutResponse = instance.logout();
      console.log(logoutResponse);
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
