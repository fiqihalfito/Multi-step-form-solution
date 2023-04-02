import Description from "@/components/Description/Description"
import Heading from "@/components/Heading/Heading"
import MainContainer from "@/components/MainContainer/MainContainer"
import StepWrapper from "@/components/StepWrapper"
import PlanOption from "./PlanOption"
import TimeOption from "./TimeOption"

import { plans } from "@/lib/plans"

const Step2 = ({ period, setPeriod, setCurrentPlan, currentPlan }) => {



    return (
        <StepWrapper>
            <MainContainer>
                <Heading text={'Select your plan'} />
                <Description text={'You have the option of monthly or yearly billing.'} />
                <div className="mb-4 flex flex-col md:flex-row md:justify-stretchx  gap-y-2 md:gap-x-4 ">
                    {plans.map((plan, i) => (
                        <PlanOption key={i} id={i} plan={plan} setCurrentPlan={setCurrentPlan} period={period} currentPlan={currentPlan} />
                    ))}
                </div>
                <TimeOption period={period} setPeriod={setPeriod} />
            </MainContainer>
        </StepWrapper>
    )
}

export default Step2