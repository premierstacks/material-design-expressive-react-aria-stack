import type { ReactElement } from 'react';
import { CardVariant, YouCard, YouCardLink } from '../../src';
import { PrototypeDisplay } from '../components/PrototypeDisplay';

export function YouCardRoute(): ReactElement {
  return (
    <PrototypeDisplay>
      <PrototypeDisplay.Item>
        <YouCard variant={CardVariant.Elevated}>
          <YouCard.Content>
            Elevated Card
          </YouCard.Content>
        </YouCard>
      </PrototypeDisplay.Item>
      <PrototypeDisplay.Item>
        <YouCard variant={CardVariant.Filled}>
          <YouCard.Content>
            Filled Card
          </YouCard.Content>
        </YouCard>
      </PrototypeDisplay.Item>
      <PrototypeDisplay.Item>
        <YouCard variant={CardVariant.Outlined}>
          <YouCard.Content>
            Outlined Card
          </YouCard.Content>
        </YouCard>
      </PrototypeDisplay.Item>
      <PrototypeDisplay.Item>
        <YouCardLink href="#elevated" variant={CardVariant.Elevated}>
          <YouCard.Content>
            Elevated Card Link
          </YouCard.Content>
        </YouCardLink>
      </PrototypeDisplay.Item>
      <PrototypeDisplay.Item>
        <YouCardLink href="#filled" variant={CardVariant.Filled}>
          <YouCard.Content>
            Filled Card Link
          </YouCard.Content>
        </YouCardLink>
      </PrototypeDisplay.Item>
      <PrototypeDisplay.Item>
        <YouCardLink href="#outlined" variant={CardVariant.Outlined}>
          <YouCard.Content>
            Outlined Card Link
          </YouCard.Content>
        </YouCardLink>
      </PrototypeDisplay.Item>
    </PrototypeDisplay>
  );
}
