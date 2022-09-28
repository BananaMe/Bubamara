import { supabase } from "../supabaseClient";

export const downloadImage = async (path: string, setImageUrl: (url: string) => void) => {
  try {
    const { data, error } = await supabase.storage
      .from("images")
      .download(path);
    if (error) {
      throw error;
    }
    const url = URL.createObjectURL(data);
    setImageUrl(url);
  } catch (error) {
    if (error instanceof Error) {
      console.error("Error downloading image: ", error.message);
    }
  }
};
