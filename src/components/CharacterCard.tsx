import Image from "next/image";

export type CharacterCardType = {
  id: string;
  nick: string;
  name: string;
  exp: number;
  avatarUrl: string;
  backgroundImgUrl: string;
  briefDescription?: string;
};

type CharacterCardProps = {
  characterCard: CharacterCardType;
};

export default function CharacterCard({ characterCard }: CharacterCardProps) {
  const { nick, name, avatarUrl, briefDescription, backgroundImgUrl, exp } =
    characterCard;

  return (
    <section
      className="bg-image"
      style={{ backgroundImage: `url(${backgroundImgUrl})` }}
    >
      <Image src={avatarUrl} alt={nick} width={500} height={200} />
    </section>
  );
}
