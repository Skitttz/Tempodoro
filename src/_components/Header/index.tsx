import { NavLink } from 'react-router-dom';
import { HeaderContainer } from './style';
import Logo from '@assets/logo.svg';
import { RoutesEnum } from 'src/routes/routes';
import { IconStack2, IconClock, IconScriptX } from '@tabler/icons-react';
import { deleteLocalStorage } from '@utils/deleteLocalStorage';
import {
  MessagesEnum,
  TempodoroStorageKeysEnum,
} from '@constants/generalConstants';

export function Header() {
  const handleDeleteStorage = (): void => {
    const confirmDelete = window.confirm(MessagesEnum.CONFIRM_DELETE_HISTORY);
    if (confirmDelete) {
      const datalist = document.getElementById('task-suggestions');
      if (datalist) {
        datalist.innerHTML = '';
      }
      deleteLocalStorage(TempodoroStorageKeysEnum.SESSION_STATE);
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
