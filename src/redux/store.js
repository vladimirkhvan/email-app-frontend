import { configureStore } from '@reduxjs/toolkit';

import mail from './mail/slice';
import user from './user.slice';

export const store = configureStore({
    reducer: {
        mail,
        user,
    },
});
