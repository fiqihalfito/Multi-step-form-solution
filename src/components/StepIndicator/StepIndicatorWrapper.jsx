import Step from "./Step"

const StepIndicatorWrapper = ({ active }) => {

    const mapActiveStep = {
        1: active === 1,
        2: active === 2,
        3: active === 3,
        4: active === 4,
    }

    return (
        <div className="flex md:flex-col md:bg-pattern-desktop md:bg-no-repeat md:bg-cover md:bg-bottom justify-center md:justify-start items-center md:items-stretch gap-x-4 py-8 md:px-8 md:gap-y-4 md:gap-x-0 md:rounded-lg">
            <Step number={1} desc="YOUR INFO" isActive={mapActiveStep[1]} />
            <Step number={2} desc="SELECT PLAN" isActive={mapActiveStep[2]} />
            <Step number={3} desc="ADD-ONS" isActive={mapActiveStep[3]} />
            <Step number={4} desc="SUMMARY" isActive={mapActiveStep[4]} />
        </div>
    )
}

export default StepIndicatorWrapper