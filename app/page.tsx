import Image from "next/image";
import Header from "./components/header";
import Card from "./components/card";

export default function Home() {
  return (
    <div>
      <Header />

      <main className="max-w-[1536px] m-auto px-6 mb-20">
        <section id="home" className="pt-40">
          <h2 className="text-4xl font-bold mb-6 md:text-5xl">
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
          <h2 className="text-4xl md:text-5xl  font-bold mb-6">
            Sou Vagner <span className="text-[#ecb365]">Jr!</span>
          </h2>

          <div className="md:flex gap-6">
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
              className="hidden md:inline-block rounded-2xl w-1/3 h-100 object-cover m-auto"
              src={"/me.jpg"}
              alt="imagem de perfil do gituhb de Vagner"
              width={1000}
              height={1000}
            />
          </div>
        </section>

        <section id="projects" className="pt-20">
          <h2 className="text-4xl font-bold mb-6 md:text-5xl">
            Meus <span className="text-[#ecb365]">projetos</span>.
          </h2>

          <article className="flex flex-col gap-3 md:grid md:grid-cols-2 ">
            <Card
              name="Timer"
              image="time_preview.png"
              link="https://timer-lime-seven.vercel.app/"
              description="App para contar o tempo como um pomodoro"
            />
            <div className="w-full h-40 mt-3 bg-[#efefef] rounded-2xl border-dashed border-zinc-400 border-2 grid place-items-center">
              <button className="text-zinc-400 text-2xl tracking-widest">
                new
              </button>
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
