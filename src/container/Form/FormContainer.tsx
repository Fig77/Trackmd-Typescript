import React from 'react';
import InputForm from '../../components/Form/input';

type submitFn = () => void;
type inputFn = (e: React.FormEvent<HTMLInputElement>, i: number) => void;

interface formParts {
  inputFields: [];
  subm: submitFn;
  inputNum: number;
}

const inputgen = (label:string, c:number, from:string):JSX.Element => {
  return <InputForm labelText={label} i={c} fatherId={c+''} fromType={from}></InputForm>
}

const FormContainer = ({inputFields, subm, inputNum}: formParts) => {

  const inputForm = ():any[] => {
    const concat = new Array();
    let i: number = 0;
    while i < inputNum {
      concat.push(inputgen('',i,''))
      i++;
    }
   return concat;
  }

  return (
  	<form>
  	  {inputForm()}
  	  <button onSubmit={ () => subm }></button>
   </form>);
}

export default FormContainer;