import Image from "next/image";
import Link from "next/link";
import Header from "./components/header";

export default function Home() {
  return (
    <div>
      <Header />

      <main className="px-6 mb-20">
        <section id="home" className="pt-40">
          <h2 className="text-4xl font-bold mb-6">
            Eleve seu negócio digital a outro nível{" "}
            <span className="text-[#ecb365]">
              com um Front-end de qualidade!
            </span>
          </h2>

          <p className="text-xl">
            Olá! Sou Vagner Junior, desenvolvedor Front-end com especialidade em
            React, HTML e CSS. Ajudo pequenos negócios e designers a colocarem
            em prática boas ideias. Vamos conversar?
          </p>
        </section>

        <section id="about" className="pt-20">
          <h2 className="text-4xl font-bold mb-6">
            Sou Vagner <span className="text-[#ecb365]">Jr!</span>
          </h2>

          <div className="mb-3">
            <p className="mb-3">
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
            className="rounded-2xl w-full h-80 object-cover"
            src={"/me.jpg"}
            alt="imagem de perfil do gituhb de Vagner"
            width={1000}
            height={1000}
          />
        </section>

        <section id="projects" className="pt-20">
          <h2 className="text-4xl font-bold mb-6">
            {" "}
            Meus <span className="text-[#ecb365]">projetos</span>.
          </h2>

          <article className="flex flex-col gap-3">
            <div className="p-6 rounded-2xl bg-[#04293a]">
              <Image
                className="rounded-2xl w-full h-40 object-cover "
                src={"/me.jpg"}
                alt="imagem previwe do projeto xxx"
                width={1000}
                height={1000}
              />

              <div className="mt-3 text-[#efefef]">
                <h3 className="text-xl font-bold">Timer</h3>
                <p className="mb-3">
                  Timer é um relógio pomodoro em contagem regressiva .
                </p>
                <Link href={""} className="hover:cursor-pointer">
                  Acesse o app aqui...
                </Link>
              </div>
            </div>

            <div className="p-6 rounded-2xl bg-[#04293a]">
              <Image
                className="rounded-2xl w-full h-40 object-cover "
                src={"/me.jpg"}
                alt="imagem previwe do projeto xxx"
                width={1000}
                height={1000}
              />

              <div className="mt-3 text-[#efefef]">
                <h3 className="text-xl font-bold">Timer</h3>
                <p className="mb-3">
                  Timer é um relógio pomodoro em contagem regressiva .
                </p>
                <Link href={""} className="hover:cursor-pointer">
                  Acesse o app aqui...
                </Link>
              </div>
            </div>
          </article>
        </section>
      </main>

      <footer className="w-full h-40 flex items-center justify-center text-[#efefef] bg-[#04293a]">
        Copyright (c) 2025 Vagner Natividade
      </footer>
    </div>
  );
}
