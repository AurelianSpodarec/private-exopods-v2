function CellLink({ label }:CellLinkProps) {
    return (
        <td className="whitespace-nowrap">
        <div className="text-[#175CD3] bg-[#EFF8FF] rounded-2xl px-2 py-1 text-xs inline-block space-x-0.5">
            <span className="underline">{label}</span>
            <svg className="inline-block" xmlns="http://www.w3.org/2000/svg" width="15" height="16" viewBox="0 0 15 16" fill="none">
                <path d="M3.5498 11.5498L10.6499 4.44974" stroke="#1A73E8" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M4.88135 4.44974H10.6502V10.2186" stroke="#1A73E8" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
        </div>
    </td>
    )
}

export default CellLink;


interface CellLinkProps {
    label: string;
}
