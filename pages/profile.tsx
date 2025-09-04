import Head from "next/head";
import styles from "../styles/profile.module.scss";
import UserFrom from "../src/components/profile/user";
import HeaderAuth from "../src/components/common/headerAuth";
import { Button, Col, Container, Row } from "reactstrap";
import Footer from "../src/components/common/footer";
import PasswordForm from "../src/components/profile/password";
import { useState } from "react";

const UserInfo = function () {
    const [form, setForm] = useState("userForm")

    return (
        <>
            <Head>
                <title>Devflix - Meus Dados</title>
                <link rel="shortcut icon" href="/favicon.svg" type="image/x-icon" />
            </Head>
            <main>
                <div className={styles.header}>
                    <HeaderAuth />
                </div>
                <Container className="py-5">
                    <p className={styles.title}>Minha Conta</p>
                    <Row className="pt-3 pb-5">
                        <Col md={4} className={styles.btnColumn}>
                            <Button
                                outline
                                className={styles.renderFormBtn}
                                onClick={() => {
                                    setForm("userForm");
                            }}>
                                DADOS PESSOAIS
                            </Button>
                            <Button
                                outline
                                className={styles.renderFormBtn}
                                onClick={() => {
                                    setForm("passwordForm");
                            }}>
                                SENHA
                            </Button>
                        </Col>
                        <Col md>
                            {form === "userForm" ? <UserFrom /> : <PasswordForm />}
                        </Col>
                    </Row>
                </Container>
                <div className={styles.footer}>
                    <Footer />
                </div>
            </main>
        </>
    );
};

export default UserInfo;