
import axios from 'axios';


const api = "https://b1a9c65d.ngrok.io"
 class RequestHandler  {

    constructor(){


     }

/**
 * Returns axios promise
 * Params:
 *  mail: students email
 *  token: a pushtoken generated by expo
 * Returns: error if error. Returns user object if no errors 
 * 
 * TODO: improve error handling
 */
     handleSignIn = async(mail,token)=>{//returns axios promise. 
        let endpoint = api+'/student/login'+"/"+mail+"/"+token;
        console.log(endpoint)
       try{

        let response = await axios.get(endpoint);
        return response.data;
       }catch(error){
           console.log("ERROR", error)
        return null;
       }
    
     
    
    }

    fetchMessages = async(mail,timestamp)=>{//returns axios promise. 

        if(!timestamp){timestamp=0}

        let endpoint = api+'/msg/'+"/"+mail+"/"+timestamp;
        console.log(endpoint)
       try{

        let response = await axios.get(endpoint);
        return response.data;
       }catch(error){
           console.log("ERROR", error)
        return null;
       }
    
     
    
    }



}

export default new RequestHandler();