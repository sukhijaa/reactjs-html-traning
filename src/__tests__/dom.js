import {JSDOM} from 'jsdom';

const dom = new JSDOM("<!DOCTYPE html>\n" +
    "<html lang=\"en\">\n" +
    "<head>\n" +
    "    <meta charset=\"UTF-8\">\n" +
    "    <title>TESTS</title>\n" +
    "</head>\n" +
    "<body>\n" +
    "\n" +
    "</body>\n" +
    "</html>");

const props = Object.getOwnPropertyNames(dom.window)
    .filter(prop => {
        const unwantedProps = ["window", "document", "navigator", "localStorage", "sessionStorage"];
        return !unwantedProps.includes(prop) && typeof global[prop] === 'undefined';
    })
    .reduce((prevResult, prop) => {
        return {
            ...prevResult,
            [prop]: Object.getOwnPropertyDescriptor(dom.window, prop)
        }
    }, {});
Object.defineProperties(global, props);

global.window = dom.window;
global.document = dom.window.document;
global.navigator = { userAgent : "node.js" };
