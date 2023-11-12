const nested = require("postcss-nested")
const postcssPresetEnv = require("postcss-preset-env")
const customMedia = require("postcss-custom-media")
module.exports = {
    'plugins' : [
        nested(),
        postcssPresetEnv(),
        customMedia({}),
    ]
}