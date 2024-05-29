 //Authentication Quick start
const Auth = (()=>{
    const login = (username) =>{
        localStorage.setItem('user', username)
    }

    const logout = ()=>{
        localStorage.removeItem('user')
    } 

    const getUser = () =>{
        return localStorage.getItem('user')
    }

    return {login, logout , getUser}
})(); // IIFE

export default Auth;