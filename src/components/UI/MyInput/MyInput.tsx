import { IMyInput } from './MyInput.interface';


export const MyInput = ({...props}: IMyInput) => {

  return <input {...props} />
}