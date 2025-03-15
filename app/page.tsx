import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <header>
        <h1>nativ</h1>

        <nav>
          <Link href="#home">Home</Link>
          <Link href="#about">Sobre</Link>
          <Link href="#projects">Projetos</Link>
        </nav>
      </header>

      <main>
        <section id="home">
          <h2>
            Eleve seu negócio digital a outro nível
            <span>
              com um Front-end de qualidade!com um Front-end de qualidade!
            </span>
          </h2>

          <p>
            Olá! Sou Vagner Junior, desenvolvedor Front-end com especialidade em
            React, HTML e CSS. Ajudo pequenos negócios e designers a colocarem
            em prática boas ideias. Vamos conversar?
          </p>
        </section>

        <section id="about">
          <h2>
            Sou Vagner <span>Jr!</span>
          </h2>

          <div>
            <p>
              Sou um desenvolvedor em formação apaixonado por tecnologia e
              inovação. Estou me especializando em
              <span>React, JavaScript, HTML e CSS</span>
              para me tornar um Desenvolvedor Front-end e estou focado em
              construir uma base sólida para desenvolver aplicações modernas e
              responsivas.
            </p>

            <p>
              Atualmente, estou aprofundando meus conhecimentos em React.js,
              aprimorando minhas habilidades e buscando minha primeira
              oportunidade como Dev Júnior. Acredito no aprendizado contínuo e
              adoro desafios que me permitem crescer e evoluir na área. Se
              quiser trocar uma ideia sobre tecnologia ou conhecer mais sobre
              meu trabalho, ficarei feliz em conversar!
            </p>
          </div>

          <Image
            className="w-10"
            src={"/me.jpg"}
            alt="imagem de perfil do gituhb de Vagner"
            width={1000}
            height={1000}
          />
        </section>

        <section id="projects">
          <h2>Projetos</h2>

          <article>
            <Link href={""}>
              <Image
                className="w-10"
                src={"/me.jpg"}
                alt="imagem previwe do projeto xxx"
                width={1000}
                height={1000}
              />

              <div>
                <h3>Nome do projeto</h3>
                <p>descrição do projeto</p>
              </div>
            </Link>

            <Link href={""}>
              <Image
                className="w-10"
                src={"/me.jpg"}
                alt="imagem previwe do projeto xxx"
                width={1000}
                height={1000}
              />

              <div>
                <h3>Nome do projeto</h3>
                <p>descrição do projeto</p>
              </div>
            </Link>
          </article>
        </section>
      </main>

      <footer>Copyright (c) 2025 Vagner Junior</footer>
    </div>
  );
}
