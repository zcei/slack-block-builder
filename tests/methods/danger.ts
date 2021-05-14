import { CompositeBuilderClassConfig } from '../test-config-types';
import { Prop } from '../../src/constants/props';
import { ButtonStyle } from '../../src/constants/button-styles';
import { SlackDto } from '../../src/lib';
import * as checks from '../checks';

export const danger = (params: CompositeBuilderClassConfig): void => {
  const config = {
    ...params,
    methodName: Prop.Danger,
    propSetterPropName: Prop.Style,
    slackDtoParamName: SlackDto.mapParam(Prop.Style),
    expectedEnumValue: ButtonStyle.Danger,
  };

  checks.configurableEnumValueProperty(config);
};
