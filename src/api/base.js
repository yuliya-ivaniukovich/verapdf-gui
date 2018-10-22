export const handleResponse = response => {
    if (!response.ok) {
        return response.json().then(error => {
            alert(error.message);
            throw new Error(error.message);
        });
    }
    return response.json();
};