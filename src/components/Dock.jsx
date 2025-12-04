import { Tooltip } from "react-tooltip";
import { dockApps } from "@constants";
import { useDockAnimation } from "@hooks/useDockAnimation";

const Dock = () => {
  const dockRef = useDockAnimation();

  const toggleApp = (app) => {
    // Function to handle opening the app
  };

  return (
    <section id="dock">
      <div ref={dockRef} className="dock-container">
        {dockApps.map((app) => (
          <div
            key={app.id}
            className="relative flex justify-center"
            title={app.name}
          >
            <button
              type="button"
              className="dock-icon"
              aria-label={app.name}
              data-tooltip-id="dock-tooltip"
              data-tooltip-content={app.name}
              data-tooltip-delay-show={150}
              disabled={!app.canOpen}
              onClick={() => toggleApp(app)}
            >
              <img
                src={`/images/${app.icon}`}
                alt={app.name}
                loading="lazy"
                className={app.canOpen ? "" : "opacity-60"}
              />
            </button>
          </div>
        ))}
        <Tooltip id="dock-tooltip" place="top" className="tooltip" />
      </div>
    </section>
  );
};

export default Dock;
