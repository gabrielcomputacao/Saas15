import { WrapperCard } from "@/components/wrapperCard/wrapperCard";

export default function LayoutDashboard({
  children,
  notifications,
  revenue,
}: {
  children: React.ReactNode;
  notifications: React.ReactNode;
  revenue: React.ReactNode;
}) {
  /* 
        O layout recebe as rotas paralelas por props, e cada rota paralela tem seu proprio tempo de carregamento seus
        erros e suas sub-navigations
    */

  return (
    <div className="p-10">
      <div>{children}</div>
      <div className="flex gap-4">
        <div>
          <WrapperCard>{notifications}</WrapperCard>
        </div>
        <div>
          <WrapperCard>{revenue}</WrapperCard>
        </div>
      </div>
    </div>
  );
}
