import React from "react";
import { useDispatch } from "react-redux";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import FromCompany from "./FromCompany";
import { toast } from "react-toastify";
import { editCompanytApi } from "../../../redux/slices/companySlice";

export default function EditProduct() {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const { state } = useLocation();
    const editProduct = async (data) => {
        await toast.success("Chỉnh sửa nhà xuất bản thành công!");
        await dispatch(editCompanytApi(data, navigate));
    };
    return (
        <div className="container" style={{ padding: "0px 60px" }}>
            <h2 className="">Chỉnh sửa nhà xuất bản</h2>
            <FromCompany initialData={state} submitForm={editProduct} />
        </div>
    );
}
