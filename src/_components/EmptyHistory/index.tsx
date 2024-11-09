import { MessagesEnum } from '@constants/generalConstants';
import { EmptyHistoryContainer, TypographEmpty } from './style';
import { IconMoodWrrr } from '@tabler/icons-react';

export function EmptyHistory() {
  return (
    <EmptyHistoryContainer>
      <TypographEmpty>
        {MessagesEnum.EMPTY_HISTORY}
        <IconMoodWrrr size={32} />
      </TypographEmpty>
    </EmptyHistoryContainer>
  );
}
