// Este sería un hook personalizado, la idea es poder reutilizar la llamada
// las veces qe queramos, para ello tenemos que hacerlo dinámico y genérico.

import React, { useState, useEffect, useCallback } from "react";

export const useFetch = (url) => {
  const [data, setData] = useState();

  console.log("useFetch");
  const fetchData = useCallback(async () => {
    const res = await fetch(url);
    const data = await res.json();
    setData(data);
  }, []);

  useEffect(() => {
    console.log("useEffect");
    fetchData();
  }, []);

  //   return { data:data };
  return { data };
};
