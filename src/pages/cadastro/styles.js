import styled from 'styled-components';

export const Container = styled.main`
    width: 100%;
    max-width: 80%;
    margin: 0 auto;
    margin-top: 7%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`

export const FormularioCadastro = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-start;
    margin-top: 20px;
`

export const Wrapper = styled.div`
    max-width: 335px;
`

export const Column = styled.div`
    flex: 1;
`

export const ColumnForm = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-start;
    margin-top: 20px;
`

export const Row = styled.div`
    display: flex;
    flex-direction: Row;
    justify-content: space-between;
    align-items: flex-start;
`

export const Title = styled.h2`
    font-family: 'Open Sans';
    font-style: normal;
    font-weight: 700;
    font-size: 32px;
    max-width: 90%;
    margin-bottom: 20px;
    line-height: 44px;

    color: #FFFFFF;
`

export const TitleCadastro = styled.p`
    font-family: 'Open Sans';
    font-style: normal;
    font-weight: 700;
    font-size: 32px;
    line-height: 44px;
    margin-bottom: 8px;
`

export const SubtitleCadastro = styled.p`
    font-family: 'Open Sans';
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 25px;
    margin-bottom: 35px;
`

export const TermosText = styled.p`
    font-family: 'Open Sans';
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 24.51px;

    color: #FFFFFF;
`

export const LoginText = styled.p`
    font-family: 'Open Sans';
    font-style: normal;
    font-weight: 700;
    font-size: 14px;
    line-height: 19px;
    margin-top: 10px;

    color: #FFFFFF;
`

export const LinkLogin = styled.a`
    font-family: 'Open Sans';
    font-style: normal;
    font-weight: 700;
    font-size: 14px;
    line-height: 19px;
    margin-top: 10px;
    text-decoration-line: none;

    color: #23DD7A;

    cursor: pointer;

    &:hover {
        opacity: 0.8;
        text-decoration-line: underline;
    }
`