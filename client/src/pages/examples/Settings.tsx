import Settings from '../Settings';
import { TenantProvider } from '@/contexts/TenantContext';

export default function SettingsExample() {
  return (
    <TenantProvider>
      <Settings />
    </TenantProvider>
  );
}
