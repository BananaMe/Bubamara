import { AuthSession } from "@supabase/supabase-js";
import { Row } from "solid-bootstrap";
import { Component, createEffect, createSignal, Show } from "solid-js";
import { supabase } from "../supabaseClient";
import DiaryCard from "./DiaryCard";
import DiaryEntry from "./DiaryEntry";

interface Props {
  session: AuthSession;
}

const Diary: Component<Props> = ({ session }) => {
  const [loading, setLoading] = createSignal(true);
  const [diaries, setDiaries] = createSignal([]);
  const fetchDiary = async () => {

    try {
      setLoading(true);

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
        class="btn btn-outline-light btn-lg my-4"
        style={{ "background-color": "#9AC7A8" }}
        onClick={() => setShowInput(!showInput())}
      >
        {showInput() ? "Прикажи растенија" : "Внеси ново растение"}
      </button>

      <div class="d-flex justify-content-center">
        <Show when={showInput()}
          fallback={
            <Row xs={1} md={4} class="g-2" style={{
              margin: 0
            }}>
              {
                diaries().length
                  ? diaries().map(({ id, name, tip, date_bought, placement, last_water, last_fertilizer, image_url }) => (
                    <DiaryCard onDelete={fetchDiary} id={id} name={name} tip={tip} dateBought={date_bought} placement={placement} lastWater={last_water} lastFertilizer={last_fertilizer} imageUrl={image_url} />
                  ))
                  : "Внесете ваше растение!"
              }
            </Row>
          }
        >
          <DiaryEntry onSuccessfullySubmitted={() => {
            fetchDiary();
            setShowInput(false);
          }} session={session} />
        </Show>
      </div>
    </div >
  );
};

export default Diary;
