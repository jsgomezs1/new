import { useTenant } from '@/contexts/TenantContext';
import { MOCK_PROMPTS } from '@/lib/mockData';
import { Card } from '@/components/ui/card';
import { TrendingUp, Users, FileText, Activity } from 'lucide-react';

export default function Dashboard() {
  const { tenant, isLoading } = useTenant();

  if (isLoading || !tenant) {
    return (
      <div className="p-8 space-y-6">
        <div className="h-8 w-48 bg-muted animate-pulse rounded" />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[...Array(4)].map((_, i) => (
            <div key={i} className="h-32 bg-muted animate-pulse rounded-lg" />
          ))}
        </div>
      </div>
    );
  }

  // todo: remove mock functionality - calculate from real Convex data
  const tenantPrompts = MOCK_PROMPTS.filter(p => p.tenantId === tenant.id);
  const totalPrompts = tenantPrompts.length;
  const totalFrequency = tenantPrompts.reduce((sum, p) => sum + p.frequency, 0);
  const avgRelevance = (tenantPrompts.reduce((sum, p) => sum + p.relevanceScore, 0) / totalPrompts).toFixed(1);
  const categories = new Set(tenantPrompts.map(p => p.category)).size;

  const stats = [
    { label: 'Total Prompts', value: totalPrompts, icon: FileText, color: 'text-blue-500' },
    { label: 'Total Searches', value: totalFrequency, icon: Activity, color: 'text-green-500' },
    { label: 'Avg Relevance', value: avgRelevance, icon: TrendingUp, color: 'text-purple-500' },
    { label: 'Categories', value: categories, icon: Users, color: 'text-orange-500' },
  ];

  return (
    <div className="p-8 space-y-6">
      <div>
        <h1 className="text-2xl font-semibold mb-2" data-testid="text-page-title">Dashboard</h1>
        <p className="text-muted-foreground">
          Overview of user prompt analytics for {tenant.name}
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat) => (
          <Card key={stat.label} className="p-6">
            <div className="flex items-start justify-between">
              <div>
                <p className="text-sm text-muted-foreground mb-1">{stat.label}</p>
                <p className="text-3xl font-bold font-mono" data-testid={`stat-${stat.label.toLowerCase().replace(/\s+/g, '-')}`}>
                  {stat.value}
                </p>
              </div>
              <stat.icon className={`w-8 h-8 ${stat.color}`} />
            </div>
          </Card>
        ))}
      </div>

      <Card className="p-6">
        <h2 className="text-lg font-semibold mb-4">Recent Activity</h2>
        <div className="space-y-3">
          {tenantPrompts
            .sort((a, b) => b.lastUsed - a.lastUsed)
            .slice(0, 5)
            .map((prompt) => (
              <div 
                key={prompt.id} 
                className="flex items-center justify-between p-3 border rounded-lg hover-elevate"
                data-testid={`activity-${prompt.id}`}
              >
                <div className="flex-1">
                  <p className="text-sm font-medium">{prompt.promptText}</p>
                  <p className="text-xs text-muted-foreground mt-1">{prompt.category}</p>
                </div>
                <div className="text-right">
                  <p className="text-sm font-mono">{prompt.frequency}x</p>
                  <p className="text-xs text-muted-foreground">searches</p>
                </div>
              </div>
            ))}
        </div>
      </Card>
    </div>
  );
}
