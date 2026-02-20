import { Client } from "@gradio/client";

async function checkClient() {
  const client = await Client.connect("tonyassi/video-face-swap");
  console.log(JSON.stringify(await client.view_api(), null, 2));
}
checkClient();
