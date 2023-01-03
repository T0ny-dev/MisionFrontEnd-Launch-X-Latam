import { Formik, Form, Field, ErrorMessage } from "formik";
import { useContext } from "react";
import { NotesContext } from "../Context/NotesContext";

function NotesForm(){
  const {add} = useContext(NotesContext);
  return (
    <Formik
      initialValues={{title:"", message:""}}
      validate={values => {
        const errors = {};
        if(!values.title){
          errors.title = "El titulo es requerido";
        } else if(!values.message){
          errors.message = "El mensaje es requerido";
        }
        return errors;
      }}
      onSubmit = {
        (values, {setSubmitting})=> {
          add(values.title, values.message);
          setSubmitting(false);
          values.title = "";
          values.message = "";
        }
      }
    >
      {
        ({isSubmitting})=>(
          <Form className="form">
            <div className="form__input">
              <label htmlFor="title">Todo App</label>
              <Field type="text" name="title" placeholder="Titulo...."/>
              <ErrorMessage name="title" component="p"/>
            </div>
            <div className="form__input">
              <label htmlFor="message">Tarea a Guardar</label>
              <Field as="textarea" name="message" placeholder="Descripcion ...."/>
              <ErrorMessage name="message" component="p"/>
            </div>
            <button type='submit' disabled={isSubmitting} className="save">
              {isSubmitting ? "Guardando todo...":"Guardar todo"}
            </button>
          </Form>
        )
      }
    </Formik>
  )
}

export default NotesForm;