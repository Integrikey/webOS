import Modal from 'react-modal';
import { useRouter } from 'next/router';
import { ToastContainer, toast } from 'react-toastify';
import { TextField } from '@mui/material';

type ModalProps = {
  isModalOpen: boolean,
  setIsModalOpen: React.Dispatch<React.SetStateAction<boolean>>
}

const TryModal: FC<ModalProps> = ({
  isModalOpen,
  setIsModalOpen
}): React.JSX.Element => {
  const router = useRouter();

  const submitForm: React.FormEventHandler = (e: React.FormEvent) => {
    e.preventDefault();

    try {
      // API call goes here

      toast.success("Success! We'll email you a link to start your 30-day trial.", {
        onClose: () => router.reload(),
        position: "bottom-right",
        theme: "colored"
      });
    } catch {
      toast.error("Something went wrong. Please try again or contact us.", {
        position: "bottom-right",
        theme: "colored"
      });
    }
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
      <form
        className="mt-4 flex rounded-lg overflow-hidden flex-col md:flex-row"
      >
        <TextField
          id="outlined-basic"
          label="Email address"
          placeholder="elliot.alderson@acme.com"
          sx={{
            backgroundColor: 'white',
            flex: '1'
          }}
          type="email"
          variant="filled"
          required
        />
        <button
          className="bg-teal-700 text-white px-4 py-4 md:py-0"
          onClick={(e) => submitForm(e)}
          type="submit"
        >
          Request demo
        </button>
      </form>
      <ToastContainer />
    </Modal>
  );
};

export default TryModal;
