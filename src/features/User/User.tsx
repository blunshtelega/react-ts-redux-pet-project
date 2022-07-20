import React, { useState } from 'react';

import { useAppSelector, useAppDispatch } from '../../common/hooks/hooks';
import { setIsAuth } from './UserSlice';

export function User() {
  // const isAuth = useAppSelector(selectUser);
  const dispatch = useAppDispatch();
  // const isAuth = useAppSelector(state => state.user)

  return (
    <div>
        {/* <button onClick={() => dispatch(setIsAuth(true))}>CHANGE VALUE</button> */}
    </div>
  );
}