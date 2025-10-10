export const handleAcceptListing = ({
  setActiveModal,
}: {
  setActiveModal: (a: "accepted" | null) => void;
}) => {
  setActiveModal("accepted");
};
