import _ from "../../../config/env"

/** 
 * @description sign up 
 * @method POST
 * @request @headers 
 * @request @body user
 */

 const post_signup = (signupInfo)=>{

    
        return( fetch(_.SERVER_URL + "/auth/signup", {
              method : 'POST',
              headers : {
                'Content-Type': 'application/json',
              },
              body : signupInfo
            })
           .then((res)=>{
            if(res.status===500) throw Promise.resolve({errorCode: 500, errorName: "Server error"})
            if(!res.ok) throw res.json()
            console.log(res)
            return res.json()
           })
            .catch(async(error) =>{
                let err = await error.then()
                console.log(err)
                console.log("Error from  sing-up\n"+err.message+"\n success : "+err.success)
                throw err;
            } )
        )
  }
  
  export default post_signup