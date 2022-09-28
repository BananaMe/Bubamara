import { Component, createSignal, JSX } from "solid-js";
import { supabase } from "../supabaseClient";
import { downloadImage } from "./download-image";

interface Props {
  width: number;
  onUpload: (event: Event, filePath: string) => void;
}

const PlantImage: Component<Props> = (props) => {
  const [imageUrl, setImageUrl] = createSignal<string | null>(null);
  const [uploading, setUploading] = createSignal(false);

  const uploadImage: JSX.EventHandler<HTMLInputElement, Event> = async (
    event
  ) => {
    try {
      setUploading(true);

      const target = event.currentTarget;
      if (!target?.files || target.files.length === 0) {
        throw new Error("You must select an image to upload.");
      }

      const file = target.files[0];
      setImageUrl(URL.createObjectURL(file));
      const fileExt = file.name.split(".").pop();
      const fileName = `${Math.random()}.${fileExt}`;

      let { error: uploadError } = await supabase.storage
        .from("images")
        .upload(fileName, file);

      if (uploadError) {
        throw uploadError;
      }

      props.onUpload(event, fileName);
    } catch (error) {
      if (error instanceof Error) {
        alert(error.message);
      }
    } finally {
      setUploading(false);
    }
  };

  return (
    <div
      style={{ width: props.width, "align-content": "flex-end" }}
      aria-live="polite"
    >
      {imageUrl() ? (
        <img
          src={imageUrl()!}
          alt="Слика"
          class="plant image"
          style={{ width: `${props.width}px` }}
        />
      ) : (
        <div
          class="plant no-image"
          style={{ width: `${props.width}px` }}
        />
      )}
      <div style={{ width: `${props.width}px` }}>
        <label class="btn btn-outline-secondary btn-lg my-2" for="single">
          {uploading() ? "Прикачување ..." : "Прикачи слика"}
        </label>
        <span style="display:none">
          <input
            type="file"
            id="single"
            accept="image/*"
            onChange={uploadImage}
            disabled={uploading()}
          />
        </span>
      </div>
    </div>
  );
};

export default PlantImage;
