import { useEffect, useState } from "react";

const useLocalStorage = (key, defaultValue) => {
  const [value, setValue] = useState(() => {
    const jsonValue = localStorage.getItem(key);
    if (jsonValue !== null) return jsonValue;
    return typeof defaultValue === "function" ? defaultValue() : defaultValue;
  });

  useEffect(() => {
    if (value === undefined) return localStorage.removeItem(key);
    localStorage.setItem(key, JSON.stringify(value));
  }, [key, value]);

  return [value, setValue];
};

export default useLocalStorage;
