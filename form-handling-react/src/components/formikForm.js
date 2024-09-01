import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const FormikForm = () => {
    const validationSchema = Yup.object({
        username: Yup.string().required('Username is required'),
        email: Yup.string().email('Invalid email address').required('Email is required'),
        password: Yup.string().required('Password is required'),
    });

    const handleSubmit = (values, { setSubmitting, resetForm }) => {
        // Mock API call
        console.log(values);
        alert('Registration successful!');
        setSubmitting(false);
        resetForm();
    };

    return (
        <Formik
            initialValues={{ username: '', email: '', password: '' }}
            validationSchema={validationSchema}
            onSubmit={handleSubmit}
        >
            {({ isSubmitting }) => (
                <Form>
                    <div>
                        <label>Username:</label>
                        <Field type="text" name="username" />
                        <ErrorMessage name="username" component="div" style={{ color: 'red' }} />
                    </div>
                    <div>
                        <label>Email:</label>
                        <Field type="email" name="email" />
                        <ErrorMessage name="email" component="div" style={{ color: 'red' }} />
                    </div>
                    <div>
                        <label>Password:</label>
                        <Field type="password" name="password" />
                        <ErrorMessage name="password" component="div" style={{ color: 'red' }} />
                    </div>
                    <button type="submit" disabled={isSubmitting}>Register</button>
                </Form>
            )}
        </Formik>
    );
};

export default FormikForm;
