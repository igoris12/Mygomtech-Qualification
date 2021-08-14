
const logout = (): void => {
    localStorage.removeItem("token");
    location.replace('http://localhost:8080/login');
};

export default logout;