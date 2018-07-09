// @flow

import * as React from "react";
import { storiesOf, setAddon } from "@storybook/react";
import styles from "@sambego/storybook-styles";
import chaptersAddon from "react-storybook-addon-chapters";
import { withKnobs, select } from "@storybook/addon-knobs/react";

import ServiceLogo from "./ServiceLogo";
import { NAME_OPTIONS, SIZE_OPTIONS } from "./consts";

setAddon(chaptersAddon);

storiesOf("ServiceLogo", module)
  .addDecorator(withKnobs)
  .addDecorator(
    styles({
      padding: "20px",
    }),
  )
  .addWithChapters("Playground", () => {
    const name = select("Type", Object.values(NAME_OPTIONS), NAME_OPTIONS.AIRHELP);
    const size = select("Size", Object.values(SIZE_OPTIONS), SIZE_OPTIONS.MEDIUM);

    return {
      info: "Some description about this type of component.",
      chapters: [
        {
          sections: [
            {
              sectionFn: () => <ServiceLogo name={name} size={size} />,
            },
          ],
        },
      ],
    };
  });
