import { createContext, useContext, useState, useEffect, type ReactNode } from 'react';
import type { Tenant } from '@shared/types';
import { MOCK_TENANTS } from '@/lib/mockData';

interface TenantContextType {
  tenant: Tenant | null;
  setTenantSlug: (slug: string) => void;
  isLoading: boolean;
}

const TenantContext = createContext<TenantContextType | undefined>(undefined);

export function TenantProvider({ children }: { children: ReactNode }) {
  const [tenant, setTenant] = useState<Tenant | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  const setTenantSlug = (slug: string) => {
    setIsLoading(true);
    // todo: remove mock functionality - replace with Convex query getTenantBySlug
    setTimeout(() => {
      const foundTenant = MOCK_TENANTS.find(t => t.slug === slug);
      setTenant(foundTenant || MOCK_TENANTS[0]);
      setIsLoading(false);
    }, 100);
  };

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const tenantSlug = params.get('tenant') || 'acme-analytics';
    setTenantSlug(tenantSlug);
  }, []);

  return (
    <TenantContext.Provider value={{ tenant, setTenantSlug, isLoading }}>
      {children}
    </TenantContext.Provider>
  );
}

export function useTenant() {
  const context = useContext(TenantContext);
  if (context === undefined) {
    throw new Error('useTenant must be used within a TenantProvider');
  }
  return context;
}
