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
    <DropdownMenuDefault>
      <DropdownMenuDefaultTrigger>
        <div className="flex items-center space-x-2">
          <Image src={avatar} alt={email} width={32} height={32} className="rounded-full" />
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
  );
}

export default UserAvatar;
