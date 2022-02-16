import post_bookRegister from "../api/post/post_bookRegister";

const bookRegisterProcess = (bookRegisterInfo) => {

  console.log(bookRegisterInfo)

  post_bookRegister(JSON.stringify(bookRegisterInfo))
    .then((res) => {
      console.log(res)
      console.log("책 등록 성공")
    })
    .catch(err => console.log(err))
}


export default bookRegisterProcess