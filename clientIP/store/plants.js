// import { createSlice } from "@reduxjs/toolkit";
// import axios from "axios"
// const initialState = {
//     data: [],
//     loading: true,
//     errors: null,
// };

// const token = localStorage.getItem('access_token')

// export const plantSlice = createSlice({
//     name: "plants",
//     initialState,
//     reducers: {
//         getPlantsSuccess: (state, action) => {
//             state.data = action.payload;
//         },
//         isError: (state, action) => {
//             state.errors = action.payload
//         },
//         isLoading: (state, action) => {
//             state.loading = action.payload;
//         },
//     }
// });

// export const { getPlantsSuccess, isError, isLoading } = plantSlice.actions

// export default plantSlice.reducer

// export const fetchPlants = () => {
//     return async (dispatch) => {
//         try {
//             dispatch(isLoading(true));
//             const { data } = await axios({
//                 method: "GET",
//                 url: "http://localhost:3000/plants",
//                 headers: {
//                     Authorization: `Bearer ${token}`
//                 },
                
//             });
//             console.log(data);
            
//             dispatch(getPlantsSuccess(data));
//         } catch (error) {
//             dispatch(isError(error))
//         }
//         finally {
//             dispatch(isLoading(false))
//         }
//     }
// }

// export const fetchPlantById = (id) => {
//     return async (dispatch) => {
//         try {
//             dispatch(isLoading(true));
//             const { data } = await axios({
//                 method: "GET",
//                 url: `http://localhost:3000/plants/${id}`,
//                 headers: {
//                     Authorization: `Bearer ${token}`
//                 }
//             });
//             dispatch(getPlantsSuccess(data))
//         } catch (error) {
//             dispatch(isError(error))
//         }
//     }

// }