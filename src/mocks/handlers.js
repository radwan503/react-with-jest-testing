import { http } from "msw";

export const handlers = [
 http.post("http://localhost:3001/addComment", (req, res, ctx) => {
  return res(
   ctx.json({
    id: Date.now(),
    text: req.body.text
   })
  )
 })
]