import { useContext, Fragment } from 'react'
import { Redirect } from 'react-router-dom'
import { Formik } from 'formik'

import TokenContext from '../contexts/User'

export default function Home() {
    const context = useContext(TokenContext)

    if (context.logged) {
        return <Redirect to="/movies" />
    }

    const validate = values => {
        const errors = {}
        if (!values.email) {
            errors.email = 'Email is required.'
        } else if (
            !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
        ) {
            errors.email = 'Invalid email address.'
        }
        if (!values.password) {
            errors.password = 'Password is required.'
        } else if (
            !/^(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#=\]]).{10,}$/.test(values.password)
        ) {
            errors.password = 'Your password must be at least 10 characters long, contain 1 lowercase letter, 1 uppercase letter and 1 one following characters: !, @, # or ?.'
        }
        return errors
    }

    const onSubmit = (values, { setSubmitting }) => {
        setTimeout(() => {
            context.login('token')
        }, 400)
    }

    const initialValues = { email: '', password: '' }

    return (
        <Fragment>
            <h1>Login</h1>
            <Formik
                initialValues={initialValues}
                validate={validate}
                onSubmit={onSubmit}
            >
                {({
                    values,
                    errors,
                    touched,
                    handleChange,
                    handleBlur,
                    handleSubmit,
                    isSubmitting,
                }) => (
                    <div className="row">
                        <form className="col s12" onSubmit={handleSubmit}>
                            <div className="mb-3">
                                <label className="form-label">
                                    Email address
                                    <input
                                        name="email"
                                        type="email"
                                        className="form-control"
                                        placeholder="name@example.com"
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        value={values.email}
                                    />
                                </label>
                                {errors.email && touched.email &&
                                    <div className="alert alert-danger">
                                        {errors.email && touched.email && errors.email}
                                    </div>
                                }
                            </div>
                            <div className="mb-3">
                                <label className="form-label">
                                    Password
                                    <input
                                        name="password"
                                        type="password"
                                        className="form-control"
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        value={values.password}
                                    />
                                </label>
                                {errors.password && touched.password &&
                                    <div className="alert alert-danger">
                                        {errors.password && touched.password && errors.password}
                                    </div>
                                }
                            </div>
                            <button type="submit" className="btn btn-primary" disabled={isSubmitting}>
                                Submit
                            </button>
                        </form>
                    </div>
                )}
            </Formik>
        </Fragment>
    )
}
