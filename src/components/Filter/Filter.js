import css from './Filter.module.css';
import { Form, Formik, ErrorMessage } from 'formik';
import { useDispatch } from 'react-redux';
import { setStatusFilter } from 'redux/contacts/filterSlice';

const initialValues = {
  filter: '',
};

export const Filter = () => {
  //const value = useSelector(getFilter);
  const dispatch = useDispatch();
  const handleOnChange = event => {
    const { value: filter } = event.target;

    dispatch(setStatusFilter(filter));
  };
  return (
    <Formik initialValues={initialValues}>
      <Form onChange={handleOnChange}>
        <label htmlFor="filter">Find contact by Name</label>
        <input className={css.input} type="text"></input>
        <ErrorMessage name="filter" component="div" />
      </Form>
    </Formik>
  );
};
