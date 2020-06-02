import styled from "styled-components";

//****style components*****

const formSchema = yup.object().shape({
  recipe: yup.string().required("Recipe name please"),
  source: yup.string().required("Recipe source name please"),
  category: yup.string().required("Recipe name please"),
  ingredients: yup.string().required("Recipe name please"),
  directions: yup.string().required("Recipe name please"),
});

const [errorState, setErrorState] = useState({
  recipe: "",
  source: "",
  category: "",
  ingredients: "",
  directions: "",
});

const [buttonDisabled, setButtonDisabled] = useState(true);

useEffect(() => {
  formSchema.isValid(recipeState).then((valid) => {
    setButtonDisabled(!valid);
  });
}, [recipeState]);

useEffect(() => {
  formSchema.isValid(recipeState).then((valid) => {
    setButtonDisabled(!valid);
  });
}, [recipeState]);

const validate = (e) => {
  const value = yup
    .reach(formSchema, e.target.name)
    .validate(value)
    .them((valid) => {
      setErrorState({
        ...errorState,
        [e.target.name]: "",
      });
    })
    .catch((err) => {
      setErrorState({
        ...errorState,
        [e.target.name]: err.errors[0],
      });
    });
};
