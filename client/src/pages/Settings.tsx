import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { useTenant } from '@/contexts/TenantContext';
import { Settings as SettingsIcon, Save } from 'lucide-react';

export default function Settings() {
  const { tenant, isLoading } = useTenant();

  if (isLoading || !tenant) {
    return (
      <div className="p-8 space-y-6">
        <div className="h-8 w-32 bg-muted animate-pulse rounded" />
        <div className="h-64 bg-muted animate-pulse rounded-lg" />
      </div>
    );
  }

  return (
    <div className="p-8 space-y-6 max-w-2xl">
      <div>
        <h1 className="text-2xl font-semibold mb-2" data-testid="text-page-title">Settings</h1>
        <p className="text-muted-foreground">
          Manage your tenant configuration and preferences
        </p>
      </div>

      <Card className="p-6">
        <h2 className="text-lg font-semibold mb-4 flex items-center gap-2">
          <SettingsIcon className="w-5 h-5" />
          Tenant Information
        </h2>
        <div className="space-y-4">
          <div>
            <Label htmlFor="tenant-name">Company Name</Label>
            <Input 
              id="tenant-name" 
              defaultValue={tenant.name}
              data-testid="input-tenant-name"
            />
          </div>
          <div>
            <Label htmlFor="tenant-slug">Tenant Slug</Label>
            <Input 
              id="tenant-slug" 
              defaultValue={tenant.slug}
              disabled
              className="bg-muted"
              data-testid="input-tenant-slug"
            />
            <p className="text-xs text-muted-foreground mt-1">
              URL: ?tenant={tenant.slug}
            </p>
          </div>
          <div>
            <Label htmlFor="primary-color">Primary Color</Label>
            <div className="flex gap-2">
              <Input 
                id="primary-color" 
                type="color"
                defaultValue={tenant.primaryColor}
                className="w-20 h-10 p-1 cursor-pointer"
                data-testid="input-primary-color"
              />
              <Input 
                defaultValue={tenant.primaryColor}
                readOnly
                className="flex-1"
              />
            </div>
          </div>
        </div>
        <div className="flex justify-end mt-6">
          <Button data-testid="button-save-settings">
            <Save className="w-4 h-4 mr-2" />
            Save Changes
          </Button>
        </div>
      </Card>

      <Card className="p-6">
        <h2 className="text-lg font-semibold mb-4">Danger Zone</h2>
        <p className="text-sm text-muted-foreground mb-4">
          Irreversible actions that affect your tenant data
        </p>
        <Button variant="destructive" data-testid="button-delete-data">
          Delete All Prompt Data
        </Button>
      </Card>
    </div>
  );
}
