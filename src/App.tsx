import { ThemeProvider } from 'styled-components';
import { GlobalStyle } from '@styles/global';
import { defaultTheme } from '@styles/themes/default';
import './App.css';
import { RouteConfig } from './routes/config';
import { BrowserRouter } from 'react-router-dom';
import { DefaultLayout } from './layout';

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle />
      <BrowserRouter>
        <DefaultLayout>
          <RouteConfig />
        </DefaultLayout>
      </BrowserRouter>
    </ThemeProvider>
  );
}
