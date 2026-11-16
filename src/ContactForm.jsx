import { useForm, ValidationError } from "@formspree/react";

// Formspree form ID. It is public by design: it only lets people submit to your form.
const FORM_ID = "mwlolrwz";

export default function ContactForm() {
  const [state, handleSubmit] = useForm(FORM_ID);

  if (state.succeeded) {
    return (
      <div className="contact-form contact-form-done" role="status">
        <h3>Thanks, your message is sent!</h3>
        <p>I'll get back to you soon.</p>
      </div>
    );
  }

  return (
    <form className="contact-form" onSubmit={handleSubmit} noValidate>
      <label>
        <span>Your name</span>
        <input name="name" type="text" required autoComplete="name" />
        <ValidationError field="name" errors={state.errors} className="field-error" />
      </label>

      <label>
        <span>Your email</span>
        <input name="email" type="email" required autoComplete="email" />
        <ValidationError field="email" errors={state.errors} className="field-error" />
      </label>

      <label>
        <span>Message</span>
        <textarea name="message" rows="5" required />
        <ValidationError field="message" errors={state.errors} className="field-error" />
      </label>

      {/* Formspree spam trap: hidden from people, bots tend to fill it in. */}
      <input name="_gotcha" type="text" tabIndex={-1} autoComplete="off" className="hp-field" aria-hidden="true" />

      <button type="submit" className="btn btn-dark" disabled={state.submitting}>
        {state.submitting ? "Sending…" : "Send message"}
      </button>

      <ValidationError errors={state.errors} className="form-status form-status-error" role="alert" />
    </form>
  );
}
