import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { User } from '../../Types/User';

interface UserState {
  users: User[]
  error: string | null
}
const initialState: UserState = {
  users: [],
  error: null
}


export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    putUser: (state, action: PayloadAction<User[]>) => {
      state.users = action.payload
    }
  }

})

export default userSlice.reducer
export const { putUser } = userSlice.actions