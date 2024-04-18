import { useEffect, useState } from "react";
import Comment from "../components/Comment";
import DefaultPageLayout from "./DefaultPage";
import { Stack } from "react-bootstrap";
import { getComments } from "../../data/apiService";

export default function MyComments() {
  const [comments, setComments] = useState<IComment[]>([]);

  useEffect(() => {
    getComments()
      .then((comments: IComment[]) => setComments(comments))
      .catch((e) => console.log(e));
  }, [comments]);
  return (
    <>
      <DefaultPageLayout>
        <h4 className="mb-2 mt-2">Мои комментарии к книгам:</h4>
        <Stack direction="horizontal">
          {comments.map((comment) => (
            <Comment comment={comment} />
          ))}
        </Stack>
      </DefaultPageLayout>
    </>
  );
}
