import type { ReactElement } from 'react';
import {
  ExpressiveFontBodyLarge,
  ExpressiveFontBodyMedium,
  ExpressiveFontBodySmall,
  ExpressiveFontDisplayLarge,
  ExpressiveFontDisplayMedium,
  ExpressiveFontDisplaySmall,
  ExpressiveFontHeadlineLarge,
  ExpressiveFontHeadlineMedium,
  ExpressiveFontHeadlineSmall,
  ExpressiveFontLabelLarge,
  ExpressiveFontLabelMedium,
  ExpressiveFontLabelSmall,
  ExpressiveFontTitleLarge,
  ExpressiveFontTitleMedium,
  ExpressiveFontTitleSmall,
} from '../../src';
import { StorybookDisplay } from '../components/StorybookDisplay';

export function FontsRoute(): ReactElement {
  return (
    <StorybookDisplay>
      <StorybookDisplay.Item
        label="Typography"
      >
        <ExpressiveFontDisplayLarge
          block
        >
          Display Large
        </ExpressiveFontDisplayLarge>
        <ExpressiveFontDisplayMedium
          block
        >
          Display Medium
        </ExpressiveFontDisplayMedium>
        <ExpressiveFontDisplaySmall
          block
        >
          Display Small
        </ExpressiveFontDisplaySmall>
        <ExpressiveFontHeadlineLarge
          block
        >
          Headline Large
        </ExpressiveFontHeadlineLarge>
        <ExpressiveFontHeadlineMedium
          block
        >
          Headline Medium
        </ExpressiveFontHeadlineMedium>
        <ExpressiveFontHeadlineSmall
          block
        >
          Headline Small
        </ExpressiveFontHeadlineSmall>
        <ExpressiveFontTitleLarge
          block
        >
          Title Large
        </ExpressiveFontTitleLarge>
        <ExpressiveFontTitleMedium
          block
        >
          Title Medium
        </ExpressiveFontTitleMedium>
        <ExpressiveFontTitleSmall
          block
        >
          Title Small
        </ExpressiveFontTitleSmall>
        <ExpressiveFontBodyLarge
          block
        >
          Body Large
        </ExpressiveFontBodyLarge>
        <ExpressiveFontBodyMedium
          block
        >
          Body Medium
        </ExpressiveFontBodyMedium>
        <ExpressiveFontBodySmall
          block
        >
          Body Small
        </ExpressiveFontBodySmall>
        <ExpressiveFontLabelLarge
          block
        >
          Label Large
        </ExpressiveFontLabelLarge>
        <ExpressiveFontLabelMedium
          block
        >
          Label Medium
        </ExpressiveFontLabelMedium>
        <ExpressiveFontLabelSmall
          block
        >
          Label Small
        </ExpressiveFontLabelSmall>
      </StorybookDisplay.Item>
    </StorybookDisplay>
  );
}
