import TopPrompts from '../TopPrompts';
import { TenantProvider } from '@/contexts/TenantContext';

export default function TopPromptsExample() {
  return (
    <TenantProvider>
      <TopPrompts />
    </TenantProvider>
  );
}
