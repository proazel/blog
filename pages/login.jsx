import FormLayout from "../components/FormLayout";
import Head from 'next/head';
import Router from "next/router";
import useInput from "../hooks/useInput";
import {useDispatch,useSelector} from 'react-redux';
import { UserLoginAction } from "../reducers/user";

const Login = () => {
    const dispatch = useDispatch();
    const {loading} = useSelector((state)=>state.user);

    const userid = useInput('');
    const userpw = useInput('');

    const handleSubmit = async e => {
        e.preventDefault();
        // console.log(userid.value,userpw.value);
        const data = {
            userid:userid.value,
            userpw:userpw.value,
        }
        await dispatch(UserLoginAction(data));

        // userid.value === "test1234" && userpw.value === "1234"
        // ? Router.push('/')
        // : alert('아이디와 패스워드가 다릅니다')
    }

    return(
        <>
            <Head>
                <title>Hwan Blog | 로그인</title>
            </Head>
            <FormLayout>
                <h2>로그인</h2>
                <form onSubmit={handleSubmit}>
                    <input type="text" {...userid} placeholder="아이디 입력" />
                    <input type="password" {...userpw} placeholder="비밀번호 입력" />
                    {loading ? '로딩 중' : <button type="submit">로그인</button>}
                </form>
            </FormLayout>
        </>
    )
}

export default Login;