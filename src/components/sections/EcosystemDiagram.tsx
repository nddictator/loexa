import type { EcosystemNode } from "@/data/site-content";

// Radial hub-and-spoke diagram matching "THE LOEXA PLATFORM" / "OUR
// COLLABORATIVE APPROACH" visuals in the reference deck: logo centered in
// a ring, spokes out to each ecosystem node.
export function EcosystemDiagram({ nodes }: { nodes: EcosystemNode[] }) {
  const radius = 42;
  const center = 50;

  const positions = nodes.map((node, i) => {
    const angle = (i / nodes.length) * 2 * Math.PI - Math.PI / 2;
    return {
      node,
      x: center + radius * Math.cos(angle),
      y: center + radius * Math.sin(angle),
    };
  });

  return (
    <div className="relative mx-auto aspect-square w-full max-w-xl">
      <svg viewBox="0 0 100 100" className="absolute inset-0 h-full w-full text-navy/15">
        <circle
          cx={center}
          cy={center}
          r={radius}
          fill="none"
          stroke="currentColor"
          strokeWidth="0.5"
          strokeDasharray="1.5 1.5"
        />
        {positions.map(({ node, x, y }) => (
          <line
            key={node.title}
            x1={center}
            y1={center}
            x2={x}
            y2={y}
            stroke="currentColor"
            strokeWidth="0.4"
          />
        ))}
      </svg>

      <div className="absolute left-1/2 top-1/2 flex h-24 w-24 -translate-x-1/2 -translate-y-1/2 flex-col items-center justify-center rounded-full bg-navy text-center shadow-lg shadow-navy/20 sm:h-28 sm:w-28">
        <span className="font-heading text-xs font-bold leading-tight text-white sm:text-sm">
          LOEXA
          <br />
          AFRICA
        </span>
      </div>

      {positions.map(({ node, x, y }) => (
        <div
          key={node.title}
          className="absolute w-24 -translate-x-1/2 -translate-y-1/2 text-center sm:w-36"
          style={{ left: `${x}%`, top: `${y}%` }}
        >
          <span className="mx-auto mb-1 flex h-9 w-9 items-center justify-center rounded-full bg-gold text-xs font-bold text-navy sm:h-12 sm:w-12">
            {node.title.charAt(0)}
          </span>
          <p className="font-heading text-xs font-bold leading-tight text-navy sm:text-sm">
            {node.title}
          </p>
        </div>
      ))}
    </div>
  );
}
