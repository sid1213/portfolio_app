export interface GetPortfolioResponse {
  imgCategory: string;
  imgUrl: string;
  url: string;
}

const getPortfolio = async (url: string): Promise<GetPortfolioResponse[]> => {
  const response = await fetch(url);
  const data = await response.json();
  return data;
};

export default getPortfolio;
