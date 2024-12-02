import { BugButton } from 'app/providers/ErrorBoundary';
import { Counter } from 'entities/Counter';
import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Input } from 'shared/ui/Input/Input';

const MainPage = () => {
  const { t } = useTranslation();
  const [value, setValue] = useState('');

  const onChange = (value: string) => {
    setValue(value);
  };

  return (
    <div>
      {/* <BugButton /> */}
      {t('Главная страница')}
      <Input placeholder="Введите текст" value={value} onChange={onChange} />
    </div>
  );
};

export default MainPage;
