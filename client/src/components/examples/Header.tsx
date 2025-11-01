import { Header } from '../Header';
import { TenantProvider } from '@/contexts/TenantContext';
import { SidebarProvider } from '@/components/ui/sidebar';

export default function HeaderExample() {
  return (
    <TenantProvider>
      <SidebarProvider>
        <Header />
      </SidebarProvider>
    </TenantProvider>
  );
}
