import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    room: null,
    
};

const getSlice = createSlice({
    name: 'getRoom',
    initialState,

    reducers: {
        setRooms: (state, action) => {
            state.room = action.payload
        },
    }
});

export const {
    setRooms,

} = getSlice.actions;
export default getSlice.reducer;