import _ from "../../../config/env"

/**
 * @description login 
 * @method POST
 * @request @headers 
 * @request @body user
 * @response
 */


const post_login = (loginInfo)=>{
 
    console.log(loginInfo)
        return( fetch(_.SERVER_URL + "/auth/signin", {
            method: 'POST',
            headers : {
                'Content-Type': 'application/json',
            },
            body:loginInfo,
        })
        .then((res)=> {
            if(res.status===500) throw Promise.resolve({errorCode: 500, errorName: "Server error"})
            if(!res.ok) throw res.json()
            console.log(res)
            return res.json()
        })
        .catch(async(error)=>{
            let err = await error.then()
            console.log(err)
            console.log("Error from  log_in\n"+err.message+"\n success : "+err.success)
            throw err;
        })
     //}
        )
 }

 export default post_login