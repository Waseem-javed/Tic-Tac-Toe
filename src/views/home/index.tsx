import React from "react";
import Board from "./components/Board";

const Home = () => {
  return (
    <section className="section">
      <div className="container">
        <div className="columns is-centered">
          <div className="column is-one-third">
            <Board />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
