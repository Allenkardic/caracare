export default function getNextPageFromUrl(str: string | null | number) {
  let result = str;
  if (typeof result === 'string' && result?.includes('&')) {
    result = result?.split('&')[0];
  }
  if (typeof result === 'string' && result?.includes('=')) {
    result = result.split('=')[1];
  }
  if (typeof result !== 'string') {
    result = '1';
  }
  return result;
}
