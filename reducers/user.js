const initialState = {
    loading:false,
    IsLogin:false,
}

const USER_LOGIN = "USER_LOGIN";
const USER_LOGOUT = "USER_LOGOUT";
const USER_LOGIN_REQUEST = "UserLogin_REQUEST";
const USER_LOGIN_SUCCESS = "UserLogin_SUCCESS";
const USER_LOGIN_ERROR = "UserLogin_ERROR";

export const UserLoginAction = data => {
    return async (dispatch)=>{
        dispatch(UserLogin_REQUEST())
        try{
            // fetch 성공
            const response = await fetch('http://localhost:3000/api/login',{
                method:'POST',
                headers:{
                    "Content-type":"application/json",
                },
                body:JSON.stringify({...data}),
            }); // promise
            const result = await response.json();
            result.result === 'SUCCESS'
            ? dispatch(UserLogin_SUCCESS(result))
            : dispatch(UserLogin_ERROR);
        } catch (e){
            // error
            dispatch(UserLogin_ERROR());
        }
    }
}

export const UserLogoutAction = () => {
    return{
        type:USER_LOGOUT,
    }
}

export const UserLogin_REQUEST = () => {
    return{
        type:USER_LOGIN_REQUEST,
    }
}

export const UserLogin_SUCCESS = () => {
    return{
        type:USER_LOGIN_SUCCESS,
    }
}

export const UserLogin_ERROR = () => {
    return{
        type:USER_LOGIN_ERROR,
    }
}

const reducer = (state=initialState,action) => {
    switch(action.type){
        case USER_LOGIN_REQUEST:
            return{
                ...state,
            }
        case USER_LOGIN_SUCCESS:
            return{
                ...state,
                IsLogin:true,
            }
        case USER_LOGIN_ERROR:
            return{
                ...state,
            }
        default:
            return state;
    }
}

export default reducer;