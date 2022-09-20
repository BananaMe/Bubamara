import { Component, createSignal } from "solid-js";
import { supabase } from "../supabaseClient";

const Auth: Component = () => {
  const [loading, setLoading] = createSignal(false);
  const [email, setEmail] = createSignal("");

  const handleLogin = async (e: SubmitEvent) => {
    e.preventDefault();

    try {
      setLoading(true);
      const { error } = await supabase.auth.signInWithOtp({
        email: email(),
        options: {
          emailRedirectTo: "https://bananame.github.io/Bubamara/",
        },
      });
      if (error) throw error;
      alert("Check your email for the login link!");
    } catch (error) {
      if (error instanceof Error) {
        alert(error.message);
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div class="row flex-center flex justify-content-md-center">
      <div class="col-6 form-widget" aria-live="polite">
        <h1 class="header">Бубамара</h1>
        <p class="description">
          Внеси мејл за да се регистрирате во бубамара системот
        </p>
        <form class="form-widget" onSubmit={handleLogin}>
          <div>
            <label for="email">Email:</label>
            <input
              id="email"
              class="inputField mb-2 ml-2"
              type="email"
              placeholder="Вашиот мејл"
              value={email()}
              onChange={(e) => setEmail(e.currentTarget.value)}
            />
          </div>
          <div>
            <button type="submit" class="btn btn-secondary" aria-live="polite">
              {loading() ? <span>Процесирање</span> : <span>Прати линк</span>}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Auth;
