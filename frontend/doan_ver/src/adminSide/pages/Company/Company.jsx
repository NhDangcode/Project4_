import React from "react";
import { Table } from "antd";
import { useSelector, useDispatch } from "react-redux";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { deleteCompanyServices } from "../../../services/companyServices";
import { getAllCompanyApi } from "../../../redux/slices/companySlice";

export default function Company() {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const listProduct = useSelector((state) => state.company.companies);

    const onDelete = async (id) => {
        try {
            const result = await deleteCompanyServices(id);
            if (result.status === 200) {
                toast.success("Xóa thành công!");
                await dispatch(getAllCompanyApi());
                navigate("/admin/companies");
            } else {
                toast.error("Xóa thất bại!");
            }
        } catch (error) {
            toast.error("Có lỗi xảy ra!");
            console.error("Delete error:", error);
        }
    };

    const columns = [
        {
            title: "ID",
            key: "index",
            render: (_, __, index) => index + 1,
        },
        {
            title: "Tên nhà xuất bản",
            key: "name",
            dataIndex: "name",
        },
        {
            title: "Hastag",
            dataIndex: "htag",
            key: "htag",
        },
        {
            title: "Hành động",
            key: "action",
            render: (_, record) => (
                <>
                    <Button
                        variant="contained"
                        color="warning"
                        sx={{ marginLeft: "4px" }}
                        onClick={() => {
                            navigate(`/admin/company/edit/${record.id}`, {
                                state: record,
                            });
                        }}
                    >
                        Chỉnh sửa
                    </Button>
                    <Button
                        variant="contained"
                        color="error"
                        sx={{ marginLeft: "4px" }}
                        onClick={() => onDelete(record.id)}
                    >
                        Xóa
                    </Button>
                </>
            ),
        },
    ];

    const rows = listProduct.length > 0 ? listProduct : [];

    return (
        <>
            <div
                style={{
                    display: "flex",
                    justifyContent: "space-between",
                    margin: "50px",
                }}
            >
                <h1 className="admin-h1">Danh sách nhà xuất bản</h1>
                <Button
                    style={{
                        marginRight: "100px",
                        padding: "10px",
                    }}
                    color="success"
                    variant="contained"
                    onClick={() => {
                        navigate("/admin/company/add");
                    }}
                >
                    Thêm nhà xuất bản
                </Button>
            </div>
            <div style={{ height: "78vh", width: "100%", padding: "0px 20px" }}>
                <Table columns={columns} dataSource={rows} rowKey="id" />
            </div>
        </>
    );
}
