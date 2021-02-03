import React from 'react';
import InputForm from '../../components/Form/input';

type submitFn = () => void;
type inputFn = (e: React.FormEvent<HTMLInputElement>, i: number) => void;

interface formParts {
  inputFields: [];
  subm: submitFn;
}

const inputgen = ():JSX.Element => {
  return <InputForm labelText='' i={1} fatherId='1' fromType='a'></InputForm>
}

const FormContainer = () => {
  return <div></div>
}

export default FormContainer;