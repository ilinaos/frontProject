import "./style.pcss"
import { worker } from "../shared/api/browser.js";

const runApp = async () => {
    switch (process.env.NODE_ENV) {
        case "development":
            await import("../shared/api/browser.js")
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