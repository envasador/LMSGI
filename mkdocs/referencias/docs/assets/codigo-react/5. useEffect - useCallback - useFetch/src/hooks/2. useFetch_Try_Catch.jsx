// Este sería un hook personalizado, la idea es poder reutilizar la llamada
// las veces qe queramos, para ello tenemos que hacerlo dinámico y genérico.

import React, { useState, useEffect, useCallback } from "react";

export const useFetch = (url) => {
  const [data, setData] = useState();
  // const [loading, setLoading] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  console.log("useFetch");
  const fetchData = useCallback(async () => {
    setLoading(true);
    try {
      const res = await fetch(url);
      if (!res.ok) throw Error("Error al consumir la API");
      const data = await res.json();
      setData(data);
    } catch (error) {
      console.log(error);
      setError(error.message);
      setData([]); // para que no nos destruya la App y renderice el resto de cosas.
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    console.log("useEffect");
    fetchData();
  }, []);

  //   return { data:data };
  return { data, loading, error };
};
