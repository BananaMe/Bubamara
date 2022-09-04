import { AuthSession } from "@supabase/supabase-js";
import { Component, createEffect, createSignal } from "solid-js";
import { supabase } from "../supabaseClient";

interface AccountProps {
  session: AuthSession;
  onSave: (page: string) => void;
}

const Account: Component<AccountProps> = (props) => {
  const { session, onSave } = props;
  const [loading, setLoading] = createSignal(true);
  const [username, setUsername] = createSignal<string | null>(null);
  const [avatarUrl, setAvatarUrl] = createSignal<string | null>(null);

  createEffect(() => {
    getProfile();
  });

  const getProfile = async () => {
    try {
      setLoading(true);
      const { user } = session;

      let { data, error, status } = await supabase
        .from("profiles")
        .select(`username, avatar_url`)
        .eq("id", user.id)
        .single();

      if (error && status !== 406) {
        throw error;
      }

      if (data) {
        setUsername(data.username);
        setAvatarUrl(data.avatar_url);
      }
    } catch (error) {
      if (error instanceof Error) {
        alert(error.message);
      }
    } finally {
      setLoading(false);
    }
  };

  const updateProfile = async (e: Event) => {
    e.preventDefault();

    try {
      setLoading(true);
      const { user } = session;

      const updates = {
        id: user.id,
        username: username(),
        avatar_url: avatarUrl(),
        updated_at: new Date().toISOString(),
      };

      let { error } = await supabase.from("profiles").upsert(updates);

      if (error) {
        throw error;
      }
    } catch (error) {
      if (error instanceof Error) {
        alert(error.message);
      }
    } finally {
      setLoading(false);
      onSave("home");
    }
  };

  return (
    <div aria-live="polite">
      <form onSubmit={updateProfile} class="form-widget justify-content-md-center">
      <h1 class="header">Бубамара</h1>
        <p class="description">Внеси мејл за да се најавите во бубамара системот</p>
        <div>Email: {session.user.email}</div>
        <div>
          <label for="username">Корисничко име: </label>
          <input
            id="username"
            type="text"
            value={username() || ""}
            onChange={(e) => setUsername(e.currentTarget.value)}
          />
        </div>
        <div>
          <button
            type="submit"
            class="btn btn-secondary my-2"
            disabled={loading()}
          >
            {loading() ? "Се зачувува ..." : "Зачувај профил"}
          </button>
        </div>
        <button
          type="button"
          class="btn btn-outline-secondary"
          onClick={() => supabase.auth.signOut()}
        >
          Одјавете се
        </button>
      </form>
    </div>
  );
};

export default Account;
