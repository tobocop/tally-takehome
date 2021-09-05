interface StarsProps {
  count: string
}

export const Stars = ({count}: StarsProps) => {
  return <div>{count}</div>
}
