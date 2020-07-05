import {useState, useEffect} from 'react';
import { ENDPOINT } from '../constatns';

export default function useCountries() {
  const [isLoading, setLoading] = useState(false);
  const [isError, setError] = useState('');
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    setLoading(true);
    setError('');
    fetch(ENDPOINT)
    .then(ds => ds.json())
    .then(res => setCountries(res))
    .finally(() => setLoading(false))
    .catch(() => setError('Something went wrong'))
  }, []);

  return [isLoading, isError, countries];
}
