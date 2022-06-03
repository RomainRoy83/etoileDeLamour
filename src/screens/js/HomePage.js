import Activities from "../../components/js/Activities";
import HomepageBanner from "../../components/js/HomepageBanner";
import Questions from "../../components/js/Questions";
import "../css/HomePage.css";
import "../../components/js/HomepageBanner"


const Home = () => {
  return (
    <>
    <HomepageBanner/>
        
      <section>
        <div className ="quiz">
          <Questions />
        </div>
      </section>
      <Activities />
    </>
  );
};

export default Home;
