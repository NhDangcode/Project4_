import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getAllCompanyServices, editCompanyService, addCompanyService } from "../../services/companyServices";

export const companySlice = createSlice({
    name: "company",
    initialState: {
        companies: [],
    },
    extraReducers: (builder) => {
        builder.addCase(getAllCompanyApi.fulfilled, (state, action) => {
            state.companies = action.payload;
        });
    },
});
// Lấy danh sách loại sản phẩm
export const getAllCompanyApi = createAsyncThunk(
    "company/getAllCompany",
    async () => {
        const respone = await getAllCompanyServices();
        return respone.data;
    }
);
//Thêm mới một sản phẩm
export const addCompanyApi = (formData, navigate) => {
    return async (dispatch) => {
        try {
            const result = await addCompanyService(formData);

            await dispatch(getAllCompanyApi());
            navigate("/admin/companies");
        } catch (error) {
            console.log(error);
        }
    };
};
//Chỉnh sửa loại sản phẩm
export const editCompanytApi = (formData, navigate) => {
    return async (dispatch) => {
        try {
            const result = await editCompanyService(formData);
            dispatch(getAllCompanyApi());
            navigate("/admin/companies");
        } catch (error) {
            console.log(error);
        }
    };
};
