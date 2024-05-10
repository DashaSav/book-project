import "../styles/App.scss";

interface ChapterProps {
  chapter: DBChapter;
}

export const Chapter = ({ chapter }: ChapterProps) => {
  return (
    <div>
      {/* //тут переход на конкретную главу для чтения */}
      <a href={"/chapter/read/" + chapter._id}> {chapter.title} </a>
    </div>
  );
};

export default Chapter;
