import * as stylex from '@stylexjs/stylex';
import type { ReactElement } from 'react';
import { ExpressiveFontLabelLarge, ExpressiveOutlineLayer } from '../../src';
import { expressiveSysColor, expressiveSysRadius } from '../../src/stylex/sys.stylex';
import { PrototypeDisplay } from '../components/PrototypeDisplay';

const styles = stylex.create({
  box: {
    alignItems: 'center',
    borderBottomLeftRadius: expressiveSysRadius.large,
    borderBottomRightRadius: expressiveSysRadius.large,
    borderTopLeftRadius: expressiveSysRadius.large,
    borderTopRightRadius: expressiveSysRadius.large,
    display: 'flex',
    height: 140,
    justifyContent: 'center',
    paddingBottom: 16,
    paddingLeft: 16,
    paddingRight: 16,
    paddingTop: 16,
    position: 'relative',
    textAlign: 'center',
    width: 140,
  },
  color: (color: string) => ({
    color: `rgb(${color})`,
  }),
});

interface ColorBoxProps {
  readonly name: string;
  readonly color: string;
  readonly text: string;
}

function ColorBox({ name, color, text }: ColorBoxProps): ReactElement {
  return (
    <div
      {...stylex.props(styles.box)}
      style={{ backgroundColor: `rgb(${color})` }}
    >
      <ExpressiveFontLabelLarge
        xstyle={styles.color(text)}
      >
        {name}
      </ExpressiveFontLabelLarge>
      <ExpressiveOutlineLayer />
    </div>
  );
}

export function ColorsRoute(): ReactElement {
  return (
    <PrototypeDisplay>
      <PrototypeDisplay.Items
        label="Primary colors"
      >
        <ColorBox
          name="Primary"
          color={expressiveSysColor.primary}
          text={expressiveSysColor.onPrimary}
        />
        <ColorBox
          name="On primary"
          color={expressiveSysColor.onPrimary}
          text={expressiveSysColor.primary}
        />
        <ColorBox
          name="Primary container"
          color={expressiveSysColor.primaryContainer}
          text={expressiveSysColor.onPrimaryContainer}
        />
        <ColorBox
          name="On primary container"
          color={expressiveSysColor.onPrimaryContainer}
          text={expressiveSysColor.primaryContainer}
        />
      </PrototypeDisplay.Items>

      <PrototypeDisplay.Items
        label="Secondary colors"
      >
        <ColorBox
          name="Secondary"
          color={expressiveSysColor.secondary}
          text={expressiveSysColor.onSecondary}
        />
        <ColorBox
          name="On secondary"
          color={expressiveSysColor.onSecondary}
          text={expressiveSysColor.secondary}
        />
        <ColorBox
          name="Secondary container"
          color={expressiveSysColor.secondaryContainer}
          text={expressiveSysColor.onSecondaryContainer}
        />
        <ColorBox
          name="On secondary container"
          color={expressiveSysColor.onSecondaryContainer}
          text={expressiveSysColor.secondaryContainer}
        />
      </PrototypeDisplay.Items>

      <PrototypeDisplay.Items
        label="Tertiary colors"
      >
        <ColorBox
          name="Tertiary"
          color={expressiveSysColor.tertiary}
          text={expressiveSysColor.onTertiary}
        />
        <ColorBox
          name="On tertiary"
          color={expressiveSysColor.onTertiary}
          text={expressiveSysColor.tertiary}
        />
        <ColorBox
          name="Tertiary container"
          color={expressiveSysColor.tertiaryContainer}
          text={expressiveSysColor.onTertiaryContainer}
        />
        <ColorBox
          name="On tertiary container"
          color={expressiveSysColor.onTertiaryContainer}
          text={expressiveSysColor.tertiaryContainer}
        />
      </PrototypeDisplay.Items>

      <PrototypeDisplay.Items
        label="Error colors"
      >
        <ColorBox
          name="Error"
          color={expressiveSysColor.error}
          text={expressiveSysColor.onError}
        />
        <ColorBox
          name="On error"
          color={expressiveSysColor.onError}
          text={expressiveSysColor.error}
        />
        <ColorBox
          name="Error container"
          color={expressiveSysColor.errorContainer}
          text={expressiveSysColor.onErrorContainer}
        />
        <ColorBox
          name="On error container"
          color={expressiveSysColor.onErrorContainer}
          text={expressiveSysColor.errorContainer}
        />
      </PrototypeDisplay.Items>

      <PrototypeDisplay.Items
        label="Surface colors"
      >
        <ColorBox
          name="Surface"
          color={expressiveSysColor.surface}
          text={expressiveSysColor.onSurface}
        />
        <ColorBox
          name="On surface"
          color={expressiveSysColor.onSurface}
          text={expressiveSysColor.surface}
        />
        <ColorBox
          name="Surface variant"
          color={expressiveSysColor.surfaceVariant}
          text={expressiveSysColor.onSurfaceVariant}
        />
        <ColorBox
          name="On surface variant"
          color={expressiveSysColor.onSurfaceVariant}
          text={expressiveSysColor.surfaceVariant}
        />
        <ColorBox
          name="Surface container highest"
          color={expressiveSysColor.surfaceContainerHighest}
          text={expressiveSysColor.onSurface}
        />
        <ColorBox
          name="Surface container high"
          color={expressiveSysColor.surfaceContainerHigh}
          text={expressiveSysColor.onSurface}
        />
        <ColorBox
          name="Surface container"
          color={expressiveSysColor.surfaceContainer}
          text={expressiveSysColor.onSurface}
        />
        <ColorBox
          name="Surface container low"
          color={expressiveSysColor.surfaceContainerLow}
          text={expressiveSysColor.onSurface}
        />
        <ColorBox
          name="Surface container lowest"
          color={expressiveSysColor.surfaceContainerLowest}
          text={expressiveSysColor.onSurface}
        />
        <ColorBox
          name="Inverse surface"
          color={expressiveSysColor.inverseSurface}
          text={expressiveSysColor.inverseOnSurface}
        />
        <ColorBox
          name="Inverse on surface"
          color={expressiveSysColor.inverseOnSurface}
          text={expressiveSysColor.inverseSurface}
        />
        <ColorBox
          name="Surface tint"
          color={expressiveSysColor.surfaceTint}
          text={expressiveSysColor.onPrimary}
        />
      </PrototypeDisplay.Items>

      <PrototypeDisplay.Items
        label="Outline colors"
      >
        <ColorBox
          name="Outline"
          color={expressiveSysColor.outline}
          text={expressiveSysColor.surface}
        />
        <ColorBox
          name="Outline variant"
          color={expressiveSysColor.outlineVariant}
          text={expressiveSysColor.onSurface}
        />
      </PrototypeDisplay.Items>

      <PrototypeDisplay.Items
        label="Add-ons / Primary colors"
      >
        <ColorBox
          name="Primary fixed"
          color={expressiveSysColor.primaryFixed}
          text={expressiveSysColor.onPrimaryFixed}
        />
        <ColorBox
          name="On primary fixed"
          color={expressiveSysColor.onPrimaryFixed}
          text={expressiveSysColor.primaryFixed}
        />
        <ColorBox
          name="Primary fixed dim"
          color={expressiveSysColor.primaryFixedDim}
          text={expressiveSysColor.onPrimaryFixed}
        />
        <ColorBox
          name="On primary fixed variant"
          color={expressiveSysColor.onPrimaryFixedVariant}
          text={expressiveSysColor.primaryFixed}
        />
        <ColorBox
          name="Inverse primary"
          color={expressiveSysColor.inversePrimary}
          text={expressiveSysColor.inverseSurface}
        />
      </PrototypeDisplay.Items>

      <PrototypeDisplay.Items
        label="Add-ons / Secondary colors"
      >
        <ColorBox
          name="Secondary fixed"
          color={expressiveSysColor.secondaryFixed}
          text={expressiveSysColor.onSecondaryFixed}
        />
        <ColorBox
          name="On secondary fixed"
          color={expressiveSysColor.onSecondaryFixed}
          text={expressiveSysColor.secondaryFixed}
        />
        <ColorBox
          name="Secondary fixed dim"
          color={expressiveSysColor.secondaryFixedDim}
          text={expressiveSysColor.onSecondaryFixed}
        />
        <ColorBox
          name="On secondary fixed variant"
          color={expressiveSysColor.onSecondaryFixedVariant}
          text={expressiveSysColor.secondaryFixed}
        />
      </PrototypeDisplay.Items>

      <PrototypeDisplay.Items
        label="Add-ons / Tertiary colors"
      >
        <ColorBox
          name="Tertiary fixed"
          color={expressiveSysColor.tertiaryFixed}
          text={expressiveSysColor.onTertiaryFixed}
        />
        <ColorBox
          name="On tertiary fixed"
          color={expressiveSysColor.onTertiaryFixed}
          text={expressiveSysColor.tertiaryFixed}
        />
        <ColorBox
          name="Tertiary fixed dim"
          color={expressiveSysColor.tertiaryFixedDim}
          text={expressiveSysColor.onTertiaryFixed}
        />
        <ColorBox
          name="On tertiary fixed variant"
          color={expressiveSysColor.onTertiaryFixedVariant}
          text={expressiveSysColor.tertiaryFixed}
        />
      </PrototypeDisplay.Items>

      <PrototypeDisplay.Items
        label="Add-ons / Surface colors"
      >
        <ColorBox
          name="Background"
          color={expressiveSysColor.background}
          text={expressiveSysColor.onBackground}
        />
        <ColorBox
          name="On background"
          color={expressiveSysColor.onBackground}
          text={expressiveSysColor.background}
        />
        <ColorBox
          name="Surface bright"
          color={expressiveSysColor.surfaceBright}
          text={expressiveSysColor.onSurface}
        />
        <ColorBox
          name="Surface dim"
          color={expressiveSysColor.surfaceDim}
          text={expressiveSysColor.onSurface}
        />
        <ColorBox
          name="Scrim"
          color={expressiveSysColor.scrim}
          text={expressiveSysColor.surface}
        />
        <ColorBox
          name="Shadow"
          color={expressiveSysColor.shadow}
          text={expressiveSysColor.surface}
        />
      </PrototypeDisplay.Items>
    </PrototypeDisplay>
  );
}
