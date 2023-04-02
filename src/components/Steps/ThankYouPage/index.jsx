import MainContainer from "@/components/MainContainer/MainContainer"
import StepWrapper from "@/components/StepWrapper"
import Image from "next/image"
import thankYouIcon from "../../../../public/assets/images/icon-thank-you.svg"

const ThankYouPage = () => {
    return (
        <StepWrapper>
            <div className="md:flex md:justify-center md:items-center md:h-full">
                <MainContainer>
                    <div className="flex flex-col items-center md:justify-center h-full w-full">
                        <Image src={thankYouIcon} alt="icon" className="mb-4 w-12" />
                        <p className="text-2xl font-bold text-blue-900 mb-2">Thank you!</p>
                        <p className="text-slate-400 text-center">Thanks for confirming your subscription! We hope you have fun using our platform. If you ever need support, please feel free to email us at support@loremgaming.com.</p>
                    </div>
                </MainContainer>
            </div>

        </StepWrapper>
    )
}

export default ThankYouPage