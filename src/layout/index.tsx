import * as S from './style';
import { Header } from '@components/Header/index';

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <S.MainContainer>
      <Header />
      <main>{children}</main>
    </S.MainContainer>
  );
}
