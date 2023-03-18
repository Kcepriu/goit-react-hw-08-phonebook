import { useDispatch } from 'react-redux';
import { register } from 'reduxe/auth/operation';
const Register = () => {
  const dispatch = useDispatch();

  const handlerSubmit = event => {
    event.preventDefault();
    const form = event.currentTarget;

    dispatch(
      register({
        name: form.elements.name.value,
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );

    form.reset();
  };

  return (
    <>
      Register
      <form name="register" onSubmit={handlerSubmit}>
        <label>
          User name
          <input type="text" name="name" required />
        </label>

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
        <button type="submit">Register</button>
      </form>
    </>
  );
};

export default Register;
