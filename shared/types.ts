// todo: remove mock functionality - these will be replaced with Convex types
export interface Tenant {
  id: string;
  name: string;
  slug: string;
  logoUrl: string;
  primaryColor: string;
  createdAt: number;
}

export interface UserPrompt {
  id: string;
  tenantId: string;
  promptText: string;
  category: string;
  frequency: number;
  lastUsed: number;
  relevanceScore: number;
  createdAt: number;
}

export type SortField = 'frequency' | 'lastUsed' | 'relevanceScore' | 'promptText';
export type SortDirection = 'asc' | 'desc';
