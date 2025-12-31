export default function GridBackground() {
  return (
    <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
      {/* Grid */}
      <div
        className="absolute inset-0 opacity-[0.03] dark:opacity-[0.05]"
        style={{
          backgroundSize: '40px 40px',
          backgroundImage:
            'linear-gradient(to right, currentColor 1px, transparent 1px), linear-gradient(to bottom, currentColor 1px, transparent 1px)',
        }}
      />

      {/* Glow Orbs */}
      <div className="absolute top-[-120px] right-[-120px] h-[600px] w-[600px] rounded-full bg-primary/20 blur-[140px]" />
      <div className="absolute bottom-[-160px] left-[-160px] h-[500px] w-[500px] rounded-full bg-blue-500/10 blur-[140px]" />
    </div>
  );
}
