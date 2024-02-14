import Modal from 'react-modal';
import { TextField } from '@mui/material';

type ModalProps = {
  isModalOpen: boolean,
  setIsModalOpen: React.Dispatch<React.SetStateAction<boolean>>
}

const TryModal: FC<ModalProps> = ({
  isModalOpen,
  setIsModalOpen
}) => {
  return (
    <Modal
      isOpen={isModalOpen}
      onRequestClose={() => setIsModalOpen(!isModalOpen)}
      contentLabel="Try Keystrike Modal"
      style={{
        overlay: {
          backgroundColor: 'rgba(0, 60, 63, .96)'
        },
        content: {
          maxWidth: '600px',
          margin: 'auto',
          backgroundColor: '#A1E3E2',
          border: 'none',
          borderRadius: '.8rem',
          height: 'fit-content',
          padding: '2rem'
        }
      }}
    >
      <img
        src="/images/cta.jpg"
        alt="Image of a person with a laptop"
        className="mx-auto mb-4"
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
        className="mt-4 flex rounded-lg overflow-hidden"
      >
        <TextField
          id="outlined-basic"
          label="Email address"
          placeholder="elliot.alderson@acme.com"
          variant="filled"
          sx={{
            backgroundColor: 'white',
            flex: '1'
          }}
        />
        <button
          type="submit"
          className="bg-teal-700 text-white px-4"
        >
          Request demo
        </button>
      </form>
    </Modal>
  );
};

export default TryModal;
