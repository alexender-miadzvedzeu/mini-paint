import { 
  CREATE_USER_WITH_E_MAIL, 
  CREATE_USER_WITH_E_MAIL_SUCCEEDED, 
  CREATE_USER_WITH_E_MAIL_FAILED, 
  SIGN_IN_WITH_E_MAIL,
  SIGN_IN_WITH_E_MAIL_SUCCEEDED,
  SIGN_IN_WITH_E_MAIL_FAILED
} from '../actions/users';


interface Action {
  readonly type: string
  readonly payload: object
  error?: any
}

interface State {
  loading: boolean
  error: false
}

const initialState: State = {
  loading: false,
  error: false
}

export const authReducer = (state = initialState, action: Action ):object => {
  switch (action.type) {
    case CREATE_USER_WITH_E_MAIL:
      return {...state, loading: true, error: false}
    case CREATE_USER_WITH_E_MAIL_SUCCEEDED:
      console.log(action.payload)
      return {...state, loading: false, error: false}
    case CREATE_USER_WITH_E_MAIL_FAILED:
      console.log(action.error)
      return {...state, loading: false, error: true}
    case SIGN_IN_WITH_E_MAIL:
      return {...state, loading: true, error: false}
    case SIGN_IN_WITH_E_MAIL_SUCCEEDED:
      console.log(action.payload)
      return {...state, loading: false, error: false}
    case SIGN_IN_WITH_E_MAIL_FAILED:
      console.log(action.error)
      return {...state, loading: false, error: true}
    default:
      return state;
  }
}

export const createUserWithEmailAC = (payload: any) => ({ type: CREATE_USER_WITH_E_MAIL, payload})
export const createUserWithEmailSucceededAC = (payload: any) => ({ type: CREATE_USER_WITH_E_MAIL_SUCCEEDED, payload})
export const createUserWithEmailFailedAC = (error: any) => ({ type: CREATE_USER_WITH_E_MAIL_FAILED, error})

export const signInWithEmailAC = (payload: any) => ({ type: SIGN_IN_WITH_E_MAIL, payload})
export const signInWithEmailSucceededAC = (payload: any) => ({ type: SIGN_IN_WITH_E_MAIL_SUCCEEDED, payload})
export const signInWithEmailFailedAC = (error: any) => ({ type: SIGN_IN_WITH_E_MAIL_FAILED, error})

export default authReducer;