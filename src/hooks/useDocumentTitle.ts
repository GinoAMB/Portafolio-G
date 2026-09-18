import { useEffect } from "react";

function useDocumentTitle() {
  useEffect(() => {
    const originalTitle = document.title;

    const handleVisibilityChange = () => {
      if (document.hidden) {
        document.title = "¿Ya te vas? :(";
      } else {
        document.title = originalTitle;
      }
    };

    document.addEventListener("visibilitychange", handleVisibilityChange);

    return () => {
      document.removeEventListener(
        "visibilitychange",
        handleVisibilityChange
      );

      document.title = originalTitle;
    };
  }, []);
}

export default useDocumentTitle;