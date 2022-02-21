import _ from "../../config/env"
/**
 * @description 책등록페이지에서 검색한 책 정보 받아오기
 * @method GET
 * @request @headers  
 * @response
 */

const get_bookInfo = (bookSearch) => {

  return fetch(_.SERVER_URL + `/book/info/search?query=${bookSearch}`, {
    method: 'GET',
    headers: {
      Authorization: "Bearer " + localStorage.getItem("mba-token"),
    }
  })
    .then((res) => {
      if (res.status === 500)
        throw Promise.resolve({ errorCode: 500, errorName: "Server error" })
      if (!res.ok)
        throw res.json()
      console.log(res)
      return res.json() //요청정보를 json객체로 변환하여 반환
    })
    .catch(async (error) => {
      let err = await error.then()
      console.log(err)
      console.log("Error from get_bookInfo\n" + err.message + "\n success : " + err.success)
      throw err;
    })

}

export default get_bookInfo;