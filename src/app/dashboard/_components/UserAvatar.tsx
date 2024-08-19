import React from "react";
import Image from "next/image";

import {
  DropdownMenuDefault,
  DropdownMenuDefaultContent,
  DropdownMenuDefaultGroup,
  DropdownMenuDefaultItem,
  DropdownMenuDefaultLabel,
  DropdownMenuDefaultSeparator,
  DropdownMenuDefaultTrigger,
} from "@/components/molecules/dropdown-menu"

import { IUserMenu } from "@/config/userMenu";

interface IUserAvatar {
  menu: IUserMenu
  email: string
  avatar: string
  name: string
}

function UserAvatar({ menu, email, name, avatar }: IUserAvatar) {
  return (
    <div>
      <DropdownMenuDefault>
        <DropdownMenuDefaultTrigger>
          <div className="flex items-center space-x-2">
            <Image src={avatar} alt={email} width={30} height={30} className="rounded" />
          </div>
        </DropdownMenuDefaultTrigger>

        <DropdownMenuDefaultContent className="text-left">
          <DropdownMenuDefaultGroup>
            <DropdownMenuDefaultItem>
              <div className="flex flex-col align-center">
                <span>{name}</span>
                <span>{email}</span>
              </div>
            </DropdownMenuDefaultItem>
          </DropdownMenuDefaultGroup>

          <DropdownMenuDefaultGroup>
            <DropdownMenuDefaultItem>
              Account
            </DropdownMenuDefaultItem>
            <DropdownMenuDefaultItem>
              Create Team
            </DropdownMenuDefaultItem>
            <DropdownMenuDefaultSeparator />
            <DropdownMenuDefaultItem>
              Log Out
            </DropdownMenuDefaultItem>
          </DropdownMenuDefaultGroup>

        </DropdownMenuDefaultContent>
      </DropdownMenuDefault>
    </div>
  );
}

export default UserAvatar;

{/* <DropdownMenuDefaultItem>
              Account
            </DropdownMenuDefaultItem>
            <DropdownMenuDefaultSeparator />
            <DropdownMenuDefaultItem>
              Log Out
            </DropdownMenuDefaultItem> */}

{/* {menu.map((menuItem, index) => (
            <React.Fragment key={index}>
            {"group" in menuItem ? (
              <DropdownMenuDefaultItem>
              <DropdownMenuDefaultLabel>{menuItem.name}</DropdownMenuDefaultLabel>
              <DropdownMenuDefaultSeparator />
              {menuItem.group!.map((groupItem, idx) => (
                <DropdownMenuDefaultItem key={idx} onClick={groupItem.onAction}>
                {groupItem.name}
                </DropdownMenuDefaultItem>
                ))}
                <DropdownMenuDefaultSeparator />
                </DropdownMenuDefaultItem>
                ) : (
                  <DropdownMenuDefaultItem onClick={menuItem.onAction}>
                  <span>{menuItem.name}</span>
                  </DropdownMenuDefaultItem>
                  )}
                  </React.Fragment>
                  ))} */}