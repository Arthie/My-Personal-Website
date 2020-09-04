interface DetailsProps {
  summary?: React.ReactNode;
  children: JSX.Element
}

const Details = ({ summary = null, children, ...props }: DetailsProps) => {
  return (
    <details {...props}>
      {summary}
      {children}
    </details>
  );
};

export default Details;
