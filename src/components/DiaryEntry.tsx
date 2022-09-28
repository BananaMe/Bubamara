import { AuthSession } from "@supabase/supabase-js";
import { FloatingLabel, Form } from "solid-bootstrap";
import { Component, createSignal } from "solid-js";
import { supabase } from "../supabaseClient";
import PlantImage from "./PlantImage";

interface DiaryEntryProps {
  session: AuthSession;
  onSuccessfullySubmitted: () => void;
}

const DiaryEntry: Component<DiaryEntryProps> = (props) => {
  const { session, onSuccessfullySubmitted } = props;
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

      let { error } = await supabase.from("diaries").insert(inserts);

      if (error) {
        throw error;
      } else {
        onSuccessfullySubmitted();
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

        <FloatingLabel controlId="name" label="Име" class="my-2">
          <Form.Control type="text" value={name() || ""} onChange={(e) => setName(e.currentTarget.value)} placeholder="name" />
        </FloatingLabel>
        <FloatingLabel controlId="species" label="Вид на растение" class="mb-2">
          <Form.Control type="text" value={tip() || ""} onChange={(e) => setTip(e.currentTarget.value)} placeholder="type" />
        </FloatingLabel>
        <FloatingLabel controlId="dateBought" label="Датум земено" class="mb-2">
          <Form.Control onFocus={(e) => e.target.showPicker()} type="date" value={dateBought()?.toISOString().split('T')[0] || ""} onChange={(e) => setDateBought(new Date(e.currentTarget.value))} placeholder="date bought" />
        </FloatingLabel>
        <FloatingLabel controlId="placement" label="Положба" class="mb-2">
          <Form.Control type="text" value={placement() || ""} onChange={(e) => setPlacement(e.currentTarget.value)} placeholder="placement" />
        </FloatingLabel>
        <FloatingLabel controlId="lastWater" label="Последно полевање" class="mb-2">
          <Form.Control onFocus={(e) => e.target.showPicker()} type="date" value={lastWater()?.toISOString().split('T')[0] || ""} onChange={(e) => setLastWater(new Date(e.currentTarget.value))} placeholder="last watered" />
        </FloatingLabel>
        <FloatingLabel controlId="lastFertilizer" label="Последна прихрана" class="mb-2">
          <Form.Control onFocus={(e) => e.target.showPicker()} type="date" value={lastFertilizer()?.toISOString().split('T')[0] || ""} onChange={(e) => setLasteFertilizer(new Date(e.currentTarget.value))} placeholder="last fertilized" />
        </FloatingLabel>
        <PlantImage
          width={300}
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
            {loading() ? "Се внесува..." : "Внеси"}
          </button>
        </div>
      </form>
    </div>
  );
};

export default DiaryEntry;
