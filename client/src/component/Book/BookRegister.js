import React, { useState } from 'react';
import "antd/dist/antd.min.css";
import { Form, Input, DatePicker, Button } from "antd";
import bookRegisterProcess from "../../service/transaction/bookRegister_process";
import { useNavigate } from "react-router-dom";

const config = { //error message
  rules: [
    {
      type: "object",
      required: false,
      message: "Please select time!"
    }
  ]
};
const formItemLayout = {
  labelCol: {
    xs: {
      span: 18
    },
    sm: {
      span: 8
    }
  },
  wrapperCol: {
    xs: {
      span: 18
    },
    sm: {
      span: 16
    }
  }
};
const tailFormItemLayout = {
  wrapperCol: {
    xs: {
      span: 24,
      offset: 0
    },
    sm: {
      span: 16,
      offset: 8
    }
  }
};

const BookRegister = () => {
  const [form] = Form.useForm();
  const navigate = useNavigate();
  const onFinish = (fieldsValue) => {
    const values = {
      ...fieldsValue,
      "startDay-picker": fieldsValue["startDay-picker"].format("YYYY-MM-DD"),
      "endDay-picker": fieldsValue["endDay-picker"].format("YYYY-MM-DD")
    };
    console.log("Received values of form: ", values);
  };

  /**
  * @description 책 등록시 필요한 data */
  const [bookTitleSearch, setBookTitleSearch] = useState('');

  const handleTitleSearch = (e) => {
    setBookTitleSearch(e.target.value);
  }
  // const [bookApiInfo, setBookApiInfo] = useState({
  //   title: "",
  //   author: [],
  //   publisher: "",
  //   thumbnail: "",
  // });
  // const searchClick = () => {
  //   axios.get('http://localhost:8080/book/info/search?query=' + bookTitleSearch)
  //     .then(response => {
  //       setBookApiInfo(response.data);
  //     });
  // }

  const [bookRegisterInfo, setBookRegisterInfo] = useState({
    title: "",
    author: [],
    publisher: "",
    status: "",
    lectureName: "",
    professorName: "",
    increasePrice: "",
    rowPrice: "",
    startDay: null,
    endDay: null,
    thumbnail: "",
  });

  let settingBookSearchFunction = {
    bookTitle: (e) => {
      const bookTitle = e.target.value;
      return setBookTitleSearch((state) => ({ ...state, bookTitle: bookTitle }));
    }
  }
  let settingBookRegisterFunction = {
    title: (e) => { //////
      const title = e.target.value;
      return setBookRegisterInfo((state) => ({ ...state, title: title }));
    },
    author: (e) => {  //////
      const author = e.target.value;
      return setBookRegisterInfo((state) => ({ ...state, author: author }));
    },
    publisher: (e) => { //////
      const publisher = e.target.value;
      return setBookRegisterInfo((state) => ({ ...state, publisher: publisher }));
    },
    status: (e) => {
      const status = e.target.value;
      return setBookRegisterInfo((state) => ({ ...state, status: status }));
    },
    lectureName: (e) => {
      const lectureName = e.target.value;
      return setBookRegisterInfo((state) => ({ ...state, lectureName: lectureName }));
    },
    professorName: (e) => {
      const professorName = e.target.value;
      return setBookRegisterInfo((state) => ({ ...state, professorName: professorName }));
    },
    increasePrice: (e) => {
      const increasePrice = e.target.value;
      return setBookRegisterInfo((state) => ({ ...state, increasePrice: increasePrice }));
    },
    rowPrice: (e) => {
      const rowPrice = e.target.value;
      return setBookRegisterInfo((state) => ({ ...state, rowPrice: rowPrice }));
    },
    startDay: (e) => {
      return setBookRegisterInfo((state) => ({ ...state, startDay: e }));
    },
    endDay: (e) => {
      return setBookRegisterInfo((state) => ({ ...state, endDay: e }));
    },
    thumbnail: (e) => { //////
      const thumbnail = e.target.value;
      return setBookRegisterInfo((state) => ({ ...state, thumbnail: thumbnail }));
    },
  };

  const bookRegisterBtn = () => {
    bookRegisterProcess(bookRegisterInfo);

    setBookRegisterInfo({
      title: "",
      author: [],
      publisher: "",
      status: "",
      lectureName: "",
      professorName: "",
      increasePrice: "",
      rowPrice: "",
      startDay: null,
      endDay: null,
      thumbnail: "",
    });

    navigate("/");
  };


  return (
    // <Form name="time_related_controls" {...formItemLayout} onFinish={onFinish}>
    <div>
      <Form
        {...formItemLayout}
        form={form}
        name="register"
        onFinish={onFinish}
        scrollToFirstError
        style={{
          margin: 100,
          padding: 80
        }}
      >
        <h1 style={{ padding: 50, textAlign: "center" }}>Book Register</h1>
        <Form.Item
          name="bookSearch"
          label="BookSearch"
          rules={[
            {
              required: true,
              message: "Please input your BookSearch!"
            }
          ]}
          style={{
            width: 600,
            marginLeft: 230
          }}
        >
          <Input
            name="search"
            placeholder="검색어를 입력 하세요..."
            onChange={settingBookSearchFunction.title}
            value={bookTitleSearch.title} />

        </Form.Item>

        <Form.Item {...tailFormItemLayout}>
          <Button type="primary"> Search </Button>
        </Form.Item>

        <Form.Item
          name="title"
          label="Title"
          rules={[
            {
              required: true,
              message: "Please input your Title!"
            }
          ]}
        >
          <Input onChange={settingBookRegisterFunction.title} value={bookRegisterInfo.title} />
        </Form.Item>

        <Form.Item
          name="authors"
          label="Authors"
          rules={[
            {
              required: true,
              message: "Please input your Authors!"
            }
          ]}
        >
          <Input onChange={settingBookRegisterFunction.author} value={bookRegisterInfo.author} />
        </Form.Item>

        <Form.Item
          name="publisher"
          label="Publisher"
          rules={[
            {
              required: true,
              message: "Please input your Publisher!"
            }
          ]}
        >
          <Input onChange={settingBookRegisterFunction.publisher} value={bookRegisterInfo.publisher} />
        </Form.Item>

        <Form.Item
          name="status"
          label="Status"
          rules={[
            {
              required: true,
              message: "Please input Status"
            }
          ]}
        >
          <Input.TextArea showCount maxLength={200} onChange={settingBookRegisterFunction.status} value={bookRegisterInfo.status} />
        </Form.Item>

        <Form.Item
          name="lectureName"
          label="LectureName"
          rules={[
            {
              required: true,
              message: "Please input your LectureName!"
            }
          ]}
        >
          <Input onChange={settingBookRegisterFunction.lectureName} value={bookRegisterInfo.lectureName} />
        </Form.Item>

        <Form.Item
          name="professorName"
          label="ProfessorName"
          rules={[
            {
              required: true,
              message: "Please input your ProfessorName!"
            }
          ]}
        >
          <Input onChange={settingBookRegisterFunction.professorName} value={bookRegisterInfo.professorName} />
        </Form.Item>

        <Form.Item
          name="increasePrice"
          label="IncreasePrice"
          rules={[
            {
              required: true,
              message: "Please input your IncreasePrice!"
            }
          ]}
        >
          <Input onChange={settingBookRegisterFunction.increasePrice} value={bookRegisterInfo.increasePrice} />
        </Form.Item>

        <Form.Item
          name="rowPrice"
          label="RowPrice"
          rules={[
            {
              required: true,
              message: "Please input your RowPrice!"
            }
          ]}
        >
          <Input onChange={settingBookRegisterFunction.rowPrice} value={bookRegisterInfo.rowPrice} />
        </Form.Item>

        <Form.Item name="startDay-picker" label="StartDay" {...config} >
          <DatePicker onChange={settingBookRegisterFunction.startDay} value={bookRegisterInfo.startDay} />
        </Form.Item>
        <Form.Item name="endDay-picker" label="EndDay" {...config}>
          <DatePicker onChange={settingBookRegisterFunction.endDay} value={bookRegisterInfo.endDay} />
        </Form.Item>


        <Form.Item
          name="thumbnail"
          label="Thumbnail"
          rules={[
            {
              required: true,
              message: "Please input your Thumbnail!"
            }
          ]}
        >
          <Input onChange={settingBookRegisterFunction.thumbnail} value={bookRegisterInfo.thumbnail} />
        </Form.Item>

        <Form.Item {...tailFormItemLayout}>
          <Button
            type="primary"
            onClick={bookRegisterBtn}
          > Register  </Button>
        </Form.Item>
      </Form>
    </div >

  );
};

export default BookRegister;