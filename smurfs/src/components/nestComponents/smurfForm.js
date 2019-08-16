import React, {useState, useEffect} from 'react';
import { withFormik, Form, Field } from "formik";
import axios from 'axios';
import * as Yup from 'yup';



const SmurfForm = ({errors, touched, status}) => {
    const [newsmurf, setNewsmurf] = useState([])
    console.log('new smurf state', newsmurf)

    useEffect(() =>{
        if (status){
            setNewsmurf([...newsmurf, status])
        }
    }, [status])

    return(
        <>
            <h1>Add New Smurf</h1>
            <Form>
                <div>
                    {touched.name && errors.name && <p>{errors.name}</p>}
                    <Field type = 'text' name = 'name' placeholder = 'Name'/>
                </div>
                <div>
                    {touched.age && errors.age && <p>{errors.age}</p>}
                    <Field type = 'number ' name = 'age' placeholder = 'Age'/>
                </div>
                <div>
                    {touched.height && errors.height && <p>{errors.height}</p>}
                    <Field type = 'number ' name = 'height' placeholder = 'Height'/>
                </div>
                <button type= 'submit'>Submit!</button>
            </Form>


        </>
    )
}


const OnboardSmurf = withFormik({
    mapPropsToValues({name, age, height}){
        return{
            name:name || '',
            age:age || '',
            height:height || '',
        }
    },

    validationSchema: Yup.object().shape({
        name: Yup.string()
        .required('Name is required'),

        age: Yup.number()
        .required('Age is required'),

        height: Yup.number()
        .required('Height is required')
    }),

    handleSubmit(values, {resetForm, setSubmitting, setStatus}){
        console.log('values', values)
        
        axios
        .post('http://localhost:3333/smurfs', values)
        .then(res =>{
            console.log('res', res)//console log response
            resetForm();
            setSubmitting(false)
            setStatus(res.data)
        })

        .catch(err =>{
            console.log('err', err)//console log error
            setSubmitting(false)
        })   
    }

})(SmurfForm)

export default OnboardSmurf