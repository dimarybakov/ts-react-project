import { classNames } from 'shared/lib/classNames/classNames';
import React, { memo } from 'react';
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink/AppLink';
import { RoutePath } from 'shared/config/routeConfig/routeConfig';
import MainIcon from 'shared/assets/icons/home-icon.svg';
import { useTranslation } from 'react-i18next';
import cls from './SidebarItem.module.scss';
import { SidebarItemType } from '../Sidebar/model/items';

interface SidebarItemProps {
  item: SidebarItemType;
  collapsed: boolean;
}

export const SidebarItem: React.FC<SidebarItemProps> = memo(
  ({ item, collapsed }: SidebarItemProps) => {
    const { t } = useTranslation();

    return (
      <AppLink
        theme={AppLinkTheme.SECONDARY}
        to={item.path}
        className={classNames(cls.item, { [cls.collapsed]: collapsed })}
      >
        <item.Icon className={cls.icon} />
        <span className={cls.link}>{t(item.text)}</span>
      </AppLink>
    );
  },
);
