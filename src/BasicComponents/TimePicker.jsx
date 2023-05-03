import * as React from 'react';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { TimeField } from '@mui/x-date-pickers/TimeField';

export default function BasicTimeField({label}) {
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
        <TimeField label={label} />
    </LocalizationProvider>
  );
}