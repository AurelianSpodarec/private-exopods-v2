import * as DropdownMenu from '@radix-ui/react-dropdown-menu';

export function DropdownRoot({ children }:any) {
    return (
        <DropdownMenu.Root>
            {children}
        </DropdownMenu.Root>
    )
}

export function DropdownTrigger({ children }:any) {
    return (
        <DropdownMenu.Trigger>
            {children}
        </DropdownMenu.Trigger>
    )
}

export function DropdownMenuWrap({ children, align = "end" }:any) {
    return (
        <DropdownMenu.Content align={align} className="rounded-xl shadow-[0_4px_14px_rgba(0,0,0,0.1)] bg-white">
            {children}
        </DropdownMenu.Content>
    )
}

export function DropdownItem({ children }:any) {
    return (
        <DropdownMenu.Item className="flex text-xs">
            {children}
        </DropdownMenu.Item>
    )
}
