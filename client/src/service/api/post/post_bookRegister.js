import _ from "../../../config/env";

/**
 * @description  책 등록 폼 제출 
 * @method POST
 * @request @headers 
 * @request @body registerInfo
 * @response
 */

const post_bookRegister = (registerInfo) => {

  console.log("registerInfo");
  console.log(typeof registerInfo);

  return fetch(_.SERVER_URL + "/book", {  //request
    method: "POST",
    headers: {
      "Authorization": "Bearer " + localStorage.getItem("mba-token"),
      "content-Type": "application/json",
    },
    body: registerInfo,
  })
    .then((res) => {  //response
      if (res.status === 500)
        throw Promise.resolve({ errorCode: 500, errorName: "Server error" });
      if (!res.ok)
        throw res.json();
      console.log(res);
      return res.json();
    })
    .catch(async (error) => {
      let err = await error.then()
      console.log(err)
      console.log("Error from  log_in\n" + err.message + "\n success : " + err.success)
      throw err;
    });
};

export default post_bookRegister;