import { useGSAP } from "@gsap/react";
import { COCKTAIL_LIST, MOCKTAIL_LIST } from "../constants";
import type { CocktailList, MocktailList } from "../types";
import gsap from "gsap";

function Cocktails() {
  useGSAP(() => {
    gsap
      .timeline({
        scrollTrigger: {
          trigger: "#cocktails",
          start: "top 30%",
          end: "bottom 80%",
          scrub: true,
        },
      })
      .from("#c-left-leaf", { x: -100, y: 100 })
      .from("#c-right-leaf", { x: 100, y: 100 });
  }, []);

  return (
    <section id="cocktails" className="noisy">
      <img
        src="/images/cocktail-left-leaf.png"
        alt="left-leaf"
        id="c-left-leaf"
      />
      <img
        src="/images/cocktail-right-leaf.png"
        alt="right-leaf"
        id="c-right-leaf"
      />
      <div className="list">
        <div className="popular">
          <h2>Most Popular cocktails:</h2>
          <ul>
            {COCKTAIL_LIST.map((cocktail: CocktailList) => (
              <li key={cocktail.name}>
                <div className="md:me-28">
                  <h3>{cocktail.name}</h3>
                  <p>{cocktail.country}</p>
                </div>
                <span>- {cocktail.price}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="loved">
          <h2>Most Loved cocktails:</h2>
          <ul>
            {MOCKTAIL_LIST.map((mocktail: MocktailList) => (
              <li key={mocktail.name}>
                <div className="md:me-28">
                  <h3>{mocktail.name}</h3>
                  <p>{mocktail.country}</p>
                </div>
                <span>- {mocktail.price}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

export default Cocktails;
