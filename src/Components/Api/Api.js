import axios from 'axios';

const url = 'http://localhost:3000';

export const addUser = async(data)=>{
    try {
       const response = await axios.post(`${url}/add`,data);
       console.log(response)
     
    } catch (error) {

        console.log("error while calling add api",error.message);
        return error.message ;
        
    }
}