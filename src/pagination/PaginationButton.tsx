import React from "react";

interface PaginationButtonProps {
  text: string
  url: string | null
  onClick: (url: string) => void
}

export const PaginationButton = ({url, text, onClick}: PaginationButtonProps) => {
  if(url === null) {
    return <span>{text}</span>
  }

  return <button onClick={() => onClick(url)}>{text}</button>
}
