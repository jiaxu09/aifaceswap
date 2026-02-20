import { Client, handle_file } from "@gradio/client";

async function checkClient() {
  console.log("Starting...");
  try {
    console.log("Connecting...");
    const client = await Client.connect("tonyassi/video-face-swap");
    console.log("Connected");
    
    const result = await client.predict("/generate", {
      input_image: handle_file("https://raw.githubusercontent.com/gradio-app/gradio/main/test/test_files/bus.png"),
      input_video: handle_file("https://github.com/gradio-app/gradio/raw/main/demo/video_component/files/world.mp4"),
      gender: "all",
    });
    console.log("Result:", JSON.stringify(result.data, null, 2));
  } catch(e: any) {
    console.error("CAUGHT ERROR");
    console.error("message:", e?.message);
    console.error("stage:", e?.stage);
    console.error("type:", e?.type);
    console.error("full:", JSON.stringify(e, null, 2));
  }
  console.log("Done");
}
checkClient().catch(e => { console.error("Uncaught:", e); });
