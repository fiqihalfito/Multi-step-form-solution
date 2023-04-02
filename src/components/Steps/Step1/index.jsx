import StepWrapper from "@/components/StepWrapper"
import Description from "../../Description/Description"
import Heading from "../../Heading/Heading"
import MainContainer from "../../MainContainer/MainContainer"
import FormInput from "./FormInput"

const Step1 = ({ user, setUser, validation }) => {

    return (
        <StepWrapper>
            <MainContainer>
                <Heading text={'Personal info'} />
                <Description text={'Please provide your name, email address, and phone number.'} />
                <form>
                    <FormInput label={'Name'} name={'name'} value={user.name} placeholder={'e.g. Stephen King'} onChange={setUser} status={validation.name} />
                    <FormInput label={'Email Address'} name={'email'} value={user.email} placeholder={'e.g. stephenking@lorem.com'} onChange={setUser} status={validation.email} />
                    <FormInput label={'Phone Number'} name={'phone'} value={user.phone} placeholder={'e.g. +1 234 567 890'} onChange={setUser} status={validation.phone} />
                </form>
            </MainContainer>
        </StepWrapper>
    )
}

export default Step1