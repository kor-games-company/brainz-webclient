import { useContext } from 'react';
import { LocalizationContext } from '../components/LocalizationProvider';

export default function useLocalization() {
  return useContext(LocalizationContext);
}
