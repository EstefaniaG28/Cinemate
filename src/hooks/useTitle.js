import { useEffect } from "react";

const useTitle = (title) => {
  useEffect(() => {
    document.title = `${title} / Cinemate`;
  });

  return null;
};

export default useTitle;
