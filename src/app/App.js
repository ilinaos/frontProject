import HeaderModel from "../widgets/header/model/index.js"
import FilterModel from "../widgets/filter/model/index.js"

const runApp = async () => {
    const runWidgets = async () => {
        new HeaderModel()
        new FilterModel()

        await Promise.all(Object.keys(import.meta.glob("../**/*.pcss", { "query": "?inline" })).map(path => import(`${path}`).then((module) => module?.default ?? module)))

    }
    switch (process.env.NODE_ENV) {
        case "development":
            console.debug("starting...")
            await import("../shared/api/browser.js")
                .then(async ({ worker }) => {
                    await worker.start().then(() => {
                        // eslint-disable-next-line no-console
                        console.log("App dev run")
                        // runWidgets()
                    })
                })


    }

    await runWidgets()
}


runApp()
    .catch((err) => {
        console.error(err)
    })