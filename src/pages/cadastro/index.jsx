import React from 'react';
import { Link, useNavigate } from "react-router-dom";
import { MdEmail, MdLock, MdOutlineSupervisedUserCircle } from 'react-icons/md';
import { Button } from '../../components/Button';
import { Header } from '../../components/Header';
import { Input } from '../../components/Input';
import { useForm } from "react-hook-form";

import { Container, Column, Title, Wrapper, TitleCadastro, SubtitleCadastro, ColumnForm, TermosText, LoginText, LinkLogin, Row, FormularioCadastro } from './styles';

const Cadastro = () => {

    const navigate = useNavigate()

    const { control} = useForm({});

    const handleLoginAccount = () => {
        navigate('/login');
    };

    return (<>
        <Header />
        <Container>
            <Column>
                <Title>A plataforma para você aprender com experts, dominar as principais tecnologias
                    e entrar mais rápido nas empresas mais desejadas.</Title>
            </Column>
            <Column>
                <Wrapper>
                    <TitleCadastro>Comece agora grátis</TitleCadastro>
                    <SubtitleCadastro>Crie sua conta e make the change._</SubtitleCadastro>
                    <FormularioCadastro>
                        <Input placeholder="Nome completo" leftIcon={<MdOutlineSupervisedUserCircle />} name="nome" control={control} />
                        <Input placeholder="E-mail" leftIcon={<MdEmail />} name="email" control={control} />
                        <Input type="password" placeholder="Senha" leftIcon={<MdLock />} name="senha" control={control} />
                        <Button title="Criar minha conta" variant="secondary" type="submit" />
                    </FormularioCadastro>
                    <ColumnForm>
                        <TermosText>Ao clicar em "criar minha conta grátis", declaro que aceito as Políticas de Privacidade e os Termos de Uso da DIO.</TermosText>
                        <Row>
                            <LoginText>Já tenho conta. </LoginText>
                            <LinkLogin onClick={handleLoginAccount}>Fazer login</LinkLogin>
                        </Row>
                    </ColumnForm>
                </Wrapper>
            </Column>
        </Container>
    </>)
}

export { Cadastro }