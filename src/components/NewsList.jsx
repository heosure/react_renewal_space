import cssStyle from "../css/News.module.css";
export default function NewsList({ newsList }) {
  return (
    <div className={cssStyle.newsDesc}>
      <div className={cssStyle.newsImg}>
        <img
          src={`${process.env.PUBLIC_URL}/img/${newsList.InfImg}`}
          alt={newsList.InfTitle}
        />
      </div>
      <span>{newsList.InfTitle}</span>
    </div>
  );
}
