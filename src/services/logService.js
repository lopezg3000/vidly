import * as Sentry from "@sentry/browser";

function init() {
    Sentry.init({ dsn: "https://c5f9241d904c4980be74dd094aeef898@o391005.ingest.sentry.io/5241275" });
}

function log(error) {
    Sentry.captureException("Logging the error", error)
}

export default {
    init,
    log
}