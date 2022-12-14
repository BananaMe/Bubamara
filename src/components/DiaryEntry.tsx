import { AuthSession } from "@supabase/supabase-js";
import { FloatingLabel, Form } from "solid-bootstrap";
import { Component, createEffect, createSignal } from "solid-js";
import { supabase } from "../supabaseClient";
import { downloadImage } from "./download-image";
import PlantImage from "./PlantImage";

interface DiaryEntryProps {
  session: AuthSession;
  onDone: () => void;
  edit?: boolean;
  data?: any;
}

const DiaryEntry: Component<DiaryEntryProps> = (props) => {
  const { session, onDone, edit = false, data } = props;
  const [loading, setLoading] = createSignal(false);

  const [name, setName] = createSignal<string | undefined>(data?.name);
  const [tip, setTip] = createSignal<string | undefined>(data?.tip);
  const [dateBought, setDateBought] = createSignal<Date | null>(data ? new Date(data?.dateBought) : null);
  const [placement, setPlacement] = createSignal<string | undefined>(data?.placement);
  const [lastWater, setLastWater] = createSignal<Date | null>(data ? new Date(data?.lastWater) : null);
  const [lastFertilizer, setLasteFertilizer] = createSignal<Date | null>(data ? new Date(data?.lastFertilizer) : null);
  const [imageUrl, setImageUrl] = createSignal<string | undefined>(data?.imageUrl);

  const getMappedData = () => ({
    name: name(),
    tip: tip(),
    date_bought: dateBought(),
    placement: placement(),
    last_water: lastWater(),
    last_fertilizer: lastFertilizer(),
    image_url: imageUrl(),
  });

  const addDiary = async (e: Event) => {
    e.preventDefault();

    try {
      setLoading(true);
      const { user } = session;

      let { error } = await supabase.from("diaries").insert({ uuid: user.id, ...getMappedData() });

      if (error) {
        throw error;
      } else {
        onDone();
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

      console.log(getMappedData());
      let { error } = await supabase.from("diaries").update(getMappedData()).match({ id: data.id });

      if (error) {
        throw error;
      } else {
        onDone();
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
        onSubmit={edit ? updateDiary : addDiary}
        class="form-widget"
        style={{ "align-content": "flex-start", "text-align": "start" }}
      >
        <h2>?????????? ???????? ???????????????? ???? ???????????? ??????????????</h2>

        <FloatingLabel controlId="name" label="??????" class="my-2">
          <Form.Control type="text" value={name() || ""} onChange={(e) => setName(e.currentTarget.value)} placeholder="name" />
        </FloatingLabel>
        <FloatingLabel controlId="species" label="?????? ???? ????????????????" class="mb-2">
          <Form.Control type="text" value={tip() || ""} onChange={(e) => setTip(e.currentTarget.value)} placeholder="type" />
        </FloatingLabel>
        <FloatingLabel controlId="dateBought" label="?????????? ????????????" class="mb-2">
          <Form.Control onFocus={(e) => e.target.showPicker()} type="date" value={dateBought()?.toISOString().split('T')[0] || ""} onChange={(e) => setDateBought(new Date(e.currentTarget.value))} placeholder="date bought" />
        </FloatingLabel>
        <FloatingLabel controlId="placement" label="??????????????" class="mb-2">
          <Form.Control type="text" value={placement() || ""} onChange={(e) => setPlacement(e.currentTarget.value)} placeholder="placement" />
        </FloatingLabel>
        <FloatingLabel controlId="lastWater" label="???????????????? ????????????????" class="mb-2">
          <Form.Control onFocus={(e) => e.target.showPicker()} type="date" value={lastWater()?.toISOString().split('T')[0] || ""} onChange={(e) => setLastWater(new Date(e.currentTarget.value))} placeholder="last watered" />
        </FloatingLabel>
        <FloatingLabel controlId="lastFertilizer" label="???????????????? ????????????????" class="mb-2">
          <Form.Control onFocus={(e) => e.target.showPicker()} type="date" value={lastFertilizer()?.toISOString().split('T')[0] || ""} onChange={(e) => setLasteFertilizer(new Date(e.currentTarget.value))} placeholder="last fertilized" />
        </FloatingLabel>
        <PlantImage
          width={300}
          onUpload={(e: Event, url: string) => {
            setImageUrl(url);
          }}
          defaultImageUrl={imageUrl()}
        />
        <div>
          <button
            type="submit"
            class="btn btn-outline-light btn-lg my-2"
            style={{ "background-color": "#78b389" }}
            disabled={loading()}
          >
            {loading() ? "???? ??????????????..." : "??????????"}
          </button>
        </div>
      </form>
    </div>
  );
};

export default DiaryEntry;
