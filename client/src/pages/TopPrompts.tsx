import { useTenant } from '@/contexts/TenantContext';
import { MOCK_PROMPTS } from '@/lib/mockData';
import { PromptsTable } from '@/components/PromptsTable';

export default function TopPrompts() {
  const { tenant, isLoading } = useTenant();

  // todo: remove mock functionality - replace with Convex query getTopPrompts
  const tenantPrompts = tenant 
    ? MOCK_PROMPTS.filter(p => p.tenantId === tenant.id)
    : [];

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
