import * as Yup from 'yup'

export const TASK_SHEMA = Yup.object().shape({
  body: Yup.string().matches(/^[A-Za-z0-9]{2,}$/).required()
})
