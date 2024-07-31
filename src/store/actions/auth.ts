import { SignInRequest, SignUpRequest, User } from "@/types/user";
import { useDataStore } from "../store";
import http from "@/lib/http";
import Cookies from "js-cookie";

export const signUpAction = async (payload: SignUpRequest): Promise<User> => {
  try {
    // handle registration
    const res = await http("Register", "post", payload);
    const { token, user } = res;

    // Set the token in cookies
    Cookies.set("authToken", token);

    useDataStore.setState({
      isLogin: true,
      user,
    });

    return user;
  } catch (error) {
    throw error;
  }
};

export const signInAction = async (payload: SignInRequest): Promise<User> => {
  try {
    // handle login
    const res = await http("Login", "post", payload);

    const { token, user } = res;

    // Set the token in cookies
    Cookies.set("authToken", token);

    useDataStore.setState({
      isLogin: true,
      user,
    });

    return user;
  } catch (error) {
    throw error;
  }
};

export const signOutAction = () => {
  Cookies.remove("authToken");
  useDataStore.getState().reset();
};
