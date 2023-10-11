import './style.pcss'
import javascriptLogo from './javascript.svg'
import viteLogo from '/vite.svg'
import { setupCounter } from './counter.js'
import {worker} from "./src/mocks/browser.js";



document.querySelector('#app').innerHTML = `
  <div>
    <a href="https://vitejs.dev" target="_blank">
      <img src="${viteLogo}" class="logo" alt="Vite logo" />
    </a>
    <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank">
      <img src="${javascriptLogo}" class="logo vanilla" alt="JavaScript logo" />
    </a>
    <h1>Hello Vite!</h1>
    <div class="card">
      <button id="counter" type="button"></button>
    </div>
    <p class="read-the-docs">
      Click on the Vite logo to learn more
    </p>
  </div>
`

setupCounter(document.querySelector('#counter'))

// if (process.env.NODE_ENV === 'development') {
//     const { worker } = require('./mocks/browser')
//     worker.start()
// }
const runApp = async () => {
    switch (process.env.NODE_ENV) {
        case "development":
            await import("./src/mocks/browser.js")
                .then(async ({ worker }) => {
                    await worker.start().then(() => {
                        console.debug("App dev run")
                    })
                })

    }
}

runApp()
    .catch((err) => {
        console.error(err)
    })