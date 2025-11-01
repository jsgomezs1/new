import { PromptsTable } from '../PromptsTable';
import { MOCK_PROMPTS } from '@/lib/mockData';

export default function PromptsTableExample() {
  const samplePrompts = MOCK_PROMPTS.slice(0, 15);
  
  return <PromptsTable prompts={samplePrompts} />;
}
