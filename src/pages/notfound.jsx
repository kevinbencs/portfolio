import { useLocation } from "react-router-dom";

export default function NotFound() {
  return (
    <>
        <h1 className="not-found-h1">
            {useLocation().pathname} not found
        </h1>
    </>
  )
}
