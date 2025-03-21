import { classNames } from 'shared/lib/classNames/classNames';
import { Select, SelectOption } from 'shared/ui/Select/Select';
import { useTranslation } from 'react-i18next';
import { useCallback, useMemo } from 'react';
import { ArticleSortField } from 'entities/Article/model/types/article';
import { SortOrder } from 'shared/types';
import cls from './ArticleSortSelector.module.scss';

interface ArticleSortSelectorProps {
  className?: string;
  sort: ArticleSortField;
  order: SortOrder;
  onChangeOrder: (newOrder: SortOrder) => void;
  onChangeSort: (newSort: ArticleSortField) => void;
}

export const ArticleSortSelector = (props: ArticleSortSelectorProps) => {
  const { className, sort, order, onChangeOrder, onChangeSort } = props;
  const { t } = useTranslation('article');

  const orderOptions = useMemo<SelectOption[]>(
    () => [
      { value: 'asc', content: t('возрастанию') },
      {
        value: 'desc',
        content: t('убыванию'),
      },
    ],
    [t],
  );

  const sortFieldOptions = useMemo<SelectOption[]>(
    () => [
      { value: ArticleSortField.CREATED, content: t('дате создания') },
      { value: ArticleSortField.TITLE, content: t('названию') },
      { value: ArticleSortField.VIEWS, content: t('просмотрам') },
    ],
    [t],
  );

  // промежуточный callback для кастования типа параметра
  const changeSortHandler = useCallback(
    (newSort: string) => {
      onChangeSort(newSort as ArticleSortField);
    },
    [onChangeSort],
  );

  const changeOrderHandler = useCallback(
    (newOrder: string) => {
      onChangeOrder(newOrder as SortOrder);
    },
    [onChangeOrder],
  );

  return (
    <div className={classNames(cls.articleSortSelector, {}, [className])}>
      <Select
        options={sortFieldOptions}
        label={t('Сортировать по')}
        value={sort}
        onChange={changeSortHandler}
      />
      <Select
        className={cls.order}
        options={orderOptions}
        label={t('по')}
        value={order}
        onChange={changeOrderHandler}
      />
    </div>
  );
};
