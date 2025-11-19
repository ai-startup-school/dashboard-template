import { createTRPCRouter } from "@/server/api/trpc";
import { twitterRouter } from "./dashboard/twitter";

// Dashboard API
export const dashboardRouter = createTRPCRouter({
  twitter: twitterRouter,
}); 
