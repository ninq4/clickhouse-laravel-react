export const formatImage = (image: string) => {
    return `${window.location.origin}/assets/${image}`;
};
export const getStorageImage = (image: string) => {
    return `storage/${image}`;
};
