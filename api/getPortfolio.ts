import type { TabsProps } from "antd";

interface prop {
  imgCategory: string;
  imgUrl: string;
}

const getPortfolio = async (url: string): Promise<prop[]> => {
  const response = await fetch(url);
  const data = await response.json();
  return data;
};

export default getPortfolio;
