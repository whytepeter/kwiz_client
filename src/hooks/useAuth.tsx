import {
  signInAction,
  signUpAction,
  signOutAction,
} from "@/store/actions/auth";
import { SignInRequest, SignUpRequest } from "@/types/user";
import { useRouter } from "next/navigation";

export default function useAuth() {
  const router = useRouter();

  const signIn = async (user: SignInRequest) => {
    try {
      await signInAction(user);

      router.push("/dashboard");
    } catch (error) {
      console.log("signin: ", error);
      throw error;
    }
  };

  const signUp = async (user: SignUpRequest) => {
    return await signUpAction(user);
  };

  const logout = () => {
    signOutAction();
    router.replace("/auth/login");
  };

  return { signIn, signUp, logout };
}
