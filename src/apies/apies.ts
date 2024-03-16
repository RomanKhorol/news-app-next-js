import { instance } from "./axios";
export async function getAppnewsData(page: number) {
  try {
    const res = await instance.get(
      `everything?q=apple&from=2024-02-19&to=2024-02-19&sortBy=popularity&apiKey=c221d489d5974f5eb68da41545c48142&pageSize=10&page=${page}`
    );

    return res.data;
  } catch (error) {
    let e = error as Error;
    return e.message;
  }
}
