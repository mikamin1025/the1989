import useSWR from "swr";
import { getDiscordPosts } from "../libs/microcms";

const ArticleSearch = () => {
  const params = new URLSearchParams(window.location.search);
  //特定の投稿記事を取得するためのURLキーを取得する
  const contentId = params.get("contentId");
  const draftKey = params.get("draftKey");
  //検索窓に入力された文字列
  const q = params.get("q");

  const { data, error, isLoading } = useSWR(
    q === null ? null : ["/search", q],
    ([, q]) =>
      getDiscordPosts({
        // fields: ["id", "title"],
        q,
        orders: 'sortKey',
        filters: 'id[not_equals]dummy'
      })
  );

  if (error) return <div>エラーが発生しました</div>;

  if (isLoading) return <div>読み込み中...</div>;

  return (
    <div>
      {data?.contents.length !== 0 ? (
        <ul>
          {data?.contents.map(({ id, title }:any) => (
            <li key={id}>
              <a href={id}>{title}</a>
            </li>
          ))}
        </ul>
      ) : (
        <div>検索結果はありません</div>
      )}
    </div>
  );
};

export default ArticleSearch;
