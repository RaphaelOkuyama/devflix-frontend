import { Container } from "reactstrap";
import styles from "./styles.module.scss";

const CardsSection = function () {
  return (
<>
	<p className={styles.sectionTitle}>O QUE VOCÊ VAI ACESSAR</p>
	<Container className="d-flex flex-wrap justify-content-center gap-4 pb-5">
		<div className={styles.card1}>
			<p className={styles.cardTitle}>FRONT-END</p>
			<p className={styles.cardDescription}>
				Desenvolvimento de interfaces de usuário utilizando HTML, CSS e JavaScript. Foca em criar experiências visuais interativas, garantindo que os sites e aplicativos sejam funcionais e agradáveis de usar.
			</p>
		</div>
		<div className={styles.card2}>
		<p className={styles.cardTitle}>BACK-END</p>
		<p className={styles.cardDescription}>
			Responsável pela lógica do servidor e manipulação de dados. Tecnologias como Node.js, Python e Java são usadas para criar APIs e sistemas que suportam o funcionamento dos sites e apps, conectando a interface ao banco de dados.
		</p>
	</div>
	<div className={styles.card3}>
		<p className={styles.cardTitle}>MOBILE</p>
		<p className={styles.cardDescription}>
			Criação de aplicativos móveis com tecnologias como React Native e Flutter. Os desenvolvedores garantem que os apps funcionem de forma eficiente em diferentes plataformas, como Android e iOS, oferecendo boa performance e experiência ao usuário.
		</p>
	</div>
	<div className={styles.card4}>
		<p className={styles.cardTitle}>GIT E GITHUB</p>
		<p className={styles.cardDescription}>
			Git é uma ferramenta de controle de versão que permite o rastreamento de alterações no código, facilitando o trabalho em equipe. GitHub é a plataforma ideal para hospedar, compartilhar e colaborar em projetos de desenvolvimento, tornando a integração entre os desenvolvedores mais ágil.
		</p>
	</div>
	<div className={styles.card5}>
		<p className={styles.cardTitle}>PROJETOS</p>
		<p className={styles.cardDescription}>
			A criação de projetos práticos é fundamental para aplicar os conhecimentos adquiridos, enfrentando desafios reais. Isso ajuda a desenvolver habilidades técnicas e a criar um portfólio forte, essencial para avançar na carreira.
		</p>
	</div>
	<div className={styles.card6}>
		<p className={styles.cardTitle}>CARREIRA</p>
		<p className={styles.cardDescription}>
			Para uma carreira sólida em tecnologia, é importante manter-se atualizado, adquirir experiência prática e ter um portfólio robusto. A adaptabilidade e o networking também são fundamentais para o crescimento profissional e para novas oportunidades.
		</p>
	</div>
	</Container>
</>
  );
};

export default CardsSection;