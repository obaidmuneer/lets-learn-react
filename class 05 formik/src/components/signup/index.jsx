import React from 'react'
import { useFormik } from 'formik'
import * as yup from 'yup';

import { GlobalContext } from '../../context/context'
import FormikInput from '../FormikInput';

const validationSchema = yup.object().shape({
    fullname: yup.string().required(),
    email: yup.string().email().required('Email is required'),
    age: yup.number().required().min(12).max(60).integer(),
    password: yup.string().required().min(6)

})

const SignUp = () => {
    const { state, dispatch } = React.useContext(GlobalContext)

    const formik = useFormik({
        initialValues: {
            fullname: '',
            email: '',
            password: '',
            age: '',
        },
        validationSchema: validationSchema,
        onSubmit: (values,actions) => {
            console.log(values);
            dispatch({
                type: 'CHANGE_OWNER',
                payload: values.fullname
            })
            actions.resetForm();
        },
    })

    return (
        <div>
            <h3>SignUp Form</h3>
            <form onSubmit={formik.handleSubmit} >
                <FormikInput id='fullname' title='Full Name' formik={formik} />
                <FormikInput id='email' title='Email' formik={formik} type='email' />
                <FormikInput id='age' title='Age' formik={formik} />
                <FormikInput id='password' title='Password' formik={formik} type='password' />
                <button type="submit">Submit</button>
            </form>
            {state?.owner}
        </div>
    )
}

export default SignUp