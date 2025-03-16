import Image from "next/image";
import Link from "next/link";

const Card = () => {
  return (
    <div className="p-6 rounded-2xl bg-[#efefef] shadow-2xl">
      <Image
        className="rounded-2xl w-full h-ful object-cover aspect-video"
        src={`/${"nome da imagem"}`}
        alt="imagem previwe do projeto xxx"
        width={1000}
        height={1000}
      />

      <div className="mt-3">
        <h3 className="text-xl font-bold">Timer</h3>
        <p className="mb-3">descrição</p>
        <Link href={"link do app"} className="hover:cursor-pointer ">
          Acesse o app aqui...
        </Link>
      </div>

      <ul className="flex gap-3 mt-6 text-[#064663] text-3xl">
        <li>icon</li>
      </ul>
    </div>
  );
};

export default Card;
