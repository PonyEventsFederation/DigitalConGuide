export const FOOTER_DATA_END = "FOOTER_DATA_END";
export const FOOTER_LOADING = "FOOTER_LOADING";

export const setData = (data) => {
    return {
        type: FOOTER_DATA_END,
        data
    }
};

export const setLoading = () => {
    return {
        type: FOOTER_LOADING
    }
};