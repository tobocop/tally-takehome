import React from "react";
import "./PaginationButton.scss"

interface PaginationButtonProps {
  text: string
  url: string | null
  onClick: (url: string) => void
}

export const PaginationButton = ({url, text, onClick}: PaginationButtonProps) =>
  <span className="PaginationButton">
    {
      url === null ? text : <button onClick={() => onClick(url)}>{text}</button>
    }
  </span>
