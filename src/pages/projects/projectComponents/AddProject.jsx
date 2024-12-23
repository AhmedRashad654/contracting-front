import { useNavigate } from 'react-router-dom';

const AddProjectButton = () => {
  const navigate = useNavigate();

  return (
    <button
      className="px-4 py-2 text-white rounded-md mt-4 bg-primaryColor"
      onClick={() => {
        navigate('addproject'); 
      }}
    >
      + Add Project
    </button>
  );
};

export default AddProjectButton;
