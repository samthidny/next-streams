import React, { useEffect, useState } from 'react'

export default function useDebounce(value: String, delay = 1000) {

    const [debouncedValue, setDebouncedValue] = useState(value)

    useEffect(() => {

        const timeout = setTimeout(() => {
            setDebouncedValue(value);
        }, delay);

        return () => {
            clearTimeout(timeout);
        }

    }, [value])

    return debouncedValue;

}
