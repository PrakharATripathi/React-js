import React, { useContext } from 'react'
import { Button, Container, FlexDiv, Form, HeadingTag, Input, Label } from '../style_component/Style';
import { useFormik } from 'formik';
import { initialValues, mobileNum } from '../service/data';
import { LoginSchema } from '../service/Validation';
import { useNavigate } from 'react-router-dom'
import { DataContext } from '../component/Context';
import MobileInput from '../component/MobileInput';

function Home() {
    const navigate = useNavigate();
    const { mobileNumber, setMobileNumber } = useContext(DataContext);
    // console.log(mobileNumber)
    const { values, errors, touched, handleChange, handleSubmit } = useFormik({
        initialValues: initialValues,
        validationSchema: LoginSchema,
        onSubmit: (values, action) => {
            setMobileNumber(values.number)
            if (Number(values.number) == mobileNum) {
                navigate('/login')
            } else {
                navigate('/register');
            }
            action.resetForm()
        },

    });
    return (
        <Container>
            <Form onSubmit={handleSubmit}>
                <FlexDiv>
                    <HeadingTag>Welcome</HeadingTag>
                </FlexDiv>
                <MobileInput value={values.number} handleChange={handleChange} errors={errors} touched={touched} />
                <FlexDiv>
                    <Button type='submit'>NEXT</Button>
                </FlexDiv>
            </Form>

        </Container>
    )
}

export default Home;
