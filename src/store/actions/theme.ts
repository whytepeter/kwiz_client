import http from "@/lib/http";
import { useDataStore } from "../store";

export const getThemes = async () => {
    if (useDataStore.getState().themes?.length) return
    try {
        const { data } = await http("Theme", "get");

        if (data?.length) {
            useDataStore.setState({
                themes: data || [],
            });
        }
    } catch (error) {
        throw error;
    }
};
export const seedTheme = async () => {

    try {
        await http("Theme", "post", {}, {
            suffix: 'seed'
        });

    } catch (error) {
        throw error;
    }
};