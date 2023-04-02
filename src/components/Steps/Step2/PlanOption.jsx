import Image from "next/image"
import arcadeIcon from "../../../../public/assets/images/icon-arcade.svg"
import advancedIcon from "../../../../public/assets/images/icon-advanced.svg"
import proIcon from "../../../../public/assets/images/icon-pro.svg"

const mapImage = {
    arcade: arcadeIcon,
    advanced: advancedIcon,
    pro: proIcon
}

const PlanOption = ({ id, plan, period, currentPlan, setCurrentPlan }) => {
    return (
        <div className={`flex-1 flex items-start md:flex-col gap-x-4 border-2 rounded-lg p-3 cursor-pointer hover:border-purple-500 ${currentPlan === id && 'border-purple-500 bg-purple-500/5'}`}
            onClick={() => setCurrentPlan(id)}>
            <Image src={mapImage[plan.image]} alt="icon" className="md:mb-12" />
            <div>
                <p className="text-blue-950 font-semibold">{plan.name}</p>
                <p className="text-sm text-slate-400 mb-1 md:mb-2">
                    ${period === "monthly" ? `${plan.monthlyPrice}/mo` : `${plan.yearlyPrice}/yr`}
                </p>
                {period === "yearly" && <p className="text-xs text-blue-950">2 months free</p>}
            </div>
        </div>
    )
}

export default PlanOption