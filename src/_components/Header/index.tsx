import { NavLink } from 'react-router-dom';
import { HeaderContainer } from './style';
import Logo from '@assets/logo.svg';
import { RoutesEnum } from 'src/routes/routes';
import { IconStack2, IconClock, IconScriptX } from '@tabler/icons-react';
import { MessagesEnum } from '@constants/generalConstants';
import { useSessionContext } from '@contexts/SessionContext';

export function Header() {
  const { clearSessions } = useSessionContext();
  const handleDeleteStorage = (): void => {
    const confirmDelete = window.confirm(MessagesEnum.CONFIRM_DELETE_HISTORY);
    if (confirmDelete) {
      const datalist = document.getElementById('task-suggestions');
      if (datalist) {
        datalist.innerHTML = '';
      }
      clearSessions();
    }
  };
  return (
    <HeaderContainer>
      <NavLink to={RoutesEnum.Home} title="Home">
        <img src={Logo} alt="Logo do Tempodoro" />
      </NavLink>
      <nav>
        <NavLink to={RoutesEnum.Home} title="Timer">
          <IconClock size={32} />
        </NavLink>
        <NavLink to={RoutesEnum.History} title="Historico">
          <IconStack2 size={32} />
        </NavLink>
        <a onClick={handleDeleteStorage}>
          <IconScriptX size={32} />
        </a>
      </nav>
    </HeaderContainer>
  );
}
