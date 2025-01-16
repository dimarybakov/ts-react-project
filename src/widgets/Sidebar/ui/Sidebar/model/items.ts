import { SVGProps, VFC } from 'react';
import { RoutePath } from 'shared/config/routeConfig/routeConfig';
import AboutIcon from 'shared/assets/icons/about-icon.svg';
import MainIcon from 'shared/assets/icons/home-icon.svg';
import PrifileIcon from 'shared/assets/icons/profile-icon.svg';

export interface SidebarItemType {
  path: string;
  text: string;
  Icon?: VFC<SVGProps<SVGSVGElement>>;
}

export const SidebarItemsList: SidebarItemType[] = [
  {
    path: RoutePath.main,
    Icon: MainIcon,
    text: 'Главная',
  },
  {
    path: RoutePath.about,
    Icon: AboutIcon,
    text: 'О сайте',
  },
  {
    path: RoutePath.profile,
    Icon: PrifileIcon,
    text: 'Профиль',
  },
];
