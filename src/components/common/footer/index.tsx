import { Container } from "reactstrap";
import styles from "./styles.module.scss";

const Footer = function () {
    return (
        <>
            <Container className={styles.footer}>
                <img src="/logoDevFlix.svg" alt="logoFooter" className={styles.footerLogo} />
                <a href="https://github.com/RaphaelOkuyama" target={"blank"} className={styles.footerLink}>
                    Made with&nbsp;
                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="#f64348" stroke="#f64348" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
                    </svg>
                    &nbsp;by @RaphaelOkuyama
                </a>
            </Container>
        </>
    );
};

export default Footer