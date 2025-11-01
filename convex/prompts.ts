import { query } from "./_generated/server";
import { v } from "convex/values";

export const getByTenant = query({
  args: { tenantId: v.string() },
  handler: async (ctx, args) => {
    const prompts = await ctx.db
      .query("prompts")
      .withIndex("by_tenant", (q) => q.eq("tenantId", args.tenantId))
      .collect();

    return prompts;
  },
});
