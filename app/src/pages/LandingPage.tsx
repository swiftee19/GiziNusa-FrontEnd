import { useNavigate } from "react-router-dom";
import LandingPageAlertModal from "../components/landingPage/LandingPageAlertModal";
import { useState } from "react";

export default function LandingPage() {
  const [isModalOpen, setisModalOpen] = useState<boolean>(true);
  const navigate = useNavigate();

  const closeModal = () => {
    setisModalOpen(() => false);
    goToMealPlans();
  }

  const goToMealPlans = () => {
    navigate("/mealplans");
  };

  return (
    <>
      <LandingPageAlertModal isModalOpen={isModalOpen} closeModal={closeModal} />
    </>
  );
}
