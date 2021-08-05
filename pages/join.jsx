import FormLayout from "../components/FormLayout";
import Head from 'next/head';
import useInput from "../hooks/useInput";
import { useState } from "react";

const Join = () => {

    const userid = useInput('');
    const username = useInput('');
    const userphone = useInput('');
    const password = useInput('');

    const [passwordCheck,setPasswordCheck] = useState('');
    const [passwordError,setPasswordError] = useState(false);

    const handlePassword = e => {
        const {value} = {...e.target};
        setPasswordError(password.value !== value);
        setPasswordCheck(value);
    }

    const [term,setTerm] = useState(false);
    const [termError,setTermError] = useState(false);

    const handleTerm = e => {
        setTermError(e.target.checked !== true);
        setTerm(e.target.checked);
    }

    const handleSubmit = e => {
        e.preventDefault();
        if (passwordError.value !== passwordCheck){
            setPasswordError(true);
            return;
        } else{
            setPasswordError(false);
        }
        if(!term){
            setTermError(true);
            return;
        }

        console.log({
            uesrid:userid.value,
            username:username.value,
            userpw:password.value,
            userphone:userphone.value,
        });

    }
    return(
        <>
            <Head>
                <title>Hwan Blog | 회원가입</title>
            </Head>
            <FormLayout>
                <h2>회원가입</h2>
                <form onSubmit={handleSubmit}>
                    <input type="text" {...userid} placeholder="아이디 입력" /><br />
                    <input type="text" {...username} placeholder="이름 입력" /><br />
                    <input type="password" {...password} placeholder="비밀번호 입력" /><br />
                    <input type="password" value={passwordCheck} onChange={handlePassword} placeholder="비밀번호 재입력" /><br />
                    { passwordError && <div style={{color:'red'}}>비밀번호가 불일치</div>}
                    <input type="text" {...userphone} placeholder="전화번호 입력"/><br />
                    <input type="checkbox" checked={term} id="term" onChange={handleTerm} />
                    <label htmlFor="term">약관에 동의해주세요.</label>
                    {termError && <div style={{color:'red'}}>약관 동의는 필수 사항입니다.</div>}
                    <button type="submit">회원가입</button>
                </form>
            </FormLayout>
        </>
    )
}

export default Join;