import "./header.styles.css";
import React, { useEffect } from "react";

import { CustomButton } from "components/CustomButton/CustomButton";
import { Facebook } from "components/Icons/Facebook";
import { GoogleIcon } from "components/Icons/GoogleIcon";

import { signInWithFacebook, signInWithGmail } from "app/firebase/auth";
import { useToast } from "context/ToastContext/ToastContext";
import { getUserFromLocalStorage, saveUserToLocalStorage } from "utils/user";

import { UserType } from "api/user/user.types";

export function Header() {
  const [showSignInDropDown, setShowSignInDropDown] = React.useState(false);
  const [user, setUser] = React.useState<UserType | null>(null);
  const { toast } = useToast();

  useEffect(() => {
    const userFromLocalStorage = getUserFromLocalStorage();

    if (userFromLocalStorage) {
      setUser(userFromLocalStorage);
    }
  }, []);
  const handleDropDownClick = () => {
    setShowSignInDropDown(prevState => !prevState);
  };

  const handleGoogleSignIn = async () => {
    try {
      const credentials = await signInWithGmail();
      const credentialsUser: UserType = {
        email: credentials.user.email,
      };

      saveUserToLocalStorage(credentialsUser);
      setUser(credentialsUser);
    } catch (error) {
      toast("Error signing in with Google", "error");
    }
  };

  const handleFacebookSignIn = async () => {
    try {
      const result = await signInWithFacebook();
      const credentialsUser: UserType = {
        email: result.user.email,
      };

      saveUserToLocalStorage(credentialsUser);
      setUser(credentialsUser);
    } catch (error) {
      toast("Error signing in with Facebook", "error");
    }
  };
  const handleSignOut = () => {
    localStorage.removeItem("user");
    setUser(null);
  };

  return (
    <header className="header">
      <h1>
        <span className="header__font-normal">Weather</span> Forecast
      </h1>
      <div className="header__user-button-container">
        <button
          className="header__user-button"
          onClick={handleDropDownClick}
          type="button"
        >
          <img
            alt="User"
            height={72}
            src="/assets/header/user.png"
            width={72}
          />
        </button>
        <div
          className={`header__drop-down-content ${showSignInDropDown ? "show" : ""}`}
        >
          {user ? (
            <>
              <span>
                Hi, <strong>{user.email}</strong>
              </span>
              <CustomButton
                className="header__sign-out-button"
                onClick={handleSignOut}
                type="button"
                variant="outlined"
              >
                Sign out
              </CustomButton>
            </>
          ) : (
            <>
              <strong>Sign in by:</strong>
              <div className="header__login-method-container">
                <button onClick={handleGoogleSignIn} type="button">
                  <GoogleIcon />
                </button>
                <button onClick={handleFacebookSignIn} type="button">
                  <Facebook />
                </button>
              </div>
            </>
          )}
        </div>
      </div>
    </header>
  );
}
