import React from "react";

export const useOpen = () => {
  const [open, setOpen] = React.useState(false);
  return { open, setOpen };
};
