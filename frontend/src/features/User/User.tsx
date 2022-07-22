import axios from 'axios';
import React, { useEffect, useState } from 'react';

import { useAppSelector, useAppDispatch } from '../../common/hooks/hooks';
import { setIsAuth, UserState } from './UserSlice';

export function User() {
    const [users, setUsers] = useState<any[]>([])

    // useEffect(() => {
    //     fetchUsers()
    // }, [])

    async function fetchUsers() {
        try {
            const response = await axios.get<any[]>('http://localhost:3000/products/getall')
            setUsers(response.data)
            console.log(response.data)
        } catch (e) {
            console.log(e);
        }
    }

    return (
        <div>
            <button onClick={() => fetchUsers()}>TEST BACKEND</button>
        </div>
    );
}