import Dashboard from '../Dashboard';
import { TenantProvider } from '@/contexts/TenantContext';

export default function DashboardExample() {
  return (
    <TenantProvider>
      <Dashboard />
    </TenantProvider>
  );
}
