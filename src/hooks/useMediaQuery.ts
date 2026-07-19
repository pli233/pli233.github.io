import { useEffect, useState } from "react";

function readMediaQuery(query: string): boolean {
    return typeof window !== "undefined" && window.matchMedia(query).matches;
}

export function useMediaQuery(query: string): boolean {
    const [matches, setMatches] = useState(() => readMediaQuery(query));

    useEffect(() => {
        const mediaQuery = window.matchMedia(query);
        const syncMatches = () => setMatches(mediaQuery.matches);

        syncMatches();
        mediaQuery.addEventListener("change", syncMatches);

        return () => mediaQuery.removeEventListener("change", syncMatches);
    }, [query]);

    return matches;
}
