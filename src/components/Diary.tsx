import { AuthSession } from "@supabase/supabase-js";
import styles from "..//App.module.css";
import { Component, createEffect, createSignal, Match, Show } from "solid-js";
import { supabase } from "../supabaseClient";
import DiaryCard from "./DiaryCard";
import DiaryEntry from "./DiaryEntry";
import { Container } from "postcss";
import { Row } from "solid-bootstrap";

interface Props {
  session: AuthSession;
}

const Diary: Component<Props> = ({ session }) => {
  const [loading, setLoading] = createSignal(true);
  const [diaries, setDiaries] = createSignal([]);

  const [name, setName] = createSignal<string | null>(null);
  const [id, setId] = createSignal<number>();
  const [tip, setTip] = createSignal<string | null>(null);
  const [dateBought, setDateBought] = createSignal<Date>();
  const [placement, setPlacement] = createSignal<string | null>(null);
  const [lastWater, setLastWater] = createSignal<Date | null>(null);
  const [lastFertilizer, setLasteFertilizer] = createSignal<Date | null>(null);
  const [imageUrl, setImageUrl] = createSignal<string | null>(null);



  const fetchDiary = async () => {

    try {
      setLoading(true);
      const { user } = session;

      const inserts = {
        uuid: user.id,
        id: id(),
        name: name(),
        tip: tip(),
        date_bought: dateBought(),
        placement: placement(),
        last_water: lastWater(),
        last_fertilizer: lastFertilizer(),
        image_url: imageUrl(),
      };

      // console.log(inserts);
      let { data, error } = await supabase.from("diaries").select("*");

      if (data) {
        setDiaries(data);
      }
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

  createEffect(async () => {
    await fetchDiary();
  }, []);

  const [showInput, setShowInput] = createSignal<boolean>(false);


  return (
    <div>
      <button
        type="button"
        class="btn btn-outline-light btn-lg my-2 mb-5"
        style={{ "background-color": "#9AC7A8"}}
        onClick={() => setShowInput(!showInput())}
      >
        {showInput()? "Прикажи растенија" : "Внеси ново растение"}
      </button>

    <div class="d-flex justify-content-center">
      <Row xs={1} md={4} class="g-2">
      <Show when={showInput()}
        fallback={
          diaries().length
            ? diaries().map(({ id, name, tip, date_bought, placement, last_water, last_fertilizer, image_url }) => (
              <DiaryCard name={name} tip={tip} dateBought={date_bought} placement={placement} lastWater={last_water} lastFertilizer={last_fertilizer} imageUrl={image_url} />
            ))
            : "Внесете ваше растение!"
        }
      >
        
        <DiaryEntry session={session} />
      </Show>
      </Row>
      </div>
    </div>
  );
};

export default Diary;
