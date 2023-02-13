import { withLive } from "$live/live.ts";

export const handler = withLive({
  siteId: 517,
  site: "testedev",
  domains: ["testedev.deco.site"],
});