import React, { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../common/hooks/hooks';
import { REGISTRATION_ROUTE, AUTH_ROUTE } from '../../common/utils/constant'
import { Button } from '../../components/UI/Button/Button';
import { Input } from '../../components/UI/Input/Input';
import { setIsAuth } from '../../features/User/UserSlice';

export interface IAuthProps {

}

export function Auth() {    
    const location = useLocation()
    const isLogin = location.pathname === AUTH_ROUTE
    const navigate = useNavigate();

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const onEmailChange = (e: any) => setEmail(e.target.value)
    const onPasswordChange = (e: any) => setPassword(e.target.value)

    const isAuth = useAppSelector(state => state.user);
    const dispatch = useAppDispatch();

    const login = (event: any) => {
        event.preventDefault()
        console.log(isAuth)
        dispatch(setIsAuth(true))
        navigate('/')
    }

    return (
        <div className='auth'>
            <h1 className='auth__title'>{isLogin ? 'Авторизация' : 'Регистрация'}</h1>
            <form className='auth__form' onSubmit={login}>
                <Input 
                    type="text" 
                    placeholder="Введите логин"
                    value={email}
                    onChange={onEmailChange}
                    className='auth__input'
                />
                <Input 
                    type="password" 
                    placeholder="Введите пароль"
                    value={password}
                    onChange={onPasswordChange}
                    className='auth__input'
                /> 
            <Button className="auth__button">ВОЙТИ</Button>
            </form>
            <div>{
                isLogin ?
                <h1>Нет акаунта? <Link to={REGISTRATION_ROUTE}>Зарегестрируйся</Link></h1>
                :
                <h1>Есть акаунт? <Link to={AUTH_ROUTE}>Войдите</Link></h1>  
            }</div>
        </div>
    )
}
