import React, { useEffect, useState } from 'react';
import dayjs from "dayjs";

const Clock = (props) => {

    const[second, setSecond] = useState();
    const[minute, setMinute] = useState();
    const[hour, setHour] = useState();
    const[day, setDay] = useState();
   
    const EndTime = props.EndTime;

    const RemainTime = (end) => {
        console.log(end);

        let Current = dayjs(new Date());        
        let End = dayjs(new Date(end));         
        let second = End.diff(Current, "second");  

        if(second >= 0) {
            setSecond(Math.floor(second % 60));
            setMinute(Math.floor((second / 60) % 60));
            setHour(Math.floor((second / 60) / 60) % 24);
            setDay(Math.floor(((second / 60) / 60) / 24));
        }
        else {
            setSecond(0);
            setMinute(0);
            setHour(0);
            setDay(0);
        }
    }

    setInterval(RemainTime, 1000, EndTime);
      
    return(
        <div>
            남은시간: {day}일 {hour}시간 {minute}분 {second}초
        </div>
    )
}

export default Clock;