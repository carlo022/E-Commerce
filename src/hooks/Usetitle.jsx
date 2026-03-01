import { useEffect } from "react"

export const Usetitle = (title) => {
  useEffect(() => {
    document.title = `${title} - ShopUs`;
  }, [title]);
  return null;
}