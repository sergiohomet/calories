import { useContext } from "react";
import { ActivityContext } from "../context/activityContext";

export const useActivity = () => {
  const context = useContext(ActivityContext);

  if (!context) {
    throw new Error(
      "ActivityContext must be used within a ActivityContextProvider"
    );
  }
  return context;
};
