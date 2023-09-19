import cors from "cors";
import express from "express";

import { download } from './download.js';
import { transcribe } from './transcribe.js';

const app = express();
app.use(cors());

app.get("/summary/:id", (request, response)=> {
  download(request.params.id);
  transcribe()

  response.json({result: "Download do vídeo realizado com sucesso!"})
})

app.listen(3333, ()=> console.log("Server is running on port 3333"));