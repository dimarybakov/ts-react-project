import { classNames } from 'shared/lib/classNames/classNames';
import { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { Page } from 'shared/ui/Page/Page';
import cls from './NotFoundPage.module.scss';

interface NotFoundPageProps {
  className?: string;
}

export const NotFoundPage: FC<NotFoundPageProps> = (props) => {
  const { t } = useTranslation();
  const { className } = props;

  return (
    <Page className={classNames(cls.notFoundPage, {}, [className])}>
      {t('Страница не найдена')}
    </Page>
  );
};
