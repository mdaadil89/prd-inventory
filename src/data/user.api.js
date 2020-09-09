import axios from 'axios';

export default class UserApi {
        static getAllUsers(){
            return axios.get("http://localhost:4000/users")
            .then(res => res.data);
        }


        static addUser(user) {

            return axios.post('http://localhost:4000/users',user)
             .then(res => res.data)
           }

           static login(email, password) {
            const requestOptions = {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ email, password })
            };
        
            return fetch('http://localhost:4000/users/', requestOptions)
                .then(this.handleResponse)
                .then(user => {
                    // store user details and jwt token in local storage to keep user logged in between page refreshes
                    localStorage.setItem('user', JSON.stringify(user));
        
                    return user;
                });
        }
        
        static logout() {
            // remove user from local storage to log user out
            localStorage.removeItem('user');
        }

         handleResponse(response) {
            return response.text().then(text => {
                const data = text && JSON.parse(text);
                if (!response.ok) {
                    if (response.status === 401) {
                        // auto logout if 401 response returned from api
                        this.logout();
                        //location.reload(true);
                    }
        
                    const error = (data && data.message) || response.statusText;
                    return Promise.reject(error);
                }
        
                return data;
            });
        }

     
}