import Image from "next/image"
import checklistIcon from "../../../../public/assets/images/icon-checkmark.svg"

const AddOnsOption = ({ addon, period, id, currentAddon, setCurrentAddon }) => {

    const isActive = currentAddon.includes(id)

    const handleClick = () => {
        return setCurrentAddon(data => {
            if (isActive) {
                return data.filter(item => item !== id)
            }

            return [...data, id]
        })
    }

    return (
        <div
            className={`py-2 px-3 md:py-4 md:px-5 border md:border-2 hover:border-blue-600  ${isActive ? 'border-blue-600 bg-blue-600/10' : 'border-slate-300'} rounded-lg flex items-center gap-x-3 md:gap-x-4 cursor-pointer`}
            onClick={handleClick}>

            <div>
                <div className={`h-5 w-5 md:h-6 md:w-6  ${isActive ? 'bg-blue-600' : 'border md:border-2 border-slate-300'}  flex items-center justify-center rounded`}>
                    <Image src={checklistIcon} alt="checklist" />
                </div>
            </div>

            <div className="flex-grow ">
                <p className="text-sm md:text-base text-blue-950 font-bold ">{addon.name}</p>
                <p className="text-xs md:text-sm text-slate-400">{addon.desc}</p>
            </div>
            <p className="text-purple-500 text-xs md:text-sm font-semibold">
                +${period === "monthly" ? `${addon.monthlyPrice}/mo` : `${addon.yearlyPrice}/yr`}
            </p>
        </div>
    )
}

export default AddOnsOption