import * as stylex from '@stylexjs/stylex';
import type { ReactElement } from 'react';
import { ExpressiveFontLabelLarge } from '../../src';
import { expressiveSysColor, expressiveSysRadius } from '../../src/stylex/sys.stylex';
import { StorybookDisplay } from '../components/StorybookDisplay';

const styles = stylex.create({
  box: {
    alignItems: 'center',
    backgroundColor: `rgb(${expressiveSysColor.primaryContainer})`,
    display: 'flex',
    height: 140,
    justifyContent: 'center',
    paddingBottom: 16,
    paddingLeft: 16,
    paddingRight: 16,
    paddingTop: 16,
    textAlign: 'center',
    width: 140,
  },
  color: {
    color: `rgb(${expressiveSysColor.onPrimaryContainer})`,
  },
  topLeft: (radius: string | number) => ({
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0,
    borderTopLeftRadius: radius,
    borderTopRightRadius: 0,
  }),
  topRight: (radius: string | number) => ({
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0,
    borderTopLeftRadius: 0,
    borderTopRightRadius: radius,
  }),
  bottomLeft: (radius: string | number) => ({
    borderBottomLeftRadius: radius,
    borderBottomRightRadius: 0,
    borderTopLeftRadius: 0,
    borderTopRightRadius: 0,
  }),
  bottomRight: (radius: string | number) => ({
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: radius,
    borderTopLeftRadius: 0,
    borderTopRightRadius: 0,
  }),
  allCorners: (radius: string | number) => ({
    borderBottomLeftRadius: radius,
    borderBottomRightRadius: radius,
    borderTopLeftRadius: radius,
    borderTopRightRadius: radius,
  }),
});

interface RadiusBoxProps {
  readonly label: string;
  readonly radius: string | number;
  readonly corner: 'topLeft' | 'topRight' | 'bottomLeft' | 'bottomRight' | 'all';
}

function RadiusBox({ label, radius, corner }: RadiusBoxProps): ReactElement {
  return (
    <div
      {...stylex.props(
        styles.box,
        corner === 'topLeft' ? styles.topLeft(radius) : null,
        corner === 'topRight' ? styles.topRight(radius) : null,
        corner === 'bottomLeft' ? styles.bottomLeft(radius) : null,
        corner === 'bottomRight' ? styles.bottomRight(radius) : null,
        corner === 'all' ? styles.allCorners(radius) : null,
      )}
    >
      <ExpressiveFontLabelLarge
        xstyle={styles.color}
      >
        {label}
      </ExpressiveFontLabelLarge>
    </div>
  );
}

export function RadiusRoute(): ReactElement {
  return (
    <StorybookDisplay>
      <StorybookDisplay.Items
        label="None"
      >
        <RadiusBox
          label="Top Left"
          radius={expressiveSysRadius.none}
          corner="topLeft"
        />
        <RadiusBox
          label="Top Right"
          radius={expressiveSysRadius.none}
          corner="topRight"
        />
        <RadiusBox
          label="Bottom Left"
          radius={expressiveSysRadius.none}
          corner="bottomLeft"
        />
        <RadiusBox
          label="Bottom Right"
          radius={expressiveSysRadius.none}
          corner="bottomRight"
        />
        <RadiusBox
          label="All Corners"
          radius={expressiveSysRadius.none}
          corner="all"
        />
      </StorybookDisplay.Items>

      <StorybookDisplay.Items
        label="Extra Small"
      >
        <RadiusBox
          label="Top Left"
          radius={expressiveSysRadius.extraSmall}
          corner="topLeft"
        />
        <RadiusBox
          label="Top Right"
          radius={expressiveSysRadius.extraSmall}
          corner="topRight"
        />
        <RadiusBox
          label="Bottom Left"
          radius={expressiveSysRadius.extraSmall}
          corner="bottomLeft"
        />
        <RadiusBox
          label="Bottom Right"
          radius={expressiveSysRadius.extraSmall}
          corner="bottomRight"
        />
        <RadiusBox
          label="All Corners"
          radius={expressiveSysRadius.extraSmall}
          corner="all"
        />
      </StorybookDisplay.Items>

      <StorybookDisplay.Items
        label="Small"
      >
        <RadiusBox
          label="Top Left"
          radius={expressiveSysRadius.small}
          corner="topLeft"
        />
        <RadiusBox
          label="Top Right"
          radius={expressiveSysRadius.small}
          corner="topRight"
        />
        <RadiusBox
          label="Bottom Left"
          radius={expressiveSysRadius.small}
          corner="bottomLeft"
        />
        <RadiusBox
          label="Bottom Right"
          radius={expressiveSysRadius.small}
          corner="bottomRight"
        />
        <RadiusBox
          label="All Corners"
          radius={expressiveSysRadius.small}
          corner="all"
        />
      </StorybookDisplay.Items>

      <StorybookDisplay.Items
        label="Medium"
      >
        <RadiusBox
          label="Top Left"
          radius={expressiveSysRadius.medium}
          corner="topLeft"
        />
        <RadiusBox
          label="Top Right"
          radius={expressiveSysRadius.medium}
          corner="topRight"
        />
        <RadiusBox
          label="Bottom Left"
          radius={expressiveSysRadius.medium}
          corner="bottomLeft"
        />
        <RadiusBox
          label="Bottom Right"
          radius={expressiveSysRadius.medium}
          corner="bottomRight"
        />
        <RadiusBox
          label="All Corners"
          radius={expressiveSysRadius.medium}
          corner="all"
        />
      </StorybookDisplay.Items>

      <StorybookDisplay.Items
        label="Large"
      >
        <RadiusBox
          label="Top Left"
          radius={expressiveSysRadius.large}
          corner="topLeft"
        />
        <RadiusBox
          label="Top Right"
          radius={expressiveSysRadius.large}
          corner="topRight"
        />
        <RadiusBox
          label="Bottom Left"
          radius={expressiveSysRadius.large}
          corner="bottomLeft"
        />
        <RadiusBox
          label="Bottom Right"
          radius={expressiveSysRadius.large}
          corner="bottomRight"
        />
        <RadiusBox
          label="All Corners"
          radius={expressiveSysRadius.large}
          corner="all"
        />
      </StorybookDisplay.Items>

      <StorybookDisplay.Items
        label="Large Increased"
      >
        <RadiusBox
          label="Top Left"
          radius={expressiveSysRadius.largeIncreased}
          corner="topLeft"
        />
        <RadiusBox
          label="Top Right"
          radius={expressiveSysRadius.largeIncreased}
          corner="topRight"
        />
        <RadiusBox
          label="Bottom Left"
          radius={expressiveSysRadius.largeIncreased}
          corner="bottomLeft"
        />
        <RadiusBox
          label="Bottom Right"
          radius={expressiveSysRadius.largeIncreased}
          corner="bottomRight"
        />
        <RadiusBox
          label="All Corners"
          radius={expressiveSysRadius.largeIncreased}
          corner="all"
        />
      </StorybookDisplay.Items>

      <StorybookDisplay.Items
        label="Extra Large"
      >
        <RadiusBox
          label="Top Left"
          radius={expressiveSysRadius.extraLarge}
          corner="topLeft"
        />
        <RadiusBox
          label="Top Right"
          radius={expressiveSysRadius.extraLarge}
          corner="topRight"
        />
        <RadiusBox
          label="Bottom Left"
          radius={expressiveSysRadius.extraLarge}
          corner="bottomLeft"
        />
        <RadiusBox
          label="Bottom Right"
          radius={expressiveSysRadius.extraLarge}
          corner="bottomRight"
        />
        <RadiusBox
          label="All Corners"
          radius={expressiveSysRadius.extraLarge}
          corner="all"
        />
      </StorybookDisplay.Items>

      <StorybookDisplay.Items
        label="Extra Large Increased"
      >
        <RadiusBox
          label="Top Left"
          radius={expressiveSysRadius.extraLargeIncreased}
          corner="topLeft"
        />
        <RadiusBox
          label="Top Right"
          radius={expressiveSysRadius.extraLargeIncreased}
          corner="topRight"
        />
        <RadiusBox
          label="Bottom Left"
          radius={expressiveSysRadius.extraLargeIncreased}
          corner="bottomLeft"
        />
        <RadiusBox
          label="Bottom Right"
          radius={expressiveSysRadius.extraLargeIncreased}
          corner="bottomRight"
        />
        <RadiusBox
          label="All Corners"
          radius={expressiveSysRadius.extraLargeIncreased}
          corner="all"
        />
      </StorybookDisplay.Items>

      <StorybookDisplay.Items
        label="Extra Extra Large"
      >
        <RadiusBox
          label="Top Left"
          radius={expressiveSysRadius.extraExtraLarge}
          corner="topLeft"
        />
        <RadiusBox
          label="Top Right"
          radius={expressiveSysRadius.extraExtraLarge}
          corner="topRight"
        />
        <RadiusBox
          label="Bottom Left"
          radius={expressiveSysRadius.extraExtraLarge}
          corner="bottomLeft"
        />
        <RadiusBox
          label="Bottom Right"
          radius={expressiveSysRadius.extraExtraLarge}
          corner="bottomRight"
        />
        <RadiusBox
          label="All Corners"
          radius={expressiveSysRadius.extraExtraLarge}
          corner="all"
        />
      </StorybookDisplay.Items>

      <StorybookDisplay.Items
        label="Full"
      >
        <RadiusBox
          label="Top Left"
          radius={expressiveSysRadius.full}
          corner="topLeft"
        />
        <RadiusBox
          label="Top Right"
          radius={expressiveSysRadius.full}
          corner="topRight"
        />
        <RadiusBox
          label="Bottom Left"
          radius={expressiveSysRadius.full}
          corner="bottomLeft"
        />
        <RadiusBox
          label="Bottom Right"
          radius={expressiveSysRadius.full}
          corner="bottomRight"
        />
        <RadiusBox
          label="All Corners"
          radius={expressiveSysRadius.full}
          corner="all"
        />
      </StorybookDisplay.Items>
    </StorybookDisplay>
  );
}
