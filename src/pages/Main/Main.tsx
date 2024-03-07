import { useEffect } from "react"
import { useAppDispatch, useAppSelector } from "../../hooks/hooksState"
import { PostFeed } from "../../lib/PostFeed"
import { getFeedPosts } from "../../store/feed/feedActions"
import { decrement, increment } from "../../store/feed/feedSlice"

function Main() {
  const dispatch = useAppDispatch()
  const { posts, page } = useAppSelector((state) => state.feed)

  useEffect(() => {
    dispatch(getFeedPosts(page))
  }, [page])

  console.log("Render main");

  return (
    <div>
      <div className="btns">
        <button onClick={() => dispatch(decrement())}>{"<"}</button>
        {page}
        <button onClick={() => dispatch(increment())}>{">"}</button>

      </div>
     <PostFeed posts={posts} />
     
    </div>
  )
}

export default Main