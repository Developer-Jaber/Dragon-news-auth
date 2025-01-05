import { AiOutlineLoading3Quarters } from 'react-icons/ai';
// import 'tailwindcss/tailwind.css';
// import 'daisyui/dist/full.css';

const LoadingPage = () => {
  return (
    <div className="flex justify-center items-center bg-gradient-to-r from-blue-500 to-purple-500 h-screen">
      <div className="text-center">
        <AiOutlineLoading3Quarters className="mx-auto mb-4 text-6xl text-white animate-spin" />
        <h1 className="mb-2 font-bold text-4xl text-white">Loading...</h1>
        <p className="text-lg text-white">Please wait while we prepare everything for you.</p>
      </div>
    </div>
  );
};

export default LoadingPage;
