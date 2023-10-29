const auth = ( state, { type, payload } ) => {
    switch (type) {
        case "LOADING":
            return {
                ...state,
                loading: true
            }
        
        case "LOGIN_SUCCESS":
            return {
              ...state,
                user: payload,
                loading: false
            }

        case "LOGIN_FAIL":
            return {
             ...state,
               error: payload,
               loading: false
            }
    
        default:
            return state;
    }
}

export default auth;