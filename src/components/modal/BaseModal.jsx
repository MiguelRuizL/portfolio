import { Button, Modal, ModalBody, ModalFooter, ModalHeader } from "flowbite-react";
import { motion, AnimatePresence } from "framer-motion";
import { customModalTheme } from "../../themes/themes.js";

export default function BaseModal({ openModal = false, setOpenModal, children, title = "Detalles" }) {

  const modalVariants = {
    hidden: { opacity: 0, scale: 0.9, y: -20 },
    visible: { 
      opacity: 1, 
      scale: 1, 
      y: 0,
      transition: { type: "spring", damping: 25, stiffness: 300 } 
    },
    exit: { 
      opacity: 0, 
      scale: 0.9, 
      y: 20,
      transition: { duration: 0.2 } 
    }
  };

  return (
    <AnimatePresence>
      {openModal && (
        <Modal 
          dismissible 
          show={openModal} 
          size={"xl"}
          onClose={() => setOpenModal(false)}
          theme={customModalTheme}
        >
          <motion.div
            initial="hidden"
            animate="visible"
            exit="exit"
            variants={modalVariants}
            className="flex flex-col !h-auto w-full"
          >
            <ModalHeader>{title}</ModalHeader>
            <ModalBody>
              {children}
            </ModalBody>
            <ModalFooter className="flex justify-end">
              <Button color="gray" onClick={() => setOpenModal(false)}>
                Cerrar
              </Button>
            </ModalFooter>
          </motion.div>
        </Modal>
      )}
    </AnimatePresence>
  );
}