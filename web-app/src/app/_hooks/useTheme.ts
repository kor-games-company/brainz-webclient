import { useContext } from 'react';
import { ThemeContext } from '../_components/ThemeProvider';

export default function useTheme() {
  return useContext(ThemeContext);
}
