import SignUpForm from "../../components/sign-up-from/sign-up-form.components";
import SignInForm from "../../components/sign-in-from/sign-in-form.components";
import "./authentication.styles.scss";

const Authentication = () => {
  return (
    <div className="authentication-container">
      <SignInForm />
      <SignUpForm />
    </div>
  );
};
export default Authentication;
