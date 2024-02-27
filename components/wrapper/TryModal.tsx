import type React from 'react';
import Modal from 'react-modal';
import { useRouter } from 'next/router';
import { ToastContainer, toast } from 'react-toastify';
import HubspotForm from 'react-hubspot-form';
import styles from 'components/wrapper/Form.module.css';

type ModalProps = {
  isModalOpen: boolean,
  setIsModalOpen: React.Dispatch<React.SetStateAction<boolean>>
}

const TryModal: FC<ModalProps> = ({
  isModalOpen,
  setIsModalOpen
}): React.JSX.Element => {
  const router = useRouter();

  const submitForm = (): void => {
    toast.success("Success! We'll email you a link to start your 30-day trial.", {
      onClose: () => router.reload(),
      position: "bottom-right",
      theme: "colored"
    });
  }

  return (
    <Modal
      contentLabel="Try Keystrike Modal"
      isOpen={isModalOpen}
      onRequestClose={() => setIsModalOpen(!isModalOpen)}
      style={{
        content: {
          backgroundColor: '#A1E3E2',
          border: 'none',
          borderRadius: '.8rem',
          height: 'fit-content',
          margin: 'auto',
          maxWidth: '600px',
          padding: '2rem'
        },
        overlay: {
          backgroundColor: 'rgba(0, 60, 63, .96)'
        }
      }}
    >
      <img
        alt="A person with a laptop"
        className="mx-auto mb-4"
        src="/images/cta.jpg"
      />
      <h3
        className="text-center text-gray-800 font-semibold text-xl md:text-3xl"
      >
        Try Keystrike for free
      </h3>
      <p className="text-gray-600 text-center max-w-md mx-auto mt-2">
        Leave your email and we’ll send you a magic link to try Keystrike for free.
      </p>
      <div className={`mt-4 ${styles.FormContainer}`}>
        <HubspotForm
          formId='358963d6-fa08-4857-8929-a79763b276ed'
          loading={<div>Loading...</div>}
          onSubmit={() => submitForm()}
          portalId='23432949'
        />
      </div>
      <ToastContainer />
    </Modal>
  );
};

export default TryModal;
