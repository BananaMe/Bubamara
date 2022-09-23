import { AuthSession } from "@supabase/supabase-js";
import { Component, createEffect, createSignal } from "solid-js";
import { supabase } from "../supabaseClient";
import DiaryCard from "./DiaryCard";
import DiaryEntry from "./DiaryEntry";

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
        console.log(data);
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

  return (
    <>
      <DiaryEntry session={session} />
      {
        diaries().length
          ? diaries().map(({ id, name, tip, date_bought, placement, last_water, last_fertilizer, image_url }) => (
            <DiaryCard name={name} tip={tip} dateBought={date_bought} placement={placement} lastWater={last_water} lastFertilizer={last_fertilizer} imageUrl={image_url} />
          ))
          : "Внесете ваше растение!"
      }
    </>
  );
};

export default Diary;
