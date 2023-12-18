import CharacterCard, { CharacterCardType } from "@/components/CharacterCard";

const mockCharacters: CharacterCardType[] = [
  {
    id: "remixdosecxii",
    nick: "DONL",
    name: "Don L",
    avatarUrl: "https://randomuser.me/api/portraits/men/5.jpg",
    backgroundImgUrl: "https://via.placeholder.com/150/gold",
    briefDescription: "Auri Sacra Fames!",
    exp: 999,
  },
  {
    id: "ummelodramaconvencional",
    nick: "John",
    name: "John Emanuel",
    avatarUrl: "https://randomuser.me/api/portraits/women/24.jpg",
    backgroundImgUrl: "https://via.placeholder.com/150/blue",
    briefDescription:
      "This is a description of the character that will be displayed",
    exp: 999,
  },
];

export default function CharactersPage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      {mockCharacters.map((char) => (
        <CharacterCard key={char.id} characterCard={char} />
      ))}
    </main>
  );
}
