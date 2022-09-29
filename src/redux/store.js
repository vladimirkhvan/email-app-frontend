import { configureStore } from '@reduxjs/toolkit';

import user from './user/slice.js';

export const store = configureStore({
    reducer: {
        user,
    },
});
