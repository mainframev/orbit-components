// @flow

import * as React from "react";
import { storiesOf, setAddon } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import styles from "@sambego/storybook-styles";
import chaptersAddon from "react-storybook-addon-chapters";
import { withKnobs, text, boolean, select, number } from "@storybook/addon-knobs/react";

import Textarea from "./Textarea";
import SIZE_OPTIONS from "./consts";

setAddon(chaptersAddon);

storiesOf("Textarea", module)
  .addDecorator(withKnobs)
  .addDecorator(
    styles({
      padding: "20px",
    }),
  )
  .addWithChapters("Default", () => {
    const value = text("Value", "");
    const placeholder = text("Placeholder", "Placeholder");

    return {
      info: "Some description about this type of textarea in general.",
      chapters: [
        {
          sections: [
            {
              sectionFn: () => (
                <Textarea placeholder={placeholder} onChange={action("change")}>
                  {value}
                </Textarea>
              ),
            },
          ],
        },
      ],
    };
  })
  .addWithChapters("Small size", () => {
    const value = text("Value", "");
    const placeholder = text("Placeholder", "Placeholder");

    return {
      info: "Some description about this type of textarea in general.",
      chapters: [
        {
          sections: [
            {
              sectionFn: () => (
                <Textarea size="small" placeholder={placeholder} onChange={action("change")}>
                  {value}
                </Textarea>
              ),
            },
          ],
        },
      ],
    };
  })
  .addWithChapters("With label", () => {
    const label = text("Label", "Label");
    const value = text("Value", "");
    const placeholder = text("Placeholder", "Placeholder");

    return {
      info: "Some description about this type of textarea in general.",
      chapters: [
        {
          sections: [
            {
              sectionFn: () => (
                <Textarea label={label} placeholder={placeholder} onChange={action("change")}>
                  {value}
                </Textarea>
              ),
            },
          ],
        },
      ],
    };
  })
  .addWithChapters("With help", () => {
    const value = text("Value", "Something");
    const placeholder = text("Placeholder", "Placeholder");
    const help = text("Help", "Everything is fine.");

    return {
      info: "Some description about this type of textarea in general.",
      chapters: [
        {
          sections: [
            {
              sectionFn: () => (
                <Textarea placeholder={placeholder} help={help} onChange={action("change")}>
                  {value}
                </Textarea>
              ),
            },
          ],
        },
      ],
    };
  })
  .addWithChapters("With error", () => {
    const value = text("Value", "Something");
    const placeholder = text("Placeholder", "Placeholder");
    const error = text("Error", "Something went wrong.");

    return {
      info: "Some description about this type of textarea in general.",
      chapters: [
        {
          sections: [
            {
              sectionFn: () => (
                <Textarea placeholder={placeholder} error={error} onChange={action("change")}>
                  {value}
                </Textarea>
              ),
            },
          ],
        },
      ],
    };
  })
  .addWithChapters("Playground", () => {
    const size = select("Size", Object.values(SIZE_OPTIONS), SIZE_OPTIONS.SMALL);
    const label = text("Label", "Label");
    const value = text("Value", "");
    const placeholder = text("Placeholder", "Placeholder");
    const help = text("Help", undefined);
    const error = text("Error", "Something went wrong.");
    const disabled = boolean("Disabled", true);
    const maxLength = number("maxLength", undefined);

    return {
      info: "Some description about this type of textarea in general.",
      chapters: [
        {
          sections: [
            {
              sectionFn: () => (
                <Textarea
                  size={size}
                  label={label}
                  placeholder={placeholder}
                  help={help}
                  error={error}
                  disabled={disabled}
                  maxLength={maxLength}
                  onChange={action("change")}
                  onFocus={action("focus")}
                  onBlur={action("blur")}
                >
                  {value}
                </Textarea>
              ),
            },
          ],
        },
      ],
    };
  });
