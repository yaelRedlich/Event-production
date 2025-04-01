
import axios from "axios";
import { useCallback, useEffect, useState } from "react";

type HttpMethod = "get" | "post" | "put" | "delete";

const serverInstance = axios.create({
    baseURL: "http://localhost:3000",
});

export function useHttp<T>(defaultUrl: string, defaultMethod: HttpMethod = "get") {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");
    const [data, setData] = useState<T>();

    const request = useCallback(
        async (urlOverride?: string, methodOverride?: HttpMethod, body?: any) => {
            setLoading(true);
            setError("");
            try {
                const result = await serverInstance[methodOverride || defaultMethod]<T>(
                    urlOverride || defaultUrl,
                    body
                );
                setData(result.data as T);
                return result.data as T; 

            } catch (error) {
                setError("Error occurred, try again later");
                console.error("Error while fetching:", error);
                return undefined; 

            } finally {
                setLoading(false);
            }
        },
        [defaultUrl, defaultMethod]
    );

    useEffect(() => {
        if (defaultMethod === "get") {
            request();
        }
    }, [request]);

    return { loading, error, data, request };
}
