import React from "react";
import { useLocation } from "react-router";
import { Backdrop, WrapperLink, SpanFirst, SpanLast } from "./styles";

interface Props {
  itemId: string;
}

const Overlay: React.FC<Props> = ({ itemId }) => {
  // Use location hook to get current location which
  // we will use it later for showing over the background
  const location = useLocation();

  // Make the document non-scrollable
  const preventScroll = () => {
    document.body.style.overflowY = "hidden";
  };

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
        onClick={preventScroll}
      >
        <SpanFirst>Click To</SpanFirst>
        <SpanLast>Quick View</SpanLast>
      </WrapperLink>
    </Backdrop>
  );
};

export default Overlay;
