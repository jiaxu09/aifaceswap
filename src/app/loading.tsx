export default function Loading() {
  return (
    <div className="min-h-[80vh] flex items-center justify-center">
      <div className="flex flex-col items-center gap-4">
        <span className="loading loading-spinner loading-lg text-purple-500" />
        <p className="text-white/40 text-sm font-medium animate-pulse">Loading...</p>
      </div>
    </div>
  );
}
