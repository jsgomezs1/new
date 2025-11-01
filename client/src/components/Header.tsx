import { useTenant } from '@/contexts/TenantContext';
import { SidebarTrigger } from '@/components/ui/sidebar';

export function Header() {
  const { tenant, isLoading } = useTenant();

  if (isLoading || !tenant) {
    return (
      <header className="flex items-center justify-between h-16 px-6 border-b bg-background">
        <div className="flex items-center gap-3">
          <SidebarTrigger data-testid="button-sidebar-toggle" />
          <div className="h-8 w-8 bg-muted animate-pulse rounded" />
          <div className="h-6 w-32 bg-muted animate-pulse rounded" />
        </div>
      </header>
    );
  }

  return (
    <header className="flex items-center justify-between h-20 px-6 border-b bg-background">
      <div className="flex items-center gap-4">
        <SidebarTrigger data-testid="button-sidebar-toggle" />
        <img 
          src={tenant.logoUrl} 
          alt={`${tenant.name} logo`} 
          className="h-12 w-auto object-contain"
          data-testid="img-tenant-logo"
        />
        <h1 className="text-xl font-semibold" data-testid="text-tenant-name">
          {tenant.name}
        </h1>
      </div>
    </header>
  );
}
