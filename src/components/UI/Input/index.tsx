import { Dispatch } from 'react';
import TextField from '@mui/material/TextField';

interface Props {
    value: string
    setValue: Dispatch<React.SetStateAction<string>>
    placeholder?: string
}

export const UIInput = ({ value, setValue, placeholder='' }: Props) => {

  return (
    <TextField 
      id="outlined-basic" 
      label="Outlined" 
      variant="outlined" 
      value={value}
      placeholder={placeholder}
      onChange={(e)=> setValue(e.target.value)}
    /> 
  );
};