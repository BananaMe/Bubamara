import { createForm } from "@felte/solid";
import { AuthSession } from "@supabase/supabase-js";
import { Component, createEffect, createSignal } from "solid-js";
import { supabase } from "../supabaseClient";
import PlantImage from "./PlantImage";

interface Props {
  session: AuthSession;
}

const DiaryEntry: Component<Props> = ({ session }) => {
  const [loading, setLoading] = createSignal(false);

  const [name, setName] = createSignal<string | null>(null);
  const [tip, setTip] = createSignal<string | null>(null);
  const [dateBought, setDateBought] = createSignal<Date>();
  const [placement, setPlacement] = createSignal<string | null>(null);
  const [lastWater, setLastWater] = createSignal<Date | null>(null);
  const [lastFertilizer, setLasteFertilizer] = createSignal<Date | null>(null);
  const [imageUrl, setImageUrl] = createSignal<string | null>(null);

  const updateDiary = async (e: Event) => {
    e.preventDefault();

    try {
      setLoading(true);
      const { user } = session;

      const inserts = {
        uuid: user.id,
        name: name(),
        tip: tip(),
        date_bought: dateBought(),
        placement: placement(),
        last_water: lastWater(),
        last_fertilizer: lastFertilizer(),
        image_url: imageUrl(),
      };

      console.log(inserts);
      let { error } = await supabase.from("diaries").insert(inserts);

      if (error) {
        throw error;
      }
    } catch (error) {
      if (error instanceof Error) {
        alert(error.message);
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div aria-live="polite">
      <form
        onSubmit={updateDiary}
        class="form-widget"
        style={{ "align-content": "flex-start", "text-align": "start" }}
      >
        <h2>Внеси ново растение во вашиот дневник</h2>
        <div style={{ "align-content": "flex-start" }}>
          <label for="name">Име: </label>
          <input
            id="name"
            type="text"
            class="my-2"
            value={name() || ""}
            onChange={(e) => setName(e.currentTarget.value)}
          />
        </div>
        <div>
          <label for="tip">Вид на Растение: </label>
          <input
            id="tip"
            type="text"
            class="mb-2"
            value={tip() || ""}
            onChange={(e) => setTip(e.currentTarget.value)}
          />
        </div>
        <div>
          <label for="dateBought">Датум земено: </label>
          <input
            id="dateBought"
            type="date"
            class="mb-2"
            value={dateBought()?.toISOString().split('T')[0] || ""}
            onChange={(e) => setDateBought(new Date(e.currentTarget.value))}
          />
        </div>
        <div>
          <label for="placement">Положба: </label>
          <input
            id="placement"
            type="text"
            class="mb-2"
            value={placement() || ""}
            onChange={(e) => setPlacement(e.currentTarget.value)}
          />
        </div>
        <div>
          <label for="lastWater">Последно полевање: </label>
          <input
            id="lastWater"
            type="date"
            class="mb-2"
            value={lastWater()?.toISOString().split('T')[0] || ""}
            onChange={(e) => setLastWater(new Date(e.currentTarget.value))}
          />
        </div>
        <div>
          <label for="lastFertilizer">Последна прихрана: </label>
          <input
            id="lastFertilizer"
            type="date"
            class="mb-2"
            value={lastFertilizer()?.toISOString().split('T')[0] || ""}
            onChange={(e) =>
              setLasteFertilizer(new Date(e.currentTarget.value))
            }
          />
        </div>
        <PlantImage
          size={100}
          onUpload={(e: Event, url: string) => {
            setImageUrl(url);
          }}
        />
        <div>
          <button
            type="submit"
            class="btn btn-outline-light btn-lg my-2"
            style={{ "background-color": "#78b389" }}
            disabled={loading()}
          >
            {loading() ? "Внеси" : "Внеси"}
          </button>
        </div>
        {/* <button
          type="button"
          class="btn "
          style={{"background-color": "#bbd9c4"}}
          onClick={() => supabase.auth.signOut()}
        >
          Sign Out
        </button> */}
      </form>
    </div>
  );
};

export default DiaryEntry;
