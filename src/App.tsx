import { ThemeProvider } from 'styled-components';
import { GlobalStyle } from '@styles/global';
import { defaultTheme } from '@styles/themes/default';
import './App.css';
import { RouteConfig } from './routes/config';

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle />
      <RouteConfig />
    </ThemeProvider>
  );
}
