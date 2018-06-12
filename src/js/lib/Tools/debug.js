export default function debug() {
    if (typeof console !== "undefined") {
        console.log.apply(console, arguments);
    }
}