import { MainContainer } from './style';
import { Header } from '@components/Header/index';

export function DefaultLayout({ children }: { children: React.ReactNode }) {
  return (
    <MainContainer>
      <Header />
      {children}
    </MainContainer>
  );
}
