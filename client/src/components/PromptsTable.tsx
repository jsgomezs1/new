import { useState } from 'react';
import type { UserPrompt, SortField, SortDirection } from '@shared/types';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { ArrowUpDown, ArrowUp, ArrowDown, Search, Download } from 'lucide-react';
import Papa from 'papaparse';
import { formatDistanceToNow } from 'date-fns';

interface PromptsTableProps {
  prompts: UserPrompt[];
  isLoading?: boolean;
}

export function PromptsTable({ prompts, isLoading }: PromptsTableProps) {
  const [searchTerm, setSearchTerm] = useState('');
  const [sortField, setSortField] = useState<SortField>('frequency');
  const [sortDirection, setSortDirection] = useState<SortDirection>('desc');
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  const handleSort = (field: SortField) => {
    if (sortField === field) {
      setSortDirection(sortDirection === 'asc' ? 'desc' : 'asc');
    } else {
      setSortField(field);
      setSortDirection('desc');
    }
  };

  const filteredAndSorted = prompts
    .filter(prompt => 
      prompt.promptText.toLowerCase().includes(searchTerm.toLowerCase()) ||
      prompt.category.toLowerCase().includes(searchTerm.toLowerCase())
    )
    .sort((a, b) => {
      const aValue = a[sortField];
      const bValue = b[sortField];
      const modifier = sortDirection === 'asc' ? 1 : -1;
      
      if (typeof aValue === 'string' && typeof bValue === 'string') {
        return aValue.localeCompare(bValue) * modifier;
      }
      return ((aValue as number) - (bValue as number)) * modifier;
    });

  const totalPages = Math.ceil(filteredAndSorted.length / itemsPerPage);
  const paginatedData = filteredAndSorted.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const exportToCSV = () => {
    const csv = Papa.unparse(
      filteredAndSorted.map(p => ({
        'Prompt Text': p.promptText,
        'Category': p.category,
        'Frequency': p.frequency,
        'Last Used': new Date(p.lastUsed).toLocaleDateString(),
        'Relevance Score': p.relevanceScore,
      }))
    );
    const blob = new Blob([csv], { type: 'text/csv' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `prompts-${Date.now()}.csv`;
    a.click();
  };

  const SortIcon = ({ field }: { field: SortField }) => {
    if (sortField !== field) return <ArrowUpDown className="w-4 h-4 ml-2" />;
    return sortDirection === 'asc' ? 
      <ArrowUp className="w-4 h-4 ml-2" /> : 
      <ArrowDown className="w-4 h-4 ml-2" />;
  };

  if (isLoading) {
    return (
      <div className="space-y-4">
        <div className="flex items-center justify-between gap-4">
          <div className="h-10 w-64 bg-muted animate-pulse rounded-md" />
          <div className="h-10 w-32 bg-muted animate-pulse rounded-md" />
        </div>
        <div className="border rounded-lg overflow-hidden">
          <div className="bg-muted h-12 border-b" />
          {[...Array(10)].map((_, i) => (
            <div key={i} className="h-12 border-b last:border-0 bg-background animate-pulse" />
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between gap-4">
        <div className="relative flex-1 max-w-sm">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
          <Input
            type="search"
            placeholder="Search prompts..."
            value={searchTerm}
            onChange={(e) => {
              setSearchTerm(e.target.value);
              setCurrentPage(1);
            }}
            className="pl-10"
            data-testid="input-search-prompts"
          />
        </div>
        <Button 
          variant="outline" 
          onClick={exportToCSV}
          data-testid="button-export-csv"
        >
          <Download className="w-4 h-4 mr-2" />
          Export CSV
        </Button>
      </div>

      <div className="border rounded-lg overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-muted border-b">
              <tr>
                <th className="text-left px-4 py-3 text-sm font-medium uppercase tracking-wide">
                  <button
                    onClick={() => handleSort('promptText')}
                    className="flex items-center hover-elevate active-elevate-2 rounded px-2 py-1 -mx-2 -my-1"
                    data-testid="button-sort-prompt"
                  >
                    Prompt Text
                    <SortIcon field="promptText" />
                  </button>
                </th>
                <th className="text-left px-4 py-3 text-sm font-medium uppercase tracking-wide">
                  <button
                    onClick={() => handleSort('frequency')}
                    className="flex items-center hover-elevate active-elevate-2 rounded px-2 py-1 -mx-2 -my-1"
                    data-testid="button-sort-frequency"
                  >
                    Frequency
                    <SortIcon field="frequency" />
                  </button>
                </th>
                <th className="text-left px-4 py-3 text-sm font-medium uppercase tracking-wide">Category</th>
                <th className="text-left px-4 py-3 text-sm font-medium uppercase tracking-wide">
                  <button
                    onClick={() => handleSort('lastUsed')}
                    className="flex items-center hover-elevate active-elevate-2 rounded px-2 py-1 -mx-2 -my-1"
                    data-testid="button-sort-lastused"
                  >
                    Last Used
                    <SortIcon field="lastUsed" />
                  </button>
                </th>
                <th className="text-left px-4 py-3 text-sm font-medium uppercase tracking-wide">
                  <button
                    onClick={() => handleSort('relevanceScore')}
                    className="flex items-center hover-elevate active-elevate-2 rounded px-2 py-1 -mx-2 -my-1"
                    data-testid="button-sort-relevance"
                  >
                    Score
                    <SortIcon field="relevanceScore" />
                  </button>
                </th>
              </tr>
            </thead>
            <tbody>
              {paginatedData.length === 0 ? (
                <tr>
                  <td colSpan={5} className="px-4 py-12 text-center text-muted-foreground">
                    No prompts found
                  </td>
                </tr>
              ) : (
                paginatedData.map((prompt) => (
                  <tr 
                    key={prompt.id} 
                    className="border-b last:border-0 hover-elevate"
                    data-testid={`row-prompt-${prompt.id}`}
                  >
                    <td className="px-4 py-3 text-sm" data-testid={`text-prompt-${prompt.id}`}>
                      {prompt.promptText}
                    </td>
                    <td className="px-4 py-3 text-sm font-mono" data-testid={`text-frequency-${prompt.id}`}>
                      {prompt.frequency}
                    </td>
                    <td className="px-4 py-3">
                      <Badge variant="secondary" className="text-xs" data-testid={`badge-category-${prompt.id}`}>
                        {prompt.category}
                      </Badge>
                    </td>
                    <td className="px-4 py-3 text-sm text-muted-foreground" data-testid={`text-lastused-${prompt.id}`}>
                      {formatDistanceToNow(new Date(prompt.lastUsed), { addSuffix: true })}
                    </td>
                    <td className="px-4 py-3">
                      <div className="flex items-center gap-2">
                        <div className="flex-1 h-2 bg-muted rounded-full overflow-hidden max-w-[60px]">
                          <div 
                            className="h-full bg-primary rounded-full" 
                            style={{ width: `${(prompt.relevanceScore / 10) * 100}%` }}
                          />
                        </div>
                        <span className="text-sm font-mono w-6 text-right" data-testid={`text-score-${prompt.id}`}>
                          {prompt.relevanceScore}
                        </span>
                      </div>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>

      {totalPages > 1 && (
        <div className="flex items-center justify-between">
          <p className="text-sm text-muted-foreground" data-testid="text-pagination-info">
            Showing {((currentPage - 1) * itemsPerPage) + 1}-{Math.min(currentPage * itemsPerPage, filteredAndSorted.length)} of {filteredAndSorted.length}
          </p>
          <div className="flex gap-2">
            <Button
              variant="outline"
              size="sm"
              onClick={() => setCurrentPage(p => Math.max(1, p - 1))}
              disabled={currentPage === 1}
              data-testid="button-prev-page"
            >
              Previous
            </Button>
            <Button
              variant="outline"
              size="sm"
              onClick={() => setCurrentPage(p => Math.min(totalPages, p + 1))}
              disabled={currentPage === totalPages}
              data-testid="button-next-page"
            >
              Next
            </Button>
          </div>
        </div>
      )}
    </div>
  );
}
