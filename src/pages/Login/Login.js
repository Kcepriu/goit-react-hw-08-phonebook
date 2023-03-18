import { useDispatch } from 'react-redux';
import { logIn } from 'reduxe/auth/operation';

const Login = () => {
  const dispatch = useDispatch();

  const handrerSubmit = event => {
    event.preventDefault();
    const form = event.currentTarget;

    dispatch(
      logIn({
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );

    form.reset();
  };

  return (
    <>
      Login
      <form name="logIn" onSubmit={handrerSubmit}>
        <label>
          email
          <input type="email" name="email" required />
        </label>

        <label>
          password
          <input
            type="password"
            name="password"
            required
            minLength="7"
            maxLength="12"
          />
        </label>
        <button type="submit">LogIn</button>
      </form>
    </>
  );
};

export default Login;
