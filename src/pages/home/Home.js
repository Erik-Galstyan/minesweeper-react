import { useState } from "react";
import Header from "../../components/Header";
import "./style.css";
import ComplexityButton from "../../components/ComplexityButton";
import PlayButton from "../../components/Playbutton";

const Home = (props) => {
  const { setView } = props;
  const [selectedComplexity, setSelectedComplexity] = useState(null);

  return (
    <>
      <Header />
      <main className="main">
        <div className="comlaxity-play-conatainer">
          <div className="comlaxity-container">
            <ComplexityButton
              complexity="easy"
              borderSize="10x10"
              onClick={() => setSelectedComplexity("easy")}
              selectedComplexity={selectedComplexity === "easy"}
            />
            <ComplexityButton
              complexity="normal"
              borderSize="16x16"
              onClick={() => setSelectedComplexity("normal")}
              selectedComplexity={selectedComplexity === "normal"}
            />
            <ComplexityButton
              complexity="hard"
              borderSize="15x32"
              onClick={() => setSelectedComplexity("hard")}
              selectedComplexity={selectedComplexity === "hard"}
            />
          </div>
          <PlayButton handleviewChange={() => setView(selectedComplexity)} />
        </div>
      </main>
    </>
  );
};

export default Home;
