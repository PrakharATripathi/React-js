import React, { useContext, useEffect, useState } from 'react'
import { Button, Changebutton, Container, FlexDiv, Form, Input, Label, OtpInput, Text, Toggle, ToggleButton } from '../style_component/Style'
import { useFormik } from 'formik';
import { toast } from 'react-toastify';
import { initialValues, validOtp, validPassword } from '../service/data';
import OtpInputs from '../component/OtpInputs';
import { DataContext } from '../component/Context';
import { useNavigate } from 'react-router-dom'
import PasswordInput from '../component/PasswordInput';
import Heading from '../component/Heading';

function Login() {
    const [opration, setOpration] = useState(false);
    const { mobileNumber, setMobileNumber } = useContext(DataContext);
    const [otp, setOtp] = useState("");
    const [togglePass, setTogglePass] = useState(false);
    const navigate = useNavigate()
    const { values, errors, touched, handleChange, handleSubmit, setValues } = useFormik({
        initialValues: initialValues,
    
        onSubmit: (values) => {
            if (values.password.trim() || otp.trim()) {
                if (opration) {
                    validOtp == otp ? toast.success('login sussefully') : toast.warning('not valid otp');
                } else {
                    validPassword === values.password ? toast.success('login sussefully ') : toast.warning('not valid Password');

                }
                action.resetForm()
            } else {
                toast.error("Please enter password")
            }
        }

    });

    useEffect(() => {
        if (!mobileNumber) {
            navigate('/');
        }
    }, [mobileNumber])

    return (
        <Container>
            <Form onSubmit={handleSubmit}>
                <Heading Heading="Login" mobileNumber={mobileNumber} navigate={navigate} />
                <FlexDiv>
                    {opration ?
                        <Text>Enter OTP to verify</Text> :
                        <Label>Password</Label>}

                </FlexDiv>
                {opration ?
                    <OtpInputs setOtp={setOtp} name="otp" onChange={handleChange(otp)} />
                    :
                    <PasswordInput values={values} handleChange={handleChange} togglePass={togglePass} setTogglePass={setTogglePass} />
                }
                <FlexDiv>
                    <ToggleButton color='blue' onClick={() => setOpration(!opration)}>
                        {opration ? "Login Via Password" : "Or Login Via Otp"}
                    </ToggleButton >
                </FlexDiv>
                <Button type='submit'>SUBMIT</Button>
            </Form>

        </Container>
    )
}

export default Login
