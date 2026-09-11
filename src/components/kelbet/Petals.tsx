const PETALS = [
  { left: "6%", delay: "0s", duration: "22s", size: 18, opacity: 0.5 },
  { left: "22%", delay: "6s", duration: "28s", size: 12, opacity: 0.4 },
  { left: "38%", delay: "12s", duration: "24s", size: 22, opacity: 0.35 },
  { left: "57%", delay: "3s", duration: "30s", size: 14, opacity: 0.45 },
  { left: "72%", delay: "9s", duration: "26s", size: 20, opacity: 0.4 },
  { left: "88%", delay: "15s", duration: "32s", size: 16, opacity: 0.35 },
];

export function Petals() {
  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
      {PETALS.map((petal, index) => (
        <span
          key={index}
          className="absolute top-0 block bg-petal"
          style={{
            left: petal.left,
            width: petal.size,
            height: petal.size * 1.15,
            opacity: petal.opacity,
            borderRadius: "60% 0 60% 0",
            animation: `petal-fall ${petal.duration} linear ${petal.delay} infinite`,
          }}
        />
      ))}
    </div>
  );
}
