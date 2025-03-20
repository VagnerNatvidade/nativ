import Image from "next/image";
import Link from "next/link";

interface CardProps {
  name: string;
  link: string;
  description: string;
  image?: string;
}

const Card = ({ name, image, description, link }: CardProps) => {
  return (
    <div className="p-6 rounded-2xl bg-[#efefef] shadow-2xl">
      <Image
        className="rounded-2xl w-full h-ful object-cover aspect-video"
        src={`/${image ? image : "non-image.png"}`}
        alt={`imagem de pré visualização do projeto ${name}`}
        width={1000}
        height={1000}
      />

      <div className="mt-3">
        <h3 className="text-xl font-bold">{name}</h3>
        <p className="mb-3">{description}</p>
        <Link href={link} target="_blank" className="transition-all hover:ml-4">
          Acesse o app aqui...
        </Link>
      </div>
    </div>
  );
};

export default Card;
