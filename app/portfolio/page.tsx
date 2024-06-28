import "./page.scss";
import PortfolioTab from "@/components/portfolioTab";

const PortfolioPage = () => {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between py-10 px-5">
      <section>
        <PortfolioTab
          title="Portfolio"
          url="/data/portfolio.json"
          length={"ALL"}
        />
      </section>
    </main>
  );
};

export default PortfolioPage;
