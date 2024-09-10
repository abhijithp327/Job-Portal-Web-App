export const formatDate = (mongooseTime) => {
    const createdAt = new Date(mongooseTime);
    const currentDate = new Date();
    const diffTime = Math.abs(currentDate - createdAt);
    return Math.floor(diffTime / (1000 * 24 * 60 * 60));
};