export default function getIdFromUrl(text: string) {
  const result = /[^/]*$/.exec(`${text}`)[0];
  return result;
}
