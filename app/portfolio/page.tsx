import "./page.scss";
import PortfolioTab from "@/components/portfolioTab";

const PortfolioPage = () => {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between py-10 px-5">
      <section>
        <PortfolioTab
          isButtonVisible={false}
          title="Portfolio"
          url="http://localhost:3000/data/portfolio.json"
          viewMoreUrl="http://localhost:3000/portfolio"
          length={"ALL"}
        />
      </section>
    </main>
  );
};

export default PortfolioPage;
