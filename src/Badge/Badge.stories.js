// @flow

import * as React from "react";
import { storiesOf, setAddon } from "@storybook/react";
import styles from "@sambego/storybook-styles";
import chaptersAddon from "react-storybook-addon-chapters";
import { withKnobs, text, boolean, select } from "@storybook/addon-knobs/react";

import * as Icons from "../icons";
import Badge from "./Badge";
import TYPE_OPTIONS from "./consts";

setAddon(chaptersAddon);

const getIcons = defaultIcon => select("Icon", [undefined, ...Object.keys(Icons)], defaultIcon);
const getIcon = source => Icons[source];

storiesOf("Badge", module)
  .addDecorator(withKnobs)
  .addDecorator(
    styles({
      padding: "20px",
    }),
  )
  .addWithChapters("Default", () => {
    const content = text("Content", "Badge");
    const Icon = getIcon(getIcons("Airplane"));

    return {
      info: "Some description about this type of component. ",
      chapters: [
        {
          sections: [
            {
              sectionFn: () => <Badge icon={Icon && <Icon />}>{content}</Badge>,
            },
          ],
        },
      ],
    };
  })
  .addWithChapters("Types", () => {
    const content = text("Content", "Badge");

    return {
      info: "Some description about this type of component. ",
      chapters: [
        {
          sections: [
            {
              sectionFn: () => (
                <Badge type={TYPE_OPTIONS.NEUTRAL} icon={<Icons.Sightseeing />}>
                  {content}
                </Badge>
              ),
            },
            {
              sectionFn: () => (
                <Badge type={TYPE_OPTIONS.INFO} icon={<Icons.InformationCircle />}>
                  {content}
                </Badge>
              ),
            },
            {
              sectionFn: () => (
                <Badge type={TYPE_OPTIONS.SUCCESS} icon={<Icons.CheckCircle />}>
                  {content}
                </Badge>
              ),
            },
            {
              sectionFn: () => (
                <Badge type={TYPE_OPTIONS.WARNING} icon={<Icons.Clock />}>
                  {content}
                </Badge>
              ),
            },
            {
              sectionFn: () => (
                <Badge type={TYPE_OPTIONS.CRITICAL} icon={<Icons.Passport />}>
                  {content}
                </Badge>
              ),
            },
            {
              sectionFn: () => (
                <Badge type={TYPE_OPTIONS.DARK} icon={<Icons.Sightseeing />}>
                  {content}
                </Badge>
              ),
            },
          ],
        },
      ],
    };
  })
  .addWithChapters("Notification badge", () => {
    const content = text("Content", 3);
    const type = select("Type", Object.values(TYPE_OPTIONS), "neutral");

    return {
      info: "Some description about this type of component. ",
      chapters: [
        {
          sections: [
            {
              sectionFn: () => (
                <Badge type={type} circled>
                  {content}
                </Badge>
              ),
            },
          ],
        },
      ],
    };
  })
  .addWithChapters("Playground", () => {
    const content = text("Content", "Badge");
    const type = select("Type", Object.values(TYPE_OPTIONS), "info");
    const circled = boolean("Circled", false);
    const Icon = getIcon(getIcons("Airplane"));

    return {
      info: "Some description about this type of component. ",
      chapters: [
        {
          sections: [
            {
              sectionFn: () => (
                <Badge type={type} icon={Icon && <Icon />} circled={circled}>
                  {content}
                </Badge>
              ),
            },
          ],
        },
      ],
    };
  });
