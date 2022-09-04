import { AuthSession } from "@supabase/supabase-js";
import { Component, createEffect, createSignal } from "solid-js";
import PlantImage from "./PlantImage";
import { supabase } from "../supabaseClient";

interface Props {
  session: AuthSession;
}

const DiaryEntry: Component<Props> = ({ session }) => {
  const [loading, setLoading] = createSignal(true);
  const [name, setName] = createSignal<string | null>(null);
  const [tip, setTip] = createSignal<string | null>(null);
  const [dateBought, setDateBought] = createSignal<Date | null>(null);
  const [placement, setPlacement] = createSignal<string | null>(null);
  const [lastWater, setLastWater] = createSignal<Date | null>(null);
  const [lastFertilizer, setLasteFertilizer] = createSignal<Date | null>(
    null
  );
  const [imageUrl, setImageUrl] = createSignal<string | null>(null);

  createEffect(() => {
    getDiary();
  });

  const getDiary = async () => {
    try {
      setLoading(true);
      const { user } = session;

      let { data, error, status } = await supabase
        .from("diaries")
        .select(
          `name, tip, date_bought, placement, last_water, last_fertilizer, image_url`
        )
        .eq("id", user.id)
        .single();

      if (error && status !== 406) {
        throw error;
      }

      if (data) {
        // setUsername(data.username);
        setName(data.name);
        setTip(data.tip);
        setDateBought(data.date_bought);
        setPlacement(data.placement);
        setLastWater(data.last_water);
        setLasteFertilizer(data.last_fertilizer);
        setImageUrl(data.image_url);
      }
    } catch (error) {
      if (error instanceof Error) {
        alert(error.message);
      }
    } finally {
      setLoading(false);
    }
  };

  const updateDiary = async (e: Event) => {
    e.preventDefault();

    try {
      setLoading(true);
      const { user } = session;

      const updates = {
        id: user.id,
        name: name(),
        tip: tip(),
        dateBought: dateBought(),
        placement: placement(),
        lastWater: lastWater(),
        lastFertilizer: lastFertilizer(),
        imageUrl: imageUrl(),
        updated_at: new Date().toISOString(),
      };

      let { error } = await supabase.from("diaries").upsert(updates);

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
      <form onSubmit={updateDiary} class="form-widget"
      style={{"align-content": "flex-start", "text-align": "start"}}
      >
        <h2>Внеси ново растение во вашиот дневник</h2>
        <div style = {{ "align-content":"flex-start"}}>
          <label for="name">Име: </label>
          <input
            id="name"
            type="text"
            class="my-2"
            value={name() || ""}
            onChange={(e) => {
              console.log(e.currentTarget.value);
              setName(e.currentTarget.value);
            }}
          />
        </div>
        <div>
          <label for="tip">Вид на Растение: </label>
          <input
            id="tip"
            type="text"
            class="mb-2"
            value={tip() || ""}
            onChange={(e) => {
              console.log(e.currentTarget.value);
              setTip(e.currentTarget.value);
            }}
          />
        </div>
        <div>
          <label for="dateBought">Датум земено: </label>
          <input
            id="dateBought"
            type="date"
            class="mb-2"
            value={dateBought()?.toISOString().substring(0, 10) || ""}
            onChange={(e) => {
              console.log(e.currentTarget.value);
              setDateBought(new Date(e.currentTarget.value));
            }}
          />
        </div>
        <div>
          <label for="placement">Положба: </label>
          <input
            id="placement"
            type="text"
            class="mb-2"
            value={placement() || ""}
            onChange={(e) => {
              console.log(e.currentTarget.value);
              setPlacement(e.currentTarget.value);
            }}
          />
        </div>
        <div>
          <label for="lastWater">Последно полевање: </label>
          <input
            id="lastWater"
            type="date"
            class="mb-2"
            value={lastWater()?.toISOString().substring(0, 10) || ""}
            onChange={(e) => {
              console.log(e.currentTarget.value);
              setLastWater(new Date(e.currentTarget.value));
            }}
          />
        </div>
        <div>
          <label for="lastFertilizer">Последна прихрана: </label>
          <input
            id="lastFertilizer"
            type="date"
            class="mb-2"
            value={lastFertilizer()?.toISOString().substring(0, 10) || ""}
            onChange={(e) => {
              console.log(e.currentTarget.value);
              setLasteFertilizer(new Date(e.currentTarget.value));
            }}
          />
        </div>
        <PlantImage
          url={imageUrl()}
          size={100}
          onUpload={(e: Event, url: string) => {
            console.log(e.currentTarget);
            setImageUrl(url);
            updateDiary(e);
          }}
        />
        <div>
          <button
            type="submit"
            class="btn btn-outline-light btn-lg my-2"
            style={{"background-color": "#78b389"}}
            disabled={loading()}
          >
            {loading() ? "Се зачуваува ..." : "Ажурирај"}
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
