export const handleError = ({ error, event }) => {
    console.error('Server Error:', error);
    return {
        message: 'Server error: ' + (error?.message || 'Unknown error'),
        code: error?.code
    };
};
