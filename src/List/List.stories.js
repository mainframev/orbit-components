// @flow

import * as React from "react";
import { storiesOf, setAddon } from "@storybook/react";
import styles from "@sambego/storybook-styles";
import chaptersAddon from "react-storybook-addon-chapters";
import { withKnobs, text, select } from "@storybook/addon-knobs/react";

import * as Icons from "../icons";
import List from "./List";
import ListItem from "./ListItem/ListItem";
import { SIZES, TYPES } from "./consts";
import { iconColors } from "../Icon";
import CarrierLogo from "../CarrierLogo/CarrierLogo";

setAddon(chaptersAddon);

const getIcons = defaultIcon => select("Icon", [undefined, ...Object.keys(Icons)], defaultIcon);
const getIcon = source => Icons[source];

storiesOf("List", module)
  .addDecorator(withKnobs)
  .addDecorator(
    styles({
      padding: "20px",
    }),
  )
  .addWithChapters("Default", () => ({
    info: "List groups related information together and make content more scalable and organized.",
    chapters: [
      {
        sections: [
          {
            sectionFn: () => (
              <List>
                <ListItem>24,000 locations around the globe</ListItem>
                <ListItem>
                  Lowest price car rental in <strong>&nbsp;Warsaw</strong>
                </ListItem>
                <ListItem>From 3 star budget to 5 star luxury</ListItem>
              </List>
            ),
          },
        ],
      },
    ],
  }))
  .addWithChapters("Different type and size", () => {
    const size = select("Size", Object.values(SIZES), SIZES.SMALL);
    const type = select("Type", Object.values(TYPES), TYPES.SECONDARY);

    return {
      info:
        "List groups related information together and make content more scalable and organized.",
      chapters: [
        {
          sections: [
            {
              sectionFn: () => (
                <List size={size} type={type}>
                  <ListItem>24,000 locations around the globe</ListItem>
                  <ListItem>
                    Lowest price car rental in <strong>&nbsp;Warsaw</strong>
                  </ListItem>
                  <ListItem>From 3 star budget to 5 star luxury</ListItem>
                </List>
              ),
            },
          ],
        },
      ],
    };
  })
  .addWithChapters("With carrier", () => {
    const size = select("Size", Object.values(SIZES), SIZES.SMALL);
    const type = select("Type", Object.values(TYPES), TYPES.SECONDARY);

    return {
      info:
        "List groups related information together and make content more scalable and organized.",
      chapters: [
        {
          sections: [
            {
              sectionFn: () => (
                <List size={size} type={type}>
                  <ListItem icon={<CarrierLogo carriers={[{ code: "FR", name: "Ryanair" }]} />}>
                    Airline: Ryanair
                  </ListItem>
                  <ListItem icon={<Icons.InformationCircle />}>Flight no: FR 1337</ListItem>
                  <ListItem icon={<Icons.Trip />}>PNR: TEST0X0</ListItem>
                  <ListItem icon={<Icons.Airplane />}>Airbus A320 (320)</ListItem>
                </List>
              ),
            },
          ],
        },
      ],
    };
  })
  .addWithChapters("Playground", () => {
    const size = select("Size", Object.values(SIZES), SIZES.NORMAL);
    const type = select("Type", Object.values(TYPES), TYPES.PRIMARY);
    const Icon = getIcon(getIcons("Check"));
    const iconColor = select("iconColor", Object.keys(iconColors), "green");
    const content = text("Content", "24,000 locations around the globe");

    return {
      info:
        "You can try all possible configurations of this component. However, check Orbit.Kiwi for more detailed design guidelines.",
      chapters: [
        {
          sections: [
            {
              sectionFn: () => (
                <List size={size} type={type}>
                  <ListItem icon={Icon && <Icon color={iconColor} />}>{content}</ListItem>
                  <ListItem icon={Icon && <Icon color={iconColor} />}>{content}</ListItem>
                  <ListItem icon={Icon && <Icon color={iconColor} />}>{content}</ListItem>
                </List>
              ),
            },
          ],
        },
      ],
    };
  });
