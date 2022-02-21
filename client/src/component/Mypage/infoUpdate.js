import React, { useEffect, useState } from 'react';
import styles from "./Mypage.module.css";
import axios from "axios";
import _ from "../../config/env";

function InfoUpdate() {

  //정보 담는 객체
  const [memInfo, setMemInfo] = useState({
    studentId: '',
    name: '',
    email: '',
    phone: '',
  });

  useEffect(() => {
    async function getData() {
      const response = await axios
        .get(_.SERVER_URL + `/member/status`, {
          headers: {
            Authorization: "Bearer " + localStorage.getItem("mba-token"),
          }
        }
        )
        .then(({ data }) => setMemInfo(data.response))
        .catch((err) => { })
    }
    getData();
  }, []);

  ///////////////

  return (
    <div className={styles.wrap}>
      <div className={styles.formWrap}>
        <div className={styles.label}>
          <label htmlFor="studentId">학번</label>
          <label htmlFor="name">이름</label>
          <label htmlFor="email">이메일</label>
          <label htmlFor="phone">휴대폰</label>
        </div>

        <div className={styles.input}>
          <>
            <input type="text" name="studentId" id="studentId" value={memInfo.studentId} readOnly disabled />

            <input type="text" name="name" id="name" value={memInfo.name} readOnly disabled />

            <input type="text" name="email" id="email" value={memInfo.email} readOnly disabled />

            <input type="text" name="tel" id="tel" value={memInfo.phone} readOnly disabled />
          </>
        </div>
      </div>
      <div className={styles.clear}></div>
    </div>
  );
}

export default InfoUpdate;