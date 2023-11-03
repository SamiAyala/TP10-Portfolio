import React from "react";
import { useFormik } from 'formik';
import * as yup from 'yup';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";
import './Contacto.css';
import { width } from "@mui/system";

const validationSchema = yup.object({
    email: yup
        .string()
        .email('Ingrese un email válido.')
        .required('El email es obligatorio.'),
    name: yup
        .string()
        .required('Este campo es obligatorio.'),
    phone: yup
        .string()
        .min(9,'Demasiado corto.')
        .max(17,'Demasiado largo.')
        .required('El telefono es obligatorio.'),
    message: yup
        .string()
        .required('El mensaje es obligatorio.')
});

const Contacto = () => {
    const formik = useFormik({
        initialValues: {
            email: '',
            password: '',
            name:'',
            phone:'',
            message:'',
        },
        validationSchema: validationSchema,
        onSubmit: () => {
            alert("su mensaje ha sido enviado.");
        },
    });

    return (
        <>
            <Row><Col style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', fontSize: 'xx-large', fontWeight: 'bold', padding: '0px', alignItems: 'center' }}><p style={{ color: 'white' }}>Ponte en contacto</p></Col></Row>
            <Row style={{display: 'flex', flexWrap: 'wrap', justifyContent: 'center',justifyContent: 'center'}}><Col id='col' sm='auto' style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', fontSize: 'xx-large', fontWeight: 'bold', padding: '20px', alignItems: 'center'}}>
                <form onSubmit={formik.handleSubmit}>
                <TextField
                        fullWidth
                        id="name"
                        name="name"
                        label="Nombre completo"
                        value={formik.values.name}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        error={formik.touched.name && Boolean(formik.errors.name)}
                        helperText={formik.touched.name && formik.errors.name}
                    />
                    <TextField
                        fullWidth
                        id="email"
                        name="email"
                        label="Email"
                        value={formik.values.email}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        error={formik.touched.email && Boolean(formik.errors.email)}
                        helperText={formik.touched.email && formik.errors.email}
                    />
                    <TextField
                        fullWidth
                        id="phone"
                        name="phone"
                        label="Teléfono"
                        value={formik.values.phone}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        error={formik.touched.phone && Boolean(formik.errors.phone)}
                        helperText={formik.touched.phone && formik.errors.phone}
                    />
                    <TextField
                    fullWidth
                    id="message"
                    name="message"
                    label="Mensaje"
                    value={formik.values.message}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    margin='normal'
                    error={formik.touched.message && Boolean(formik.errors.message)}
                    helperText={formik.touched.message && formik.errors.message}
                    />
                    
                    <Button color="primary" variant="contained" fullWidth type="submit">
                        Enviar
                    </Button>
                </form>
            </Col>
            </Row>
        </>
    );
};

export default Contacto;