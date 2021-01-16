import React, { useState, useCallback, useMemo, useEffect } from 'react';
import { Form, Input, Button } from 'antd';
import Link from 'next/link';
import styled from 'styled-components';
import useInput from '../hooks/useInput';
import { useDispatch, useSelector } from 'react-redux';
import { loginRequestAction } from '../reducers/user';

const ButtonWrapper = styled.div`
    margin-top: 10px;
`;   //이거 싫으면 :24 & ButtonWrapper에 style={style}추가

const FormWrapper = styled(Form)`
    padding: 10px;
`;

const LoginForm = ({ setIsLoggedIn }) => {
    const dispatch = useDispatch();
    const { logInLoading, logInError } = useSelector((state) => state.user);
    const [email, onChangeEmail] = useInput('');  //아래를 ../hooks/useInput 커스텀 훅으로 한방에
    // const [id, setId] = useState('');
    // const onChangeId = useCallback((e) => {
    //     setId(e.target.value);
    // }, []);
    const [password, onChangePassword] = useInput('');

    //const style = useMemo(() => ({ marginTop: 10 }), []);

    useEffect(() => {
        if (logInError) {
            alert(logInError);
        }
    }, [logInError]);

    const onSubmitForm = useCallback(() => {    //antd 에서는 onFinish에 e.preventDefault() 가 이미 적용되어 있어서 여기는 안한다.
        console.log(email, password);
        dispatch(loginRequestAction({ email, password }));
    }, [email, password]);

    return (
        <>
           
            <FormWrapper onFinish={onSubmitForm}>  {/* button htmlType="submit"을 누르면 Form onFinish 동작 */}
                <div>
                    <label htmlFor="user-email">이메일</label>
                    <br />
                    <Input name="user-email" type="email" value={email} onChange={onChangeEmail} required />
                </div>
                <div>
                    <label htmlFor="user-password">비밀번호</label>
                    <br />
                    <Input 
                        name="user-password" 
                        type="password" 
                        value={password} 
                        onChange={onChangePassword} 
                        required 
                    />
                </div>
                <ButtonWrapper>
                    <Button type="primary" htmlType="submit" loading={logInLoading}>로그인</Button>
                    <Link href="/signup"><a><Button>회원가입</Button></a></Link>
                </ButtonWrapper>
            </FormWrapper>
        </>
    );
};

export default LoginForm;