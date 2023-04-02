import Description from "@/components/Description/Description"
import Heading from "@/components/Heading/Heading"
import MainContainer from "@/components/MainContainer/MainContainer"
import StepWrapper from "@/components/StepWrapper"
import { plans } from "@/lib/plans"
import { addons } from "@/lib/addons"

const Step4 = ({ currentPlan, currentAddon, period, setCurrentStep }) => {


    const selectedPlan = plans[currentPlan]
    const selectedAddon = currentAddon.sort()
    const isMonthly = period === "monthly"

    function calculateTotal() {
        const planPrice = isMonthly ? selectedPlan.monthlyPrice : selectedPlan.yearlyPrice
        const addonPrice = selectedAddon.reduce((accu, itemindex) => {
            if (isMonthly) {
                return accu += addons[itemindex].monthlyPrice
            }

            return accu += addons[itemindex].yearlyPrice
        }, 0)
        return planPrice + addonPrice
    }


    return (
        <StepWrapper>
            <MainContainer>
                <Heading text={'Finishing Up'} />
                <Description text={'Double-check everything looks OK before confirming.'} />
                <div className="bg-slate-100 p-4 rounded-lg text-xs md:text-sm">
                    <div className="flex items-center justify-between">
                        <div>
                            <p className="text-sm md:text-base font-bold text-blue-900">{selectedPlan.name} <span className="capitalize">({period})</span></p>
                            <button
                                className="text-slate-400 underline hover:text-purple-500 font-medium"
                                onClick={() => setCurrentStep(2)}>
                                Change
                            </button>
                        </div>
                        <p className="font-bold md:text-base text-blue-900">${isMonthly ? `${selectedPlan.monthlyPrice}/mo` : `${selectedPlan.yearlyPrice}/yr`}</p>
                    </div>

                    {/* divider */}
                    <div className="border-t-2 my-3" />
                    {/* -------- */}

                    <div className="flex flex-col gap-y-2">
                        {selectedAddon.map(index => (
                            <div key={index} className="flex items-center justify-between">
                                <p className="text-slate-400">{addons[index].name}</p>
                                <p className="font-bold text-blue-900/80">+${isMonthly ? `${addons[index].monthlyPrice}/mo` : `${addons[index].yearlyPrice}yr`}</p>
                            </div>
                        ))}
                    </div>


                </div>
                <div className="flex items-center justify-between  p-4">
                    <p className="text-slate-400 text-xs md:text-sm">Total (per {isMonthly ? 'month' : 'year'})</p>
                    <p className="font-bold text-purple-700 text-lg">+${calculateTotal()}/{isMonthly ? 'mo' : 'yr'}</p>
                </div>
            </MainContainer>
        </StepWrapper>
    )
}

export default Step4