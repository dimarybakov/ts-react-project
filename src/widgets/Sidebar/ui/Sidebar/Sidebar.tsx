import { classNames } from 'shared/lib/classNames/classNames';
import { FC, memo, useMemo, useState } from 'react';
import { ThemeSwitcher } from 'shared/ui/ThemeSwitcher';
import { LangSwitcher } from 'shared/ui/LangSwitcher/LangSwitcher';
import { Button, ButtonSize, ButtonTheme } from 'shared/ui/Button/Button';
import { useSelector } from 'react-redux';
import cls from './Sidebar.module.scss';
// import { SidebarItemsList } from './model/items';
import { SidebarItem } from '../SidebarItem/SidebarItem';
import { getSidebarItems } from './model/selectors/getSidebarItems';

interface SidebarProps {
  className?: string;
}

export const Sidebar = memo((props: SidebarProps) => {
  const { className } = props;

  const [collapsed, setCollapsed] = useState(false);
  const sidebarItemList = useSelector(getSidebarItems);

  const onToggle = () => {
    setCollapsed((prev) => !prev);
  };

  const itemList = useMemo(
    () =>
      sidebarItemList.map((item) => (
        <SidebarItem key={item.path} item={item} collapsed={collapsed} />
      )),
    [collapsed, sidebarItemList],
  );

  return (
    <div
      data-testid="sidebar"
      className={classNames(cls.sidebar, { [cls.collapsed]: collapsed }, [
        className,
      ])}
    >
      <Button
        data-testid="sidebar-toggle"
        type="button"
        onClick={onToggle}
        className={cls.collapseBtn}
        theme={ButtonTheme.BACKGROUND_INVERTED}
        size={ButtonSize.L}
        square
      >
        {collapsed ? '>' : '<'}
      </Button>

      <div className={cls.items}>{itemList}</div>
      <div className={cls.switchers}>
        <ThemeSwitcher />
        <LangSwitcher short={collapsed} className={cls.lang} />
      </div>
    </div>
  );
});
