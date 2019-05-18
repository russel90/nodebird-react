import React, { useState } from "react";
import Head from "next/head";
import { Form, Input, Checkbox, Button } from "antd";
import AppLayout from "../components/AppLayout";

const Signup = () => {
  const [id, setId] = useState("");
  const [nick, setNick] = useState("");
  const [password, setPassword] = useState("");
  const [passwordCheck, setPasswordCheck] = useState("");
  const [term, setTerm] = useState(false);
  const [passwordError, setPasswordError] = useState(false);
  const [termError, setTermError] = useState(false);

  const useInput = (initValue = null) => {
    const [value, setter] = useState(initValue);
    const handler = e => {
      setter(e.target.value);
    };
    return [value, handler];
  };

  const [id, onChangeId] = useInput("");
  const [nick, onChangeNick] = useInput("");
  const [password, onChangePassword] = useInput("");
  const [passwordCheck, onChangePasswordCheck] = useInput("");

  const onSubmit = e => {
    e.preventDefault();

    if (password !== passwordCheck) {
      return setPasswordError(true);
    }

    if (!term) {
      return setTermError(true);
    }

    console.log({
      id,
      nick,
      password,
      passwordCheck,
      term
    });
  };
  const onChangeId = e => {
    setId(e.traget.value);
  };
  const onChangeNick = e => {
    setNick(e.traget.value);
  };
  const onChangePassword = e => {
    setPassword(e.target.value);
  };
  const onChangePasswordCheck = e => {
    setPasswordCheck(e.target.value);
    setPasswordError(e.target.value !== password);
  };
  const onChangeTerm = e => {
    setTerm(e.target.checked);
    setTermError(false);
  };

  return (
    <>
      <Head>
        <title>NodeBird</title>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/antd/3.18.1/antd.css"
        />
        <script src="https://cdnjs.cloudflare.com/ajax/libs/antd/3.18.1/antd.js" />
      </Head>
      <AppLayout>
        <Form onSubmit={onSubmit} style={{ padding: 10 }}>
          <div>
            <label htmlFor="user-id">아이디</label>
            <br />
            <Input name="user-id" required onChange={onChangeId} />
          </div>
          <div>
            <label htmlFor="user-nick">닉네임</label>
            <br />
            <Input name="user-nick" required onChange={onChangeNick} />
          </div>
          <div>
            <label htmlFor="user-password">비밀번호</label>
            <br />
            <Input
              name="user-password"
              type="password"
              required
              onChange={onChangePassword}
            />
          </div>
          <div>
            <label htmlFor="user-password-check">비밀번호확인</label>
            <br />
            <Input
              name="user-password-check"
              type="password"
              required
              onChange={onChangePasswordCheck}
            />
          </div>
          <div>
            <label htmlFor="user-term">개인정보 제공에 동의합니다.</label>
            <br />
            <Checkbox
              name="user-term"
              // value={term}
              required
              onChange={onChangeTerm}
            />
          </div>
          <div>
            <Button type="primary" htmlType="submit">
              가입하기
            </Button>
          </div>
        </Form>
      </AppLayout>
    </>
  );
};

export default Signup;
