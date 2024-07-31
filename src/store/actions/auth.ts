import { SignInRequest, SignUpRequest, User } from "@/types/user";
import { useDataStore } from "../store";
import http from "@/lib/http";
import Cookies from "js-cookie";

export const signUpAction = async (payload: SignUpRequest) => {
  try {
    // handle registration
    const res = await http("Register", "post", payload);
    console.log(res);
  } catch (error) {
    throw error;
  }
};

export const signInAction = async (payload: SignInRequest) => {
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
  } catch (error) {
    throw error;
  }
};

export const signOutAction = () => {
  Cookies.remove("authToken");
  useDataStore.getState().reset();
};
