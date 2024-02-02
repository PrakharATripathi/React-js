import React, { useContext, useEffect, useState } from 'react'
import { DataContext } from '../component/Context';
import { Button, Container, FlexDiv, Form,  HeadingTag,  MobileDiv,  Text } from '../style_component/Style';
import OtpInputs from '../component/OtpInputs';
import { useNavigate } from 'react-router-dom'
import { initialValues, validOtp } from '../service/data';
import { useFormik } from 'formik';
import { toast } from 'react-toastify';
import MobileInput from '../component/MobileInput';
import { LoginSchema } from '../service/Validation';

function Register() {
    const { mobileNumber, setMobileNumber } = useContext(DataContext);
    const [otp, setOtp] = useState();
    const [show, setShow] = useState(false)
    const navigate = useNavigate()
    const { values, errors, touched, handleChange, handleSubmit, setValues } = useFormik({
        initialValues: initialValues,
        validationSchema:LoginSchema,
        onSubmit: (values) => {
            if (show) {
                setShow(false);
                setMobileNumber(values.number)
            } else {
                if (otp) {
                    validOtp == otp ? toast.success('login sussefully') : toast.warning('not valid otp');
                } else {
                    toast.error("Please enter otp")
                }
            }

        }

    });
    useEffect(() => {
        if (!mobileNumber) {
            setShow(true);
        }
    }, [])
    return (
        <Container>
            <Form onSubmit={handleSubmit}>
                <FlexDiv>HeadingTag
                    <HeadingTag>Register</HeadingTag>
                </FlexDiv>
                {show ?
                    <MobileInput handleChange={handleChange} value={values.number} errors={errors} touched={touched}/>
                    :
                    <>
                        <Fle>
                            <MobileDiv>
                                <Text>Mobile Number</Text>
                                <Text color='gray'>{mobileNumber && mobileNumber}</Text>
                            </MobileDiv>
                            <Text color="blue" onClick={() => navigate("/")}>Change</Text>
                        </Fle>
                        <Fle>
                            <Text>Enter OTP to verify</Text>
                        </Fle>
                        <Fle>
                            <OtpInputs setOtp={setOtp} />
                        </Fle>

                    </>}
                <Button type='submit'>SUBMIT</Button>
            </Form>
        </Container>
    )
}

export default Register
