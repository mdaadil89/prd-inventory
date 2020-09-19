import axios from 'axios';
import { createBrowserHistory } from 'history';
 const history = createBrowserHistory();

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
            
            let url = 'http://localhost:4000/users/'
        
            return  axios.get(url)
                .then( res => { console.log('In Login Api Call', res.data)
                   return  res.data.filter( user => 
                    user.email===email && 
                    user.password===password)

            } )
                .then(user => {
                    // store user details and jwt token in local storage to keep user logged in between page refreshes
                    console.log('In 2nd part of  Api Call', user[0])
                    return user[0];
                });
        }
        
        static logout() {
            console.log('In api of logout')
            localStorage.removeItem('user');
            console.log(localStorage.removeItem('user'))
            history.push('/products/')
        }

        //  handleResponse(response) {
        //     return response.text().then(text => {
        //         const data = text && JSON.parse(text);
        //         if (!response.ok) {
        //             if (response.status === 401) {
        //                 // auto logout if 401 response returned from api
        //                 this.logout();
        //                 //location.reload(true);
        //             }
        
        //             const error = (data && data.message) || response.statusText;
        //             return Promise.reject(error);
        //         }
        
        //         return data;
        //     });
        // }

     
}