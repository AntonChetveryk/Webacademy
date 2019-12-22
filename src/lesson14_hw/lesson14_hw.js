import "./lesson14_hw.scss";
import { createAccardion } from "../common/accardion";

const container = document.createElement("div");
container.classList.add("container");
document.body.append(container);

createAccardion(container);
