import { Notify } from 'notiflix/build/notiflix-notify-aio';

const useNotife = () => {
  const showFailure = textFailure => {
    Notify.failure(textFailure, { timeout: 1000 });
  };

  return { showFailure };
};

export default useNotife;
