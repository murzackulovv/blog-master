import { ButtonHTMLAttributes, DetailedHTMLProps, ReactNode } from 'react';

export interface IMyBtn extends DetailedHTMLProps<
  ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
> {
  children: ReactNode
}

