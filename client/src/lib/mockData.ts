// todo: remove mock functionality - this entire file will be replaced with Convex queries
import type { Tenant, UserPrompt } from '@shared/types';
import acmeLogo from '@assets/generated_images/Acme_Analytics_company_logo_a488e71c.png';
import cloudDocsLogo from '@assets/generated_images/CloudDocs_company_logo_9440eb81.png';
import taskFlowLogo from '@assets/generated_images/TaskFlow_company_logo_99eb063c.png';

export const MOCK_TENANTS: Tenant[] = [
  {
    id: '1',
    name: 'Acme Analytics',
    slug: 'acme-analytics',
    logoUrl: acmeLogo,
    primaryColor: '#3b82f6',
    createdAt: Date.now() - 90 * 24 * 60 * 60 * 1000,
  },
  {
    id: '2',
    name: 'CloudDocs',
    slug: 'clouddocs',
    logoUrl: cloudDocsLogo,
    primaryColor: '#14b8a6',
    createdAt: Date.now() - 60 * 24 * 60 * 60 * 1000,
  },
  {
    id: '3',
    name: 'TaskFlow',
    slug: 'taskflow',
    logoUrl: taskFlowLogo,
    primaryColor: '#8b5cf6',
    createdAt: Date.now() - 30 * 24 * 60 * 60 * 1000,
  },
];

export const MOCK_PROMPTS: UserPrompt[] = [
  // Acme Analytics prompts
  { id: '1', tenantId: '1', promptText: 'How to create custom dashboards?', category: 'Dashboards', frequency: 45, lastUsed: Date.now() - 2 * 60 * 60 * 1000, relevanceScore: 9, createdAt: Date.now() - 30 * 24 * 60 * 60 * 1000 },
  { id: '2', tenantId: '1', promptText: 'Export data to CSV format', category: 'Data Export', frequency: 38, lastUsed: Date.now() - 5 * 60 * 60 * 1000, relevanceScore: 8, createdAt: Date.now() - 28 * 24 * 60 * 60 * 1000 },
  { id: '3', tenantId: '1', promptText: 'Set up user permissions and roles', category: 'Security', frequency: 32, lastUsed: Date.now() - 1 * 24 * 60 * 60 * 1000, relevanceScore: 10, createdAt: Date.now() - 25 * 24 * 60 * 60 * 1000 },
  { id: '4', tenantId: '1', promptText: 'Connect to external data sources', category: 'Integrations', frequency: 28, lastUsed: Date.now() - 3 * 24 * 60 * 60 * 1000, relevanceScore: 7, createdAt: Date.now() - 22 * 24 * 60 * 60 * 1000 },
  { id: '5', tenantId: '1', promptText: 'Schedule automated reports', category: 'Automation', frequency: 25, lastUsed: Date.now() - 6 * 60 * 60 * 1000, relevanceScore: 8, createdAt: Date.now() - 20 * 24 * 60 * 60 * 1000 },
  { id: '6', tenantId: '1', promptText: 'Customize chart colors and themes', category: 'Visualization', frequency: 22, lastUsed: Date.now() - 12 * 60 * 60 * 1000, relevanceScore: 6, createdAt: Date.now() - 18 * 24 * 60 * 60 * 1000 },
  { id: '7', tenantId: '1', promptText: 'Filter data by date range', category: 'Data Analysis', frequency: 41, lastUsed: Date.now() - 1 * 60 * 60 * 1000, relevanceScore: 9, createdAt: Date.now() - 15 * 24 * 60 * 60 * 1000 },
  { id: '8', tenantId: '1', promptText: 'Share dashboards with team members', category: 'Collaboration', frequency: 19, lastUsed: Date.now() - 2 * 24 * 60 * 60 * 1000, relevanceScore: 7, createdAt: Date.now() - 12 * 24 * 60 * 60 * 1000 },
  { id: '9', tenantId: '1', promptText: 'Create calculated fields and metrics', category: 'Data Analysis', frequency: 30, lastUsed: Date.now() - 8 * 60 * 60 * 1000, relevanceScore: 8, createdAt: Date.now() - 10 * 24 * 60 * 60 * 1000 },
  { id: '10', tenantId: '1', promptText: 'Set up real-time data refresh', category: 'Configuration', frequency: 17, lastUsed: Date.now() - 4 * 24 * 60 * 60 * 1000, relevanceScore: 6, createdAt: Date.now() - 8 * 24 * 60 * 60 * 1000 },
  { id: '11', tenantId: '1', promptText: 'Embed analytics in external apps', category: 'Integrations', frequency: 14, lastUsed: Date.now() - 5 * 24 * 60 * 60 * 1000, relevanceScore: 5, createdAt: Date.now() - 6 * 24 * 60 * 60 * 1000 },
  { id: '12', tenantId: '1', promptText: 'Configure alert notifications', category: 'Alerts', frequency: 26, lastUsed: Date.now() - 10 * 60 * 60 * 1000, relevanceScore: 7, createdAt: Date.now() - 5 * 24 * 60 * 60 * 1000 },
  { id: '13', tenantId: '1', promptText: 'Troubleshoot slow query performance', category: 'Performance', frequency: 11, lastUsed: Date.now() - 7 * 24 * 60 * 60 * 1000, relevanceScore: 8, createdAt: Date.now() - 4 * 24 * 60 * 60 * 1000 },
  { id: '14', tenantId: '1', promptText: 'Import historical data', category: 'Data Import', frequency: 8, lastUsed: Date.now() - 10 * 24 * 60 * 60 * 1000, relevanceScore: 4, createdAt: Date.now() - 3 * 24 * 60 * 60 * 1000 },
  { id: '15', tenantId: '1', promptText: 'Create drill-down reports', category: 'Reporting', frequency: 21, lastUsed: Date.now() - 14 * 60 * 60 * 1000, relevanceScore: 7, createdAt: Date.now() - 2 * 24 * 60 * 60 * 1000 },

  // CloudDocs prompts
  { id: '16', tenantId: '2', promptText: 'How to share documents with external users?', category: 'Sharing', frequency: 50, lastUsed: Date.now() - 1 * 60 * 60 * 1000, relevanceScore: 10, createdAt: Date.now() - 40 * 24 * 60 * 60 * 1000 },
  { id: '17', tenantId: '2', promptText: 'Version control best practices', category: 'Version Control', frequency: 42, lastUsed: Date.now() - 4 * 60 * 60 * 1000, relevanceScore: 9, createdAt: Date.now() - 38 * 24 * 60 * 60 * 1000 },
  { id: '18', tenantId: '2', promptText: 'Set up collaboration features', category: 'Collaboration', frequency: 37, lastUsed: Date.now() - 6 * 60 * 60 * 1000, relevanceScore: 8, createdAt: Date.now() - 35 * 24 * 60 * 60 * 1000 },
  { id: '19', tenantId: '2', promptText: 'Configure document permissions', category: 'Security', frequency: 33, lastUsed: Date.now() - 2 * 24 * 60 * 60 * 1000, relevanceScore: 9, createdAt: Date.now() - 32 * 24 * 60 * 60 * 1000 },
  { id: '20', tenantId: '2', promptText: 'Real-time editing and comments', category: 'Editing', frequency: 29, lastUsed: Date.now() - 8 * 60 * 60 * 1000, relevanceScore: 7, createdAt: Date.now() - 30 * 24 * 60 * 60 * 1000 },
  { id: '21', tenantId: '2', promptText: 'Organize documents into folders', category: 'Organization', frequency: 24, lastUsed: Date.now() - 3 * 24 * 60 * 60 * 1000, relevanceScore: 6, createdAt: Date.now() - 28 * 24 * 60 * 60 * 1000 },
  { id: '22', tenantId: '2', promptText: 'Search across all documents', category: 'Search', frequency: 46, lastUsed: Date.now() - 3 * 60 * 60 * 1000, relevanceScore: 9, createdAt: Date.now() - 25 * 24 * 60 * 60 * 1000 },
  { id: '23', tenantId: '2', promptText: 'Restore previous document versions', category: 'Version Control', frequency: 18, lastUsed: Date.now() - 5 * 24 * 60 * 60 * 1000, relevanceScore: 8, createdAt: Date.now() - 22 * 24 * 60 * 60 * 1000 },
  { id: '24', tenantId: '2', promptText: 'Export documents to PDF', category: 'Export', frequency: 31, lastUsed: Date.now() - 10 * 60 * 60 * 1000, relevanceScore: 7, createdAt: Date.now() - 20 * 24 * 60 * 60 * 1000 },
  { id: '25', tenantId: '2', promptText: 'Set up offline access', category: 'Configuration', frequency: 16, lastUsed: Date.now() - 6 * 24 * 60 * 60 * 1000, relevanceScore: 6, createdAt: Date.now() - 18 * 24 * 60 * 60 * 1000 },
  { id: '26', tenantId: '2', promptText: 'Integrate with cloud storage', category: 'Integrations', frequency: 22, lastUsed: Date.now() - 12 * 60 * 60 * 1000, relevanceScore: 7, createdAt: Date.now() - 15 * 24 * 60 * 60 * 1000 },
  { id: '27', tenantId: '2', promptText: 'Create document templates', category: 'Templates', frequency: 27, lastUsed: Date.now() - 9 * 60 * 60 * 1000, relevanceScore: 8, createdAt: Date.now() - 12 * 24 * 60 * 60 * 1000 },
  { id: '28', tenantId: '2', promptText: 'Track document activity history', category: 'Analytics', frequency: 13, lastUsed: Date.now() - 7 * 24 * 60 * 60 * 1000, relevanceScore: 5, createdAt: Date.now() - 10 * 24 * 60 * 60 * 1000 },
  { id: '29', tenantId: '2', promptText: 'Customize branding and themes', category: 'Customization', frequency: 9, lastUsed: Date.now() - 8 * 24 * 60 * 60 * 1000, relevanceScore: 4, createdAt: Date.now() - 8 * 24 * 60 * 60 * 1000 },
  { id: '30', tenantId: '2', promptText: 'Manage team workspaces', category: 'Workspaces', frequency: 20, lastUsed: Date.now() - 15 * 60 * 60 * 1000, relevanceScore: 7, createdAt: Date.now() - 5 * 24 * 60 * 60 * 1000 },

  // TaskFlow prompts
  { id: '31', tenantId: '3', promptText: 'Create project templates', category: 'Templates', frequency: 44, lastUsed: Date.now() - 2 * 60 * 60 * 1000, relevanceScore: 9, createdAt: Date.now() - 20 * 24 * 60 * 60 * 1000 },
  { id: '32', tenantId: '3', promptText: 'Assign tasks to team members', category: 'Task Management', frequency: 48, lastUsed: Date.now() - 1 * 60 * 60 * 1000, relevanceScore: 10, createdAt: Date.now() - 19 * 24 * 60 * 60 * 1000 },
  { id: '33', tenantId: '3', promptText: 'Track project progress and milestones', category: 'Tracking', frequency: 39, lastUsed: Date.now() - 5 * 60 * 60 * 1000, relevanceScore: 8, createdAt: Date.now() - 18 * 24 * 60 * 60 * 1000 },
  { id: '34', tenantId: '3', promptText: 'Set up automated workflows', category: 'Automation', frequency: 35, lastUsed: Date.now() - 7 * 60 * 60 * 1000, relevanceScore: 9, createdAt: Date.now() - 17 * 24 * 60 * 60 * 1000 },
  { id: '35', tenantId: '3', promptText: 'Customize task statuses', category: 'Customization', frequency: 28, lastUsed: Date.now() - 1 * 24 * 60 * 60 * 1000, relevanceScore: 7, createdAt: Date.now() - 16 * 24 * 60 * 60 * 1000 },
  { id: '36', tenantId: '3', promptText: 'Generate project reports', category: 'Reporting', frequency: 31, lastUsed: Date.now() - 9 * 60 * 60 * 1000, relevanceScore: 8, createdAt: Date.now() - 15 * 24 * 60 * 60 * 1000 },
  { id: '37', tenantId: '3', promptText: 'Create recurring tasks', category: 'Task Management', frequency: 25, lastUsed: Date.now() - 2 * 24 * 60 * 60 * 1000, relevanceScore: 7, createdAt: Date.now() - 14 * 24 * 60 * 60 * 1000 },
  { id: '38', tenantId: '3', promptText: 'Set task dependencies', category: 'Planning', frequency: 21, lastUsed: Date.now() - 11 * 60 * 60 * 1000, relevanceScore: 6, createdAt: Date.now() - 13 * 24 * 60 * 60 * 1000 },
  { id: '39', tenantId: '3', promptText: 'Manage sprint planning', category: 'Agile', frequency: 36, lastUsed: Date.now() - 4 * 60 * 60 * 1000, relevanceScore: 9, createdAt: Date.now() - 12 * 24 * 60 * 60 * 1000 },
  { id: '40', tenantId: '3', promptText: 'View team capacity and workload', category: 'Resource Management', frequency: 26, lastUsed: Date.now() - 13 * 60 * 60 * 1000, relevanceScore: 7, createdAt: Date.now() - 11 * 24 * 60 * 60 * 1000 },
  { id: '41', tenantId: '3', promptText: 'Integrate with calendar apps', category: 'Integrations', frequency: 19, lastUsed: Date.now() - 3 * 24 * 60 * 60 * 1000, relevanceScore: 6, createdAt: Date.now() - 10 * 24 * 60 * 60 * 1000 },
  { id: '42', tenantId: '3', promptText: 'Configure notification settings', category: 'Settings', frequency: 22, lastUsed: Date.now() - 14 * 60 * 60 * 1000, relevanceScore: 5, createdAt: Date.now() - 9 * 24 * 60 * 60 * 1000 },
  { id: '43', tenantId: '3', promptText: 'Use kanban board view', category: 'Views', frequency: 40, lastUsed: Date.now() - 6 * 60 * 60 * 1000, relevanceScore: 8, createdAt: Date.now() - 8 * 24 * 60 * 60 * 1000 },
  { id: '44', tenantId: '3', promptText: 'Add time tracking to tasks', category: 'Time Management', frequency: 17, lastUsed: Date.now() - 4 * 24 * 60 * 60 * 1000, relevanceScore: 6, createdAt: Date.now() - 7 * 24 * 60 * 60 * 1000 },
  { id: '45', tenantId: '3', promptText: 'Create Gantt chart timelines', category: 'Planning', frequency: 15, lastUsed: Date.now() - 5 * 24 * 60 * 60 * 1000, relevanceScore: 7, createdAt: Date.now() - 6 * 24 * 60 * 60 * 1000 },
];
