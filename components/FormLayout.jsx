import Router from 'next/router';
import styled from 'styled-components';

const Background = styled.div`
    display: flex;
    width: 100vh;
    height: 100vh;
    background: #eee;
    align-items: center;
    justify-content: center;
    
    & > div{
        width: 300px;
        height: 500px;
        padding: 20px;
        background: #fff;

    }
`

const FormLayout = ({children}) => {
    return(
        <>
            <Background>
                <div>
                    <p onClick={()=>Router.back()}>이전으로</p>
                    {children}
                </div>
            </Background>
        </>
    )
}

export default FormLayout;