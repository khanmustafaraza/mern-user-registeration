import { createContext, useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const navigate = useNavigate();
  const [token, setToken] = useState(localStorage.getItem("token"));
  const [user, setUserDetails] = useState({});
  const setTokenInLS = (getToken) => {
    localStorage.setItem("token", getToken);
  };
  const removeToken = () => {
    setToken("");
    localStorage.removeItem("token");
  };

  // todo verify toke n expiress and userdeatsils
  const getTokenVerify = async () => {
    const response = await fetch(
      "http://localhost:5000/api/auth/verify-token",
      {
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    // console.log(response);
    if (response.status == 401 && response.statusText == "Unauthorized") {
      removeToken();
      // navigate("/login");
    }
    const data = await response.json();
    console.log(">>token data", data);
    setUserDetails(data);
  };

  return (
    <AuthContext.Provider
      value={{
        setTokenInLS,
        setToken,
        token,
        removeToken,
        getTokenVerify,
        user,
        setUserDetails,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

const useAuth = () => {
  return useContext(AuthContext);
};

export { AuthProvider, useAuth };
