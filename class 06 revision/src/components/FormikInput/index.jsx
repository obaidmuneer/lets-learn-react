import React from 'react'

const FormikInput = ({ formik, title, type, id }) => {
    return (
        <div>
            <span>{title} : </span><input
                type={type || 'text'}
                id={id}
                name={id}
                onChange={formik.handleChange}
                value={formik.values[id]} />
                {(formik.touched.fullname && formik.errors[id]) ? formik.errors[id] : null}
                <br /><br/>
        </div>
    )
}

export default FormikInput