import { formatBalance } from "@/lib/utils"

function TeamBalance({ amount }: { amount: number }) {
  return (
    <button type="button" className="cursor-pointer bg-[#0b363b] text-[#19ddfb] text-sm flex gap-2 items-center px-3 py-2 rounded-lg relative">
      <span className="font-semibold">Team Credit</span>
      <span>${formatBalance(amount)} USD</span>
    </button>
  )
}

export default TeamBalance
