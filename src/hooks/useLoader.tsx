import { useDataStore } from "@/store/store";
import { useEffect } from "react";

export default function useLoader() {
  const setLoader = (loading: boolean, text?: string) => {
    useDataStore.setState({
      loading,
      loadingText: text || "",
    });
  };

  useEffect(() => {
    setLoader(false, "Loading...");
  }, []);

  return {
    setLoader,
  };
}
