const format = require("xml-formatter");

module.exports = (object, reference) => {
    const html = object.$refs[reference].innerHTML.toString();
    return format("<root>" + html + "</root>", {
        collapseContent: true,
    });
}