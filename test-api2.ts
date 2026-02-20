import { Client, handle_file } from "@gradio/client";
import fs from "fs";

async function checkClient() {
  try {
    const client = await Client.connect("tonyassi/video-face-swap");
    console.log("Connected");
    
    // Create a dummy image and video blob
    const imageBlob = new Blob([Buffer.alloc(100)], { type: "image/jpeg" });
    const videoBlob = new Blob([Buffer.alloc(100)], { type: "video/mp4" });
    
    const result = await client.predict("/generate", {
      input_image: handle_file(imageBlob),
      input_video: handle_file(videoBlob),
      gender: "all",
    });
    console.log(JSON.stringify(result.data, null, 2));
  } catch(e) {
    console.error(e);
  }
}
checkClient();
