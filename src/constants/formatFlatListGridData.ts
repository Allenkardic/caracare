export default function formatFlatListGridData(data: any, numColumns: number) {
  const numberOfFullRows = Math.floor(data?.length / numColumns);

  let numberOfElementsLastRow = data?.length - numberOfFullRows * numColumns;
  while (
    numberOfElementsLastRow !== numColumns &&
    numberOfElementsLastRow !== 0
  ) {
    data?.push({
      empty: true,
      id: 1001.022,
      name: '',
      status: 'Alive',
    });
    numberOfElementsLastRow++;
  }
  return data;
}
