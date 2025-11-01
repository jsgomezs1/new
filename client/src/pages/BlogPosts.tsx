import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { FileText, Plus } from 'lucide-react';

export default function BlogPosts() {
  return (
    <div className="p-8 space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-semibold mb-2" data-testid="text-page-title">Blog Posts</h1>
          <p className="text-muted-foreground">
            Create and manage AEO-optimized blog content
          </p>
        </div>
        <Button data-testid="button-create-post">
          <Plus className="w-4 h-4 mr-2" />
          New Post
        </Button>
      </div>

      <Card className="p-12">
        <div className="flex flex-col items-center justify-center text-center">
          <div className="w-16 h-16 bg-muted rounded-full flex items-center justify-center mb-4">
            <FileText className="w-8 h-8 text-muted-foreground" />
          </div>
          <h3 className="text-lg font-semibold mb-2">No blog posts yet</h3>
          <p className="text-muted-foreground mb-6 max-w-md">
            Start creating AEO-optimized blog posts based on your top user prompts to improve search visibility
          </p>
          <Button data-testid="button-create-first-post">
            <Plus className="w-4 h-4 mr-2" />
            Create Your First Post
          </Button>
        </div>
      </Card>
    </div>
  );
}
