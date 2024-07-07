import requestApi from "../utils/requestApi";

export const getAllCompanyServices = async () => {
    try {
        const respone = await requestApi({
            url: "company/all",
            method: "get",
        });
        return respone.data;
    } catch (error) {
        return error;
    }
};
export const addCompanyService = (formData) => {
    return requestApi({
        url: "company/add",
        method: "post",
        data: JSON.stringify(formData),
        headers: {
            "Content-Type": "application/json"
        },
    });
};
export const deleteCompanyServices = async (id) => {
    try {
        const respone = await requestApi({
            url: "company/delete",
            method: "delete",
            data: JSON.stringify(id),
            headers: {
                "Content-Type": "application/json"
            },
        });
        return respone.data;
    } catch (error) {
        return error;
    }
};
export const editCompanyService = (formData) => {
    return requestApi({
        url: `company/edit`,
        method: "put",
        data: JSON.stringify(formData),
        headers: {
            "Content-Type": "application/json"        },
    });
};

