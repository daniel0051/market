export const capitalizeName = (name: string): string => {
  if (!name) return "";

  const prepositions = ["de", "da", "do", "das", "dos", "e"];

  return name
    .trim()
    .toLowerCase()
    .split(/\s+/)
    .map((word, index) =>
      prepositions.includes(word) && index !== 0
        ? word
        : word.charAt(0).toUpperCase() + word.slice(1),
    )
    .join("");
};
