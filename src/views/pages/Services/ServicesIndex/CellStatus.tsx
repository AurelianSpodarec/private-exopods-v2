function CellStatus({ label, status }: { status: CellStatus, label: string }) {

    const mediaTypes: Record<CellStatus, string> = {
        running: "bg-[#ECFDF3] text-[#027A48]",
        stopped: "bg-[#fccece] text-[#F02849]"
    };

    if(!label) return <></>
    return (
        <td className={`whitespace-nowrap px-3 py-4`}>
        <div className="inline-block">

            <div className={`px-2 rounded-2xl w-full flex items-center text-center ${mediaTypes[status]}`}>
            <div className="py-2 flex items-center align-center space-x-2">
                <div className={`inline-block h-2 w-2 rounded-full ${ status === "running" ? "bg-[#12B76A]" : "bg-[#F02849]"}`}></div>
                <p className="block capitalize font-medium text-xs leading-3">{label}</p>
            </div>
            </div>

        </div>
        </td>
    );
}

export default CellStatus;

type CellStatus = "running" | "stopped";