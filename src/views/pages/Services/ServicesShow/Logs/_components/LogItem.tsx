function LogItem({ text }:LogItemProps) {
    return (
        <div className="h-8 flex items-center border-b border-b-[#E5E9EB]">
            <p className="text-xs font-normal text-[#252C32]">{text}</p>
        </div>
    )
}

export default LogItem;

interface LogItemProps {
    text: string;
}
