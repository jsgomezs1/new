import { useTenant } from '@/contexts/TenantContext';
import { PromptsTable } from '@/components/PromptsTable';
import { useQuery } from 'convex/react';
import { api } from '@convex/_generated/api';

export default function TopPrompts() {
  const { tenant, isLoading: tenantLoading } = useTenant();

  const prompts = useQuery(
    api.prompts.getByTenant,
    tenant ? { tenantId: tenant.id } : "skip"
  );

  const isLoading = tenantLoading || prompts === undefined;
  const tenantPrompts = prompts ?? [];

  return (
    <div className="p-8 space-y-6">
      <div>
        <h1 className="text-2xl font-semibold mb-2" data-testid="text-page-title">Top User Prompts</h1>
        <p className="text-muted-foreground">
          Analyze the most frequent user queries and their relevance scores
        </p>
      </div>

      <PromptsTable prompts={tenantPrompts} isLoading={isLoading} />
    </div>
  );
}
