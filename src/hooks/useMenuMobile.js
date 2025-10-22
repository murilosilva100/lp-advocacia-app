import { useState } from "react"

export function useMenuMobile() {
  const [menuAtivo, setMenuAtivo] = useState(false)

  const alternarMenu = () => {
    setMenuAtivo((prev) => !prev)
  }

  return { menuAtivo, alternarMenu }
}