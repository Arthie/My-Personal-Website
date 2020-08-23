import React, { FC } from "react";

interface DetailsProps {
  summary?: boolean;
}

const Details: FC<DetailsProps> = ({
  summary,
  children,
  ...props
}) => {
  return (
    <details {...props}>
      {summary ?? summary}
      {children}
    </details>
  );
};

export default Details;
