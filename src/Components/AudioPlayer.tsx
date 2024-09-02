//import { supabase } from "../supabaseClient";

//import * as React from "react";

const AudioPlayer = () => {
  return (
    <figure style={{ margin: 0, marginTop: "12px" }}>
      <audio
        controls
        src="https://yfrkllvxnpmkrpiqtbhq.supabase.co/storage/v1/object/sign/exercise-audio/sit-audio.mp3?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJleGVyY2lzZS1hdWRpby9zaXQtYXVkaW8ubXAzIiwiaWF0IjoxNzI1Mjc3MzYzLCJleHAiOjE3NTY4MTMzNjN9.s3IYP8tnDdS35yqX_m9YW_ddsxDuez8DwCjMEfFr3Sk&t=2024-09-02T11%3A42%3A44.672Z"
      ></audio>
    </figure>
  );
};

export default AudioPlayer;
