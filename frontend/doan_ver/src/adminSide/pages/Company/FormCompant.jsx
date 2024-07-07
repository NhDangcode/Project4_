import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { Button } from "antd";
export default function FromCompany(props) {
    const { initialData, submitForm } = props;
    const formik = useFormik({
        initialValues: {
            ...initialData,
        },

        validationSchema: Yup.object().shape({
            name: Yup.string().required(
                "Tên nhà xuất bản không được để trống!"
            ),
            htag: Yup.string().required("Hastag không được để trống!"),
        }),

        onSubmit: async (values) => {
            submitForm(values);
        },
    });

    const { values, errors, handleChange, handleSubmit } = formik;
    return (
        <div className="container mt-5" style={{ padding: "0px 60px" }}>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <h5 style={{ marginBottom: "10px" }} htmlFor="name_product">
                        Tên nhà xuất bản
                    </h5>
                    <input
                        onChange={handleChange}
                        type="text"
                        className="form-control"
                        id="name_product"
                        name="name"
                        aria-describedby="validationName"
                        value={values.name}
                    />
                    <span className="text-danger">{errors.name}</span>
                </div>

                <div className="form-group">
                    <h5 style={{ marginBottom: "10px" }} htmlFor="price">
                        Hastag nhà xuất bản
                    </h5>
                    <input
                        onChange={handleChange}
                        type="text"
                        className="form-control"
                        id="htag"
                        name="htag"
                        value={values.htag}
                    />
                    <span className="text-danger">{errors.htag}</span>
                </div>
                <Button
                    type="primary"
                    block
                    htmlType="submit"
                    style={{ fontSize: "16px" }}
                >
                    Lưu
                </Button>
            </form>
        </div>
    );
}
