
export interface IMenuItem {
  name: string;
  slug?: string; // slug is optional since not all menu items have it
}

export interface ISubMenu {
  name: string;
  displayUI: boolean;
  group?: IMenuItem[]; // group is optional since not all menu items have it
}

export interface ILogoutMenu {
  name: string;
  onAction?: () => Promise<void>; // onAction is optional and asynchronous
}

export type IUserMenu = (ISubMenu | ILogoutMenu)[];

const settingsUserMenu: IUserMenu = [
  {
    name: "My Account",
    displayUI: false,
    group: [
      {
        name: "Profile",
        slug: "/profile"
      },
      {
        name: "Billing",
        slug: "/billing"
      },
      {
        name: "Subscription",
        slug: "/subscription"
      }
    ]
  },
  {
    name: "Logout",
    // onAction: async () => await serverLogout()
  }
]

export { settingsUserMenu }
