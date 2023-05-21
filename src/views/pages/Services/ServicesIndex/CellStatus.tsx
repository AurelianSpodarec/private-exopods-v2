function CellStatus({ label, status }: { status: CellStatus, label: string }) {

    const mediaTypes: Record<CellStatus, string> = {
        running: "bg-[#ECFDF3] text-[#027A48]",
        stopped: "bg-[#fccece] text-[#F02849]"
    };

    if(!label) return <></>
    return (
        <td className={`whitespace-nowrap px-3 py-4 text-gray-500"`}>
            <div className={`px-1.5 py-1 inline-block rounded-2xl space-x-2 w-full text-center ${mediaTypes[status]}`}>
                <div className={`inline-block h-2 w-2 rounded-full ${ status === "running" ? "bg-[#12B76A]" : "bg-[#F02849]"}`}></div>
                <span className="inline-block capitalize font-medium text-xs">{label}</span>
            </div>
        </td>
    );
}

export default CellStatus;

type CellStatus = "running" | "stopped";