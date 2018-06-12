// @noflow
/* eslint-disable import/no-extraneous-dependencies */
const path = require("path");
const fs = require("fs");
const { JSDOM } = require("jsdom");
const capitalize = require("capitalize");
const camelcase = require("camelcase");
const mkdirp = require("mkdirp");
const glob = require("glob");
const svgr = require("@svgr/core").default;

const files = glob.sync("src/icons/**/*.svg");
const names = files.map(inputFileName => {
  const functionName = capitalize(
    camelcase(path.basename(inputFileName).replace(/( \(custom\))?\.svg$/, "")),
  );
  const outputComponentFileName = `${functionName}.js`;

  return {
    inputFileName,
    outputComponentFileName,
    functionName,
  };
});

const componentPath = path.join(__dirname, "..", "src", "icons");
mkdirp(componentPath);

function getViewBox(attributes) {
  for (let i = attributes.length - 1; i >= 0; i -= 1) {
    if (attributes[i].name === "viewBox") {
      return attributes[i].value;
    }
  }
  return "0 0 24 24";
}

const template = (code, config, state) => `
/* eslint-disable */
    import * as React from "react";
    import OrbitIcon from "../Icon";

    export default function ${state.componentName}(props) {
      const { color, size, customColor, className } = props;
      return (
        ${code.replace(
          /<svg\b[^>]* viewBox="(\b[^"]*)".*>([\s\S]*?)<\/svg>/g,
          `<OrbitIcon viewBox="$1" size={size} color={color} customColor={customColor} className={className}>$2</OrbitIcon>`,
        )}
      );
    };`;

names.forEach(async ({ inputFileName, outputComponentFileName, functionName }) => {
  const dom = await JSDOM.fromFile(inputFileName);
  const content = dom.window.document.querySelector("svg");
  svgr(
    content.outerHTML,
    { svgAttributes: { viewBox: getViewBox(content.attributes) }, template },
    { componentName: functionName },
  ).then(jsCode => {
    fs.writeFileSync(path.join(componentPath, outputComponentFileName), jsCode);
  });
});

const index = names
  .map(({ functionName }) => `export { default as ${functionName} } from "./${functionName}";\n`)
  .join("");
fs.writeFileSync(path.join(componentPath, "index.js"), index);
