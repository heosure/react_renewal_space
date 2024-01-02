export default function SearchModal({ search }) {
  return (
    <>
      {search && (
        <div className="searchModal">
          <input placeholder="찾으시는 내용을 입력하세요. ex)한옥" />
        </div>
      )}
    </>
  );
}
