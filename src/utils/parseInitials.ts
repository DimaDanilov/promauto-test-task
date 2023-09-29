// Function to parse initials from one row
export function parseInitials(row: string) {
  const words = row.split(" ");
  let initials = "";

  for (let i = 0; i < words.length; i++) {
    initials += words[i].charAt(0);
  }

  return initials;
}
