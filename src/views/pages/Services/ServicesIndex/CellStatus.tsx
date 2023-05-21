function CellStatus({ label, status }: { status: CellStatus, label: string }) {

    const mediaTypes: Record<CellStatus, string> = {
        running: "bg-blue-300 text-blue-900",
        stopped: "bg-red-300 text-red-900"
    };

    if(!label) return <></>
    return (
        <td className={`whitespace-nowrap px-3 py-4 text-gray-500"`}>
            <div className={`px-1.5 py-1 rounded-md w-full text-center text-xs ${mediaTypes[status]}`}>
                <span className="capitalize">{label}</span>
            </div>
        </td>
    );
}

export default CellStatus;

type CellStatus = "running" | "stopped";