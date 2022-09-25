import { useEffect, useState } from "react";

function useDebounce(search) {
    const [devalue, setDevalue] = useState(search);
    useEffect(() => {
        const time = setTimeout(() => {
            setDevalue(search);
        }, 500);
        return () => {
            clearTimeout(time);
        };
    }, [search]);
    return devalue;
}

export default useDebounce;
