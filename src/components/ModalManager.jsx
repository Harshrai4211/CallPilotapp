import Modal from './Modal.jsx';
import SignInForm from './SignInForm.jsx';
import SignUpForm from './SignUpForm.jsx';
import DemoForm from './DemoForm.jsx';
import { useModal } from '../context/ModalContext.jsx';
import { MODALS } from '../lib/modals.js';

export default function ModalManager() {
  const { active, close } = useModal();

  return (
    <>
      <Modal
        open={active === MODALS.signIn}
        onClose={close}
        title="Welcome back"
        subtitle="Sign in to your CallPilot workspace."
        maxWidth="max-w-md"
      >
        <SignInForm />
      </Modal>

      <Modal
        open={active === MODALS.signUp}
        onClose={close}
        title="Create your account"
        subtitle="Start exploring CallPilot in minutes."
        maxWidth="max-w-lg"
      >
        <SignUpForm />
      </Modal>

      <Modal
        open={active === MODALS.demo}
        onClose={close}
        title="Request a demo"
        subtitle="Tell us about your team and we'll tailor a walkthrough."
        maxWidth="max-w-xl"
      >
        <DemoForm onSuccess={close} />
      </Modal>
    </>
  );
}
