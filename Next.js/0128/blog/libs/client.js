import { createClient } from "microcms-js-sdk";

export const client = createClient({
    serviceDomain: "naoki-hashimoto-blog-next-js",
    apiKey: process.env.API_KEY
});

