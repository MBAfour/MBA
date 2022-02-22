import Axios from "axios";

const api = Axios.create({
  baseURL: "http://localhost:8080/",
});

const chatAPI = {
    /*
  getMessages: (groupId) => {
    console.log("Calling get messages from API");
    return api.get(`/messages/${groupId}`, {
        headers: {
            Authorization : "Bearer " + localStorage.getItem("mba-token"), 
          }
    });
  },*/

  sendMessage: (username, text, bookId) => {
    let msg = {
      author: username,
      content: text,
      bookId: bookId,
    };
    console.log("Calling send messages from API");
    return api.post(`/publish`, msg, {
      headers: { 
          "Content-Type": "application/json",
          Authorization : "Bearer " + localStorage.getItem("mba-token"),
        },
    });
  },
};

export default chatAPI;