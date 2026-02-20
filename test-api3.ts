import { Client, handle_file } from "@gradio/client";

async function checkClient() {
  try {
    const client = await Client.connect("tonyassi/video-face-swap");
    console.log("Connected successfully");
    
    // Use the example inputs from the API spec
    const result = await client.predict("/generate", {
      input_image: handle_file("https://raw.githubusercontent.com/gradio-app/gradio/main/test/test_files/bus.png"),
      input_video: handle_file("https://github.com/gradio-app/gradio/raw/main/demo/video_component/files/world.mp4"),
      gender: "all",
    });
    console.log("Result:", JSON.stringify(result.data, null, 2));
  } catch(e: any) {
    console.error("Error type:", e?.type);
    console.error("Error stage:", e?.stage);
    console.error("Error message:", e?.message);
    console.error("Full error:", e);
  }
}
checkClient();
