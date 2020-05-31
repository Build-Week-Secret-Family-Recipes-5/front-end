import React, { useEffect, useState } from 'react';
import { Form, Field, withFormik } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';
import '../index.css'
import api from '../utils/api';
import NavBar from './NavBar';

function RecipeForm({ errors, touched, values, status }) {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    status && setRecipes(() => [...recipes, status]);
    console.log(recipes);
  }, [status]);

  return (
    <div>
      {/* <NavBar /> */}
      <div className="trevor-form-container">
        <Form className="trevor-form">
          <h1>Create new Recipe!</h1>
          <Field
            type="text"
            name="title"
            placeholder="Recipe Title"
            value={values.title}
            className="trevor-input"
          />
          {touched.title && errors.title && <p>{errors.title}</p>}

          <Field
            type="text"
            name="source"
            placeholder="Recipe Source"
            value={values.source}
            className="trevor-input"
          />
          {touched.source && errors.source && (
            <p>{errors.source}</p>
          )}

          <Field
            type="textarea"
            name="ingredients"
            placeholder="Ingredients"
            value={values.ingredients}
            className="trevor-input"
          />
          {touched.ingredients && errors.ingredients && <p>{errors.ingredients}</p>}

          <Field
            type="textarea"
            name="Instructions"
            placeholder="Instructions"
            value={values.instructions}
            className="trevor-input"
          />

          {touched.instructions && errors.instructions && <p>{errors.instructions}</p>}

          <Field
            type="text"
            name="categories"
            placeholder="Categories"
            value={values.category}
            className="trevor-input"
          />
          {touched.category && errors.category && (
            <p>{errors.category}</p>
          )}
          <button className="trevor-button" type="submit">
            Add Recipe
          </button>
        </Form>
      </div>
    </div>
  );
}

const FormikRecipeForm = withFormik({
  mapPropsToValues({ recipes }) {
    return {
      title: recipes || '',
      source: '',
      ingredients: '',
      instructions: '',
      category: '',
      photo_url:
        'https://images.unsplash.com/photo-1516865131505-4dabf2efc692?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=3580&q=80',
    };
  },

  validationSchema: Yup.object().shape({
    title: Yup.string().required('Please fill this out!'),
    source: Yup.string().required('Please fill this out!'),
    ingredients: Yup.string().required('Please fill this out!'),
    instructions: Yup.string().required('Please fill this out!'),
    category: Yup.string()
      .oneOf([
        'Breakfast',
        'Lunch',
        'Dinner',
      ])
      .required('Please Choose an option'),
  }),

  handleSubmit(values, { setStatus, resetForm }) {
    console.log('Submitting form: ', values);

    api()
      .post('/api/recipes', values)
      .then((response) => {
        console.log('Success:', response);
        setStatus(response.data);
        resetForm();
        window.location.reload();
      })
      .catch((error) => console.log('Error:', error));
  },
})(RecipeForm);
export default FormikRecipeForm;
