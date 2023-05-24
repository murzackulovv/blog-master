import { IMyBtn } from "./MyBtn.interface";

export const MyBtn: React.FC<IMyBtn> = ({ children, ...props }): JSX.Element => {
  return <button {...props}>{children}</button>
}


