import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"


// Reuse the dropdown UI
export function DropdownMenuDefault({ children }: { children: React.ReactNode }) {
  return (
    <DropdownMenu>
      {children}
    </DropdownMenu>
  )
}

export function DropdownMenuDefaultTrigger({ children }: { children: React.ReactNode }) {
  return (
    <DropdownMenuTrigger>{children}</DropdownMenuTrigger>
  )
}

export function DropdownMenuDefaultContent({ children, className }: { children: React.ReactNode, className: string }) {
  return (
    <DropdownMenuContent className={`z-[9999px] bg-white rounded-dashboard-sidebar-dropdown-menu flex flex-col ${className}`}>
      {children}
    </DropdownMenuContent>
  )
}

export function DropdownMenuDefaultSeparator() {
  return (
    <DropdownMenuSeparator />
  )
}

export function DropdownMenuDefaultGroup({ children }: { children: React.ReactNode }) {
  return (
    <DropdownMenuGroup>{children}</DropdownMenuGroup>
  )
}

export function DropdownMenuDefaultLabel({ children }: { children: React.ReactNode }) {
  return (
    <DropdownMenuLabel>{children}</DropdownMenuLabel>
  )
}

// TODO: Make it use Radix TS
export function DropdownMenuDefaultItem({ children, props }: { children: React.ReactNode }) {
  return (
    <DropdownMenuItem {...props} className="hover:bg-black hover:text-white rounded-dashboard-sidebar-link-border-radius flex flex-col">{children}</DropdownMenuItem>
  )
}
