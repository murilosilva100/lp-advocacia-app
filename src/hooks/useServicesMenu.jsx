import { useState } from "react";

export function useServicesMenu() {
  const [showServices, setShowServices] = useState(false);
  const [isClosing, setIsClosing] = useState(false);

  const handleToggleServices = () => {
    if (showServices) {
      handleCloseServices();
    } else {
      setShowServices(true);
    }
  };

  const handleCloseServices = () => {
    setIsClosing(true);
    setTimeout(() => {
      setShowServices(false);
      setIsClosing(false);
    }, 400);
  };

  return {
    showServices,
    isClosing,
    handleToggleServices,
    handleCloseServices,
  };
}
