import { LitElement, TemplateResult, html } from "lit";
import { customElement } from "lit/decorators.js";

@customElement("home-component")
class Home extends LitElement {
  render(): TemplateResult {
    return html` <div>Hello from MyElement!</div> `;
  }
}

module.exports = Home;
