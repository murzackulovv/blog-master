export interface IForm {
  addNewPost: (postObj: {title: string, body: string, id: number}) => void
}