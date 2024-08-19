import { DropdownMenuDefault, DropdownMenuDefaultContent, DropdownMenuDefaultGroup, DropdownMenuDefaultItem, DropdownMenuDefaultSeparator, DropdownMenuDefaultTrigger } from "@/components/molecules/dropdown-menu"

function SelectProjectMenu() {
  return (
    <>
      <DropdownMenuDefault>
        <DropdownMenuDefaultTrigger>
          <div className="ml-2 flex items-center justify-center">
            <span className="text-base hidden md:block select-none mr-1 text-gray-300 dark:text-gray-200" aria-hidden="true">/</span>
            <span className="font-semibold">Team Name</span>
          </div>
        </DropdownMenuDefaultTrigger>

        <DropdownMenuDefaultContent className="text-left">
          <DropdownMenuDefaultGroup>
            <DropdownMenuDefaultItem>
              <div className="flex flex-col align-center">
                <span>Team Name</span>
              </div>
            </DropdownMenuDefaultItem>
          </DropdownMenuDefaultGroup>

          {/* <DropdownMenuDefaultGroup>

          </DropdownMenuDefaultGroup> */}

        </DropdownMenuDefaultContent>
      </DropdownMenuDefault>
    </>
  )
}

export default SelectProjectMenu
