import { trails } from "./data/trails.js";

const FILTERS = ["all", "open", "muddy", "icy", "closed"];

function countOf(name) {
  if (name === "all") return trails.length;
  return trails.filter((trail) => trail.condition === name).length;
}

function App() {
  const day = trails.filter((trail) => trail.kind === "day");
  const overnight = trails.filter((trail) => trail.kind === "overnight");

  return (
    <div className="page">
      <div className="column">
        <header className="masthead">
          <div>
            <h1 className="masthead-title">Trailhead</h1>
            <p className="masthead-sub masthead-count">
              Conditions reported this morning
            </p>
          </div>
          <p className="masthead-sub">{trails.length} trails</p>
        </header>

        <div className="filters">
          {FILTERS.map((name) => (
            <button
              key={name}
              disabled={countOf(name) === 0}
              className="filter"
            >
              {name} {countOf(name)}
            </button>
          ))}
        </div>

        <section className="group">
          <h2 className="group-title">Day hikes</h2>
          <div className="board">
            {day.map((trail) => (
              <article className="card" key={trail.id}>
                <div className="card-head">
                  <h3 className="card-title">{trail.name}</h3>
                  <span className={`badge badge-${trail.condition}`}>
                    {trail.condition}
                  </span>
                </div>
                <p className="card-park">{trail.park}</p>
                <p className="card-meta">
                  {trail.miles} mi, {trail.gain} ft gain
                </p>
              </article>
            ))}
          </div>
        </section>

        <section className="group">
          <h2 className="group-title">Overnight</h2>
          <div className="board">
            {overnight.map((trail) => (
              <article className="card" key={trail.id}>
                <div className="card-head">
                  <h3 className="card-title">{trail.name}</h3>
                  <span className={`badge badge-${trail.condition}`}>
                    {trail.condition}
                  </span>
                </div>
                <p className="card-park">{trail.park}</p>
                <p className="card-meta">
                  {trail.miles} mi, {trail.gain} ft gain
                </p>
              </article>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}

export default App;
