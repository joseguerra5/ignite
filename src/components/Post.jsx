import styles from "./Post.module.css";
import { format, formatDistanceToNow } from "date-fns";
import ptPt from "date-fns/locale/pt";
import { Comment } from "./Comment.jsx";
import { useState } from "react";



export function Post({ author, publishedAt, content }) {
  const [comments, setComments] = useState(["Post muito legal, hein"]);

  const [newCommentText, setNewCommentText] = useState('')

  function handleNewCommentChange() {
    event.target.setCustomValidity("")
    setNewCommentText(event.target.value)
  }

  const publishedDateFormatted = format(
    publishedAt,
    "d 'de' LLLL 'às' HH:mm'h'",
    {
      locale: ptPt,
    }
  );

  const publishedDateRelativeToNow = formatDistanceToNow(publishedAt, {
    locale: ptPt,
    addSuffix: true,
  });

  function handleCreateNewComment(event) {
    event.preventDefault();
    // Imutabilidade - adiciona um novo comentário mantendo os anteriores
    //o name do input é resgatado assim as info event.target.comment.value
    

    setComments((prevComments) => [...prevComments, newCommentText]);
    setNewCommentText('')
  }

  function deleteComment(commentToDelete) {
    const commentsWithoutDeletedOne = comments.filter(comment => {
      return comment !== commentToDelete
    })
    setComments(commentsWithoutDeletedOne)
  }

  function handleNewCommentInvalid() {
    event.target.setCustomValidity("Esse campo é obrigatório")
  }

  const isNewCommentEmpty = newCommentText.length === 0

  return (
    <article className={styles.post}>
      <header className={styles.header}>
        <div className={styles.userContent}>
          <img src={author.avatarUrl} className={styles.avatar} alt="Avatar" />
          <div className={styles.nameContent}>
            <strong>{author.name}</strong>
            <span>{author.role}</span>
          </div>
        </div>
        <time title={publishedDateFormatted} dateTime={publishedAt.toISOString()}>
          {publishedDateRelativeToNow}
        </time>
      </header>
      <main>
        {content.map((line, index) => {
          if (line.type === "paragraph") {
            return <p key={index}>{line.content}</p>;
          } else if (line.type === "link") {
            return (
              <p key={index}>
                <a href="#">{line.content}</a>
              </p>
            );
          }
          return null;
        })}
      </main>

      <form onSubmit={handleCreateNewComment} className={styles.commentForm}>
        <strong>Deixe seu feedback</strong>

        <textarea
          placeholder="Escreva um comentário..."
          className={styles.textArea}
          name="comment"
          value={newCommentText}
          onChange={handleNewCommentChange}
          onInvalid={handleNewCommentInvalid}
          required
        />

        <footer className={styles.footerButton}>
          <button type="submit" className={styles.button} disabled={isNewCommentEmpty} >
            Publicar
          </button>
        </footer>
      </form>

      <div className={styles.commentList}>
        {comments.map((comment, index) => {
          return (
          <Comment 
            key={index} 
            content={comment} 
            onDeleteComment={deleteComment} 
            />
          )
        })}
      </div>
    </article>
  );
}
