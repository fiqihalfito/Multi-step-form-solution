"use client"

import StepIndicatorWrapper from "@/components/StepIndicator/StepIndicatorWrapper";
import { useState } from "react";
import NavBottom from "@/components/NavBottom";
import Step1 from "@/components/Steps/Step1";
import Step2 from "@/components/Steps/Step2";
import Step3 from "@/components/Steps/Step3";
import Step4 from "@/components/Steps/Step4";
import ThankYouPage from "@/components/Steps/ThankYouPage";


export default function Home() {

    const [user, setUser] = useState({
        name: "",
        email: "",
        phone: ""
    })

    const [currentStep, setCurrentStep] = useState(1)
    const [period, setPeriod] = useState("monthly")
    const [currentPlan, setCurrentPlan] = useState(0)
    const [currentAddon, setCurrentAddon] = useState([])
    const [isComplete, setIsComplete] = useState(false)
    const [step1Validation, setStep1Validation] = useState({
        name: true,
        email: true,
        phone: true
    })


    const mapShowStep = {
        1: <Step1 user={user} setUser={setUser} validation={step1Validation} />,
        2: <Step2 period={period} setPeriod={setPeriod} setCurrentPlan={setCurrentPlan} currentPlan={currentPlan} />,
        3: <Step3 period={period} currentAddon={currentAddon} setCurrentAddon={setCurrentAddon} />,
        4: <Step4 currentPlan={currentPlan} currentAddon={currentAddon} period={period} setCurrentStep={setCurrentStep} />,
    }

    function handleNav(to) {

        if (currentStep === 1) {

            const status = Object.values(user).every(item => item)

            // render page first then display error
            if (status) {
                setCurrentStep(to)
            } else {
                setCurrentStep(1)
            }

            // then validate
            return setStep1Validation(prev => ({
                name: user.name.length > 0,
                email: user.email.length > 0,
                phone: user.phone.length > 0,
            }))
        }

        return setCurrentStep(to)
    }



    return (
        <div className="h-screen md:flex md:justify-center md:items-center bg-slate-200">
            <div className="h-screen flex flex-col md:grid md:grid-cols-3 bg-pattern-mobile md:bg-none md:bg-white bg-no-repeat bg-contain bg-top md:w-3/5 md:h-4/5 md:p-4 md:gap-x-4 md:rounded-lg">
                <StepIndicatorWrapper active={currentStep} />
                <div className="flex-grow flex flex-col md:px-16 md:col-span-2">
                    {isComplete ? <ThankYouPage /> : mapShowStep[currentStep]}

                    {!isComplete && <NavBottom curr={currentStep} handleNav={handleNav} setIsComplete={setIsComplete} user={user} />}
                </div>
            </div>
        </div>



    )
}
