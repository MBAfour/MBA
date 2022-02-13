import _ from "../../../config/env";

/**
 * @description 유저정보 받아오기
 * @method GET
 * @request @headers  SoTong-token
 * @response
 */

const get_userInfo = () => {
  return fetch(_.SERVER_URL + "/member/status", {
    method: "GET",
    headers: {
      Authorization: "Bearer " + localStorage.getItem("mba-token"),
    },
  })
    .then((res) => {
      if (res.status === 500)
        throw Promise.resolve({ errorCode: 500, errorName: "Server error" });
      if (!res.ok) throw res.json();
      console.log(res);
      return res.json();
    })
    .catch(async (error) => {
      let err = await error.then();
      console.log(err);
      console.log(
        "Error from  get_userInfo\n" +
          err.message +
          "\n success : " +
          err.success
      );
      throw err;
    });
  //}
};

export default get_userInfo;