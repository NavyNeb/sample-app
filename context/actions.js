export default ({ email, password }) => (dispatch) => {
    dispatch({
        type: "LOADING"
    })

    axios.post("/api/login/", { email, password })
        .then((res)=> {
            if ( res.ok ) {
                dispatch({
                    type: "LOGIN_SUCCESS",
                    payload: res.data
                })
            }
        })
        .catch((err) => {
            dispatch({
                type: "LOGIN_FAIL",
                payload: err
            })
        })
}