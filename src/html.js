const format = require("xml-formatter");

module.exports = (object, reference) => {
    let html = object.$refs[reference].innerHTML.toString();
    // eslint-disable-next-line
    let regExp = new RegExp(/data-v-\d+=""/g)
    html = html.replace(regExp, '')
    // eslint-disable-next-line
    regExp = new RegExp(/<input.+?[^>]*/g)
    html = html.replace(regExp, '$& /')
    return format("<root>" + html + "</root>", {
        collapseContent: true,
        whiteSpaceAtEndOfSelfclosingTag: true
    });
}