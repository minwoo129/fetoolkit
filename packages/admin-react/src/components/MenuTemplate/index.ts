export * from './template.tsx';

export interface MenuItemType {
  title: string;
  href: string;
}

export type FirstDepthMenuItem =
  | {
      title: string;
      type: 'route-link';
      href: string;
    }
  | {
      title: string;
      type: 'dropdown';
      menus: MenuItemType[];
    };

export type UserProfileType = {
  name: string;
  email: string;
  url: string;
};
