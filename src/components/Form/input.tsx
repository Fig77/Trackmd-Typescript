import React from 'react';

type inputFn = (e: React.FormEvent<HTMLInputElement>, i: number) => void;


interface inputData {
  labelText: string;
  inputFunction?: inputFn;
  i: number;
  fatherId: string;
  fromType: string;
}

const InputForm = ({fatherId, labelText, fromType, i, inputFunction}: inputData) => { 

  return(
    <div key={fatherId.concat(i)}>
      <label className="" >{labelText}</label>
      <div className="">
       <input type={fromType} className="" onChange={(e) => inputFunction(e,i)} required/>
    </div>
    </div>
  );
}

export default InputForm;