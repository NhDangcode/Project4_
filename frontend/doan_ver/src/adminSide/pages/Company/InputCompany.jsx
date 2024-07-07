import React from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addCompanyApi } from "../../../redux/slices/companySlice";
import FromCompany from "./FromCompany";
import { toast } from "react-toastify";

export default function InputCategory() {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const initialValues = {
        name: "",
        slug: "",
    };

    const addCompany = async (formData) => {
        await toast.success("Thêm nhà xuất bản thành công!");
        await dispatch(addCompanyApi(formData, navigate));
    };
    return (
        <div className="container" style={{ padding: "0px 60px" }}>
            <h3 className=""> Thêm nhà xuất bản</h3>
            <FromCompany
                initialData={initialValues}
                submitForm={addCompany}
            />
        </div>
    );
}
