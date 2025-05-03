export function WrapperCard({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <div className="p-5 border rounded-2xl border-white w-lg my-5">
        {children}
      </div>
    </div>
  );
}
