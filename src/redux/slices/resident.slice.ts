import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchResident = createAsyncThunk<
  IUser[],
  void,
  { rejectValue: string }
>("resident/fetch", async (_, { rejectWithValue }) => {
  const response = await fetch(`http://localhost:3000/user`);
  const data = await response.json();
  if (response.status < 200 || response.status >= 300) {
    return rejectWithValue(data);
  }
  return data;
});
// get resident by id in state
export const fetchResidentById = createAsyncThunk<
  IUser,
  number,
  { rejectValue: string }
>("resident/fetchById", async (id, { rejectWithValue, getState }) => {
  const state = getState() as any;
  const response = await fetch(`http://localhost:3000/user/${id}`);
  let data = await response.json();
  if (response.status < 200 || response.status >= 300) {
    return rejectWithValue(data);
  }
  console.log("state", state);
  // if(state.resident.userProfile?.listMedication?.length > 0) {
  //   data = {...data, listMedication: state.resident.userProfile?.listMedication}
  // }
  // combine list medication 
  
  return data;
});
// add new list medication
export const addNewListMedication = createAsyncThunk("resident/addNewListMedication", async () => {
  // const response = await fetch(`http://localhost:3000/user/${id}`, {
  //     method: 'PUT',
  //     headers: {
  //         'Content-Type': 'application/json'
  //     },
  //     body: JSON.stringify({ listMedication })
  // })
  // const data = await response.json()
  // if (response.status < 200 || response.status >= 300) {
  //     return rejectWithValue(data)
  // }
  // return data
  const data = {
    id: 6,
    name: "Akineton22 2mg Tablet",
    description: "Biperiden HCL",
    routes: "O",
    takeMedicines: "One four times a day ",
    times: "08:00, 12:00, 17:00, 20:00",
    startDate: "06/05/2020",
    scriptNumber: "22890",
    crush: "",
  };
  return data;
});
interface IUser {
  id: number;
  title: string;
  gender: string;
  dayOfBirth: string;
  room: 37;
  medicaneNo: string;
  section: string;
  RACID: string;
  facility: string;
  doctor: string;
  expiryDate: string;
  imageSrc?: string;
  listMedication: any;
}

export interface UserState {
  users: IUser[];
  userProfile: IUser | null;
}

const initialState: UserState = {
  users: [],
  userProfile: null,
};

export const residentSlice = createSlice({
  name: "resident",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchResident.fulfilled, (state, action) => {
        state.users = action.payload;
      })
      .addCase(fetchResidentById.fulfilled, (state, action) => {
        // Check if stat has list medication then use it
        console.log("action.payload", action.payload);
        console.log("state.userProfile", state.userProfile);
        if(state.userProfile?.listMedication?.length as any > 0) {
          action.payload = {...action.payload, listMedication: state.userProfile?.listMedication}
        }
        state.userProfile = action.payload;
      }).addCase(addNewListMedication.fulfilled, (state, action) => {
        state.userProfile?.listMedication?.push(action.payload);
      });
  },
});

// Action creators are generated for each case reducer function

export default residentSlice.reducer;
