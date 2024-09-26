import { useContext } from 'react';
import { LocalizationContext } from '../_components/LocalizationProvider';

export default function useLocalization() {
  return useContext(LocalizationContext);
}
