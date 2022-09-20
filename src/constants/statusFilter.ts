export default function statusFilter(listData: any[], statusData: any[]) {
  let result: any[] = [];
  for (let i = 0; i < listData.length; i++) {
    for (let k = 0; k < statusData.length; k++) {
      if (statusData[k].isFiltering) {
        if (listData[i].status == statusData[k].name) {
          result.push(listData[i]);
        }
      }
    }
  }
  return result;
}
