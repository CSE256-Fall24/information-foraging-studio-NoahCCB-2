"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.itemsToCache = void 0;
// An HTMLContent object should look like the following:
// {
//     name: 'footer',
//     content: require('./html/footer.html'),
// }
// Then you can reference that content in your html using the following tag with the corresponding name attribute.
// <ts-load data-name="header"></ts-load>
// You can specify as many as you want inside of the array and they will all be bundled up with your website.
// Make sure to make a corresponding html file in the html file folder for each element you specify.
exports.itemsToCache = [
    // Feel free to change the content inside any of the html files in the html file folder to suit your needs.
    {
        name: 'header',
        content: require('./html/header.html'),
    },
    {
        name: 'footer',
        content: require('./html/footer.html'),
    },
    // Put more items in the array below here.
];
//# sourceMappingURL=html-imports.js.map