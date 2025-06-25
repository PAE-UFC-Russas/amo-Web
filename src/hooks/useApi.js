import { useState, useCallback } from "react";
import api from "../service/api";

// Hook personalizado para requisições à API
export const useApi = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const makeRequest = useCallback(async (requestConfig) => {
    setLoading(true);
    setError(null);

    try {
      const response = await api(requestConfig);
      return response.data;
    } catch (err) {
      setError(err.response?.data || err.message);
      throw err;
    } finally {
      setLoading(false);
    }
  }, []);

  // Métodos de conveniência para diferentes tipos de requisição
  const get = useCallback(
    (url, config = {}) => {
      return makeRequest({ method: "GET", url, ...config });
    },
    [makeRequest]
  );

  const post = useCallback(
    (url, data, config = {}) => {
      return makeRequest({ method: "POST", url, data, ...config });
    },
    [makeRequest]
  );

  const put = useCallback(
    (url, data, config = {}) => {
      return makeRequest({ method: "PUT", url, data, ...config });
    },
    [makeRequest]
  );

  const patch = useCallback(
    (url, data, config = {}) => {
      return makeRequest({ method: "PATCH", url, data, ...config });
    },
    [makeRequest]
  );

  const del = useCallback(
    (url, config = {}) => {
      return makeRequest({ method: "DELETE", url, ...config });
    },
    [makeRequest]
  );

  return {
    loading,
    error,
    get,
    post,
    put,
    patch,
    delete: del,
    makeRequest,
  };
};

export default useApi;
