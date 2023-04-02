import Description from "@/components/Description/Description"
import Heading from "@/components/Heading/Heading"
import MainContainer from "@/components/MainContainer/MainContainer"
import StepWrapper from "@/components/StepWrapper"
import { addons } from "@/lib/addons"
import AddOnsOption from "./AddOnsOption"

const Step3 = ({ period, currentAddon, setCurrentAddon }) => {
    return (
        <StepWrapper>
            <MainContainer>
                <Heading text={'Pick add-ons'} />
                <Description text={'Add-ons help enhance your gaming experience.'} />
                <div className="flex flex-col gap-y-2 md:gap-y-4">
                    {addons.map((item, i) => (
                        <AddOnsOption key={i} id={i} addon={item} period={period} currentAddon={currentAddon} setCurrentAddon={setCurrentAddon} />
                    ))}
                </div>
            </MainContainer>
        </StepWrapper>
    )
}

export default Step3