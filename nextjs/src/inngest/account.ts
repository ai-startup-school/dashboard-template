import { inngestClient } from "@/lib/clients/inngest";

export const accountCreated = inngestClient.createFunction(
  { id: "account/created" },
  { event: "account/created" },
  async ({ event, step }) => {
    const id = event.user.id;
  },
);

