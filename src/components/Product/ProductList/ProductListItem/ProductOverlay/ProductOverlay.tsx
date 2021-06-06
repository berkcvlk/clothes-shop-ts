import React from "react";
import { useLocation } from "react-router";
import { Backdrop, WrapperLink, SpanFirst, SpanLast } from "./styles";

interface Props {
  itemId: string;
}

const ProductOverlay: React.FC<Props> = ({ itemId }) => {
  // Use location hook to get current location which
  // we will use it later for showing over the background
  const location = useLocation();

  return (
    <Backdrop>
      <WrapperLink
        // Set the background property to show modal over the
        // current location render. Without this one, react-router
        // will change the url, but will unmount the previous component as well
        to={{
          pathname: `/quickview/${itemId}`,
          state: { background: location },
        }}
      >
        <SpanFirst>Click To</SpanFirst>
        <SpanLast>Quick View</SpanLast>
      </WrapperLink>
    </Backdrop>
  );
};

export default ProductOverlay;
