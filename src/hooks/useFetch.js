//our own hooks must start with: use, followed by whatever in camelcase.

import { useEffect, useState } from "react";
export const useFetch = (url) => {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("")

    useEffect(() => {
        const fetchData = async () => {

            try {
                setLoading(true);
                const response = await fetch(url);
                if (response.ok == false) {
                    throw new Error(response.statusText)
                }

                const result = await response.json();
                setLoading(false);
                setData(result);
                setError("");
            } catch (error) {
                setLoading(false)
                setError(error.message)
            }
        }

        fetchData();

    }, [url]);

    return { data, loading, error }
}
