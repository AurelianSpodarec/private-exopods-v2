import React from "react";
import Image from "next/image";

import {
  DropdownMenuDefault,
  DropdownMenuDefaultContent,
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
}

function UserAvatar({ menu, email, avatar }: IUserAvatar) {
  return (
    <div>
      <DropdownMenuDefault>
        <DropdownMenuDefaultTrigger>
          <div className="flex items-center space-x-2">
            <span className="text-white">{email}</span>
            <Image src={avatar} alt={email} width={30} height={30} className="rounded" />
          </div>
        </DropdownMenuDefaultTrigger>

        <DropdownMenuDefaultContent>
          {menu.map((menuItem, index) => (
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
          ))}
        </DropdownMenuDefaultContent>
      </DropdownMenuDefault>
    </div>
  );
}

export default UserAvatar;