import "./form.js"
import { version } from "../package.json"
import "./styles/base.css"
import "./styles/app.css"
import "./styles/form.css"

//Add version in meta name version
document.querySelectorAll("meta").forEach((element) => {
  if (element.name === "version") element.content = version
})
