import { defineSchema, defineTable } from "convex/server";
import { v } from "convex/values";

export default defineSchema({
  prompts: defineTable({
    id: v.string(),
    category: v.string(),
    createdAt: v.number(),
    frequency: v.number(),
    lastUsed: v.number(),
    promptText: v.string(),
    relevanceScore: v.number(),
    tenantId: v.string(),
  })
    .index("by_tenant", ["tenantId"])
    .index("by_tenant_and_frequency", ["tenantId", "frequency"]),
});
