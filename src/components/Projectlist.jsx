import ProjectCard from "../components/Projectcard";
import { Container, Row, Col } from "react-bootstrap";
import adminpanel from '../src/assets/images/upload.png';
import olximage from "../src/assets/images/summary.png";
import netfliximage from "../src/assets/images/quiz.png";
import gridlinesbuilders from "../src/assets/images/eco.png";
import charlespizza from ../src/assets/images/games.png";
import todolist from "../src/assets/images/crudjs.png";
import cadastro from "../src/assets/images/cadastro.png";
import helpdesk from "../src/assets/images/helpdesk.png";
import consulta from "../src/assets/images/consulta.png";
import "../pages/style.css";


function Projectlist() {
  return (
    <div className="projectbackground">
      <Container fluid className="project-section">
        <Container>
          <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
            <Col md={4} className="project-card">
              <ProjectCard
                imgPath={adminpanel}
                isBlog={false}
                title="Upload AI"
                description="Front-end do projeto feito no evento da Rocketseat com o uso de Inteligência Artificial. Utilizando tecnologias como o ReactJS, TailwindCSS, Shadcn-ui, Radix-ui, ViteJS e NodeJS. Foi um evento muito produtivo onde conseguimos aprender a manipular essa nova tecnologia."
                ghLink="https://thfields.github.io/Rocketseat_NLW_IA/"
              />
            </Col>

            <Col md={4} className="project-card">
              <ProjectCard
                imgPath={olximage}
                isBlog={false}
                title="Summary AI"
                description="Projeto feito no evento da Rocketseat com o uso de Inteligência Artificial. Utilizando o NodeJS, ExpressJS, YTDL-Core no back-end e JavaScript Vanilla e CSS para o front-end. Para o deploy somente do front-end foi utlizado o Vite. Foi um evento muito produtivo onde conseguimos aprender a manipular essa nova tecnologia."
                ghLink="https://thfields.github.io/Rocketseat_NLW_IA_Summary/"
              />
            </Col>

            <Col md={4} className="project-card">
              <ProjectCard
                imgPath={netfliximage}
                isBlog={false}
                title="Quiz JavaScript"
                description="Projeto de um jogo de perguntas e respostas sobre Javascript, utilizando ReactJS e ViteJS."
                ghLink="https://react-netflixweb-clone.netlify.app/"
              />
            </Col>

            <Col md={4} className="project-card">
              <ProjectCard
                imgPath={gridlinesbuilders}
                isBlog={false}
                title="Site Empresarial"
                description="Projeto de um site empresarial feito para a empresa ET'S Desenvolvimento sem fins lucrativos, com o intuito da prática front end, utilizando HTML, CSS, Bootstrap e JavaScript."
                ghLink="https://thfields.github.io/Site_Empresa/"
              />
            </Col>

            <Col md={4} className="project-card">
              <ProjectCard
                imgPath={charlespizza}
                isBlog={false}
                title="Games Fight"
                description="Projeto de um site comercial de games feito para atividade avaliativa da disciplina Padrões Web, com o intuito da prática front end, utilizando HTML, SCSS, Bootstrap e JavaScript."
                ghLink="https://thfields.github.io/Games_Fight/web-design/"
              />
            </Col>

            <Col md={4} className="project-card">
              <ProjectCard
                imgPath={todolist}
                isBlog={false}
                title="Cadastro de Funcionários (CRUD)"
                description="CRUD em JavaScript para cadastro de funcionários. Contendo nome, função e salário, podendo adicionar, editar e remover da lista."
                ghLink="https://thfields.github.io/Cadastro_Funcionario/"
              />
            </Col>
            <Col md={4} className="project-card">
              <ProjectCard
                imgPath={cadastro}
                isBlog={false}
                title="Cadastro de Usuário"
                description="Projeto de crianção de cadastro de usuários utilizando Spring Boot com o padrão MVC e o banco de dados MySQL com fins para aprendizado na criação de API."
                ghLink="https://thfields.github.io/JavaAPI/frontend/"
              />
            </Col>
            <Col md={4} className="project-card">
              <ProjectCard
                imgPath={helpdesk}
                isBlog={false}
                title="Sistema Help Desk"
                description="Backend do Projeto REST API utilizando Spring Boot com JPA e o padrão DTO. Utilizando o Railway para o deploy e banco de dados MySQL. Este projeto foi realizado pelo curso 'Full Stack Developer' da Udemy."
                ghLink="https://sistemahelpdeskapi-production.up.railway.app/"
              />
            </Col>
            <Col md={4} className="project-card">
              <ProjectCard
                imgPath={consulta}
                isBlog={false}
                title="Consulta de API"
                description="Consumindo API do ViaCep e da ReceitaWS para consultar o CEP e o CNPJ em JavaScript utilizando NodeJS. Projeto feito para fins de aprendizado."
                ghLink="https://thfields.github.io/API_Consultas/ViaCepJavaScript/"
              />
            </Col>
          </Row>
        </Container>
      </Container>
    </div>
  );
}
export default Projectlist;
