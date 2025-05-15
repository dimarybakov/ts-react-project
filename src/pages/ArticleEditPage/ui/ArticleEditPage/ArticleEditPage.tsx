import { classNames } from 'shared/lib/classNames/classNames';
import { Page } from 'widgets/Page/Page';
import { useParams } from 'react-router-dom';
import cls from './ArticleEditPage.module.scss';

interface ArticleEditPageProps {
  className?: string;
}

const ArticleEditPage = (props: ArticleEditPageProps) => {
  const { className } = props;
  const { id } = useParams<{ id: string }>();
  const isEdit = Boolean(id);
  return (
    <Page className={classNames(cls.ArticleEditPage, {}, [className])}>
      {isEdit ? `Редактирование статьи с id = ${id}` : 'Создание новой статьи'}
    </Page>
  );
};

export default ArticleEditPage;
