import { InputHTMLAttributes, DetailedHTMLProps } from 'react';

export interface IMyInput extends DetailedHTMLProps<
InputHTMLAttributes<HTMLInputElement>,
HTMLInputElement
> {}

