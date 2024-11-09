import { ThemeProvider } from 'styled-components';
import { GlobalStyle } from '@styles/global';
import { defaultTheme } from '@styles/themes/default';
import './App.css';
import { RouteConfig } from './routes/config';
import { BrowserRouter } from 'react-router-dom';
import { DefaultLayout } from './layout';
import { SessionProvider } from '@providers/SessionProvider';

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle />
      <BrowserRouter>
        <SessionProvider>
          <DefaultLayout>
            <RouteConfig />
          </DefaultLayout>
        </SessionProvider>
      </BrowserRouter>
    </ThemeProvider>
  );
}
