import React, { FC } from "react";

interface DetailsProps {
  summary?: React.ReactNode;
}

const Details: FC<DetailsProps> = ({ summary = null, children, ...props }) => {
  return (
    <details {...props}>
      {summary}
      {children}
    </details>
  );
};

export default Details;
