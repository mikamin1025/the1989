import { useState } from "preact/hooks";
// import type { JSXInternal } from "preact/src/jsx";
import type { JSX } from "preact";

const SearchButton = () => {
  const [value, setValue] = useState(
    typeof window !== "undefined"
      ? new URLSearchParams(window.location.search).get("q") ?? ""
      : ""
  );
  const handleChange: JSX.GenericEventHandler<HTMLInputElement> = (
    event
  ) => {
    setValue((event.target as HTMLInputElement).value);
  };
  const handleSubmit: JSX.GenericEventHandler<HTMLFormElement> = (
    event
  ) => {
    event.preventDefault();
    window.location.href = `/discord/search?q=${value}`;
  };

  return (
    <form
      role="search"
      onSubmit={handleSubmit}
    >
      <label for="article_search">
        記事を検索
      </label>
      <input
        id="article_search"
        type="search"
        value={value}
        onChange={handleChange}
      />
      <button>検索</button>
    </form>
  );
};

export default SearchButton;