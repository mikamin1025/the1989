import { createClient, type MicroCMSQueries } from "microcms-js-sdk";

//microCMSのアカウント情報
const client = createClient({
  serviceDomain: import.meta.env.SERVICE_DOMAIN,
  apiKey: import.meta.env.API_KEY,
})

//API呼び出し（POST情報）
export const getDiscordPosts = async(queries?: MicroCMSQueries) => {
  return await client.get({ endpoint: "discord_post", queries: { orders: 'sortKey'}});
};
//投稿記事の詳細を取得する
export const getDiscordPostDetail = async (
  posts: string,
  queries?: MicroCMSQueries,
) => {
  return await client.getListDetail({
    endpoint: "discord_post",
    contentId: posts,
    queries,
  });
}

//API呼び出し（カテゴリー）
export const getCategorys = async(queries?: MicroCMSQueries) => {
  return await client.get({ endpoint: "category", queries: { orders: 'createdAt' } });
};