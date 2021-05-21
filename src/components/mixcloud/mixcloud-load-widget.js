import load from "load-script"

export const loadWidget = (iframe, cb) => {
  return load(
    "//widget.mixcloud.com/media/js/footerWidgetApi.js",
    {
      async: true
    },
    () => {
      return cb(window.Mixcloud.PlayerWidget(iframe)) // eslint-disable-line new-cap
    }
  )
}

export default loadWidget
