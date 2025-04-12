import { useState } from "react";
import StoryModal from "@/components/StoryModal";


const FloatingCherry = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const handleOpenModal = (e: React.MouseEvent) => {
        e.preventDefault(); 
        setIsModalOpen(true);
      };
  return (
    <>
    <div className="fixed bottom-6 right-6 h-16 w-16 md:w-24  cursor-pointer md:h-24 flex items-center justify-center rounded-full bg-[#F8E9E1] shadow-lg z-[9999]"
     onClick={handleOpenModal}
    >
      <div className="relative w-full h-full flex items-center justify-center">
       
        <span className="text-3xl sm:text-5xl absolute animate-bounce ">🍒</span>
      </div>
    </div>
      <StoryModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  );
};

export default FloatingCherry;
