import { CompositeBuilderClassConfig } from '../test-config-types';
import { Prop } from '../../src/constants/props';
import { methodArgMocks } from '../mocks/method-arg-mocks';
import { SlackDto } from '../../src/lib';
import * as checks from '../checks';

export const excludeBotUsers = (params: CompositeBuilderClassConfig): void => {
  const config = {
    ...params,
    methodArgMock: methodArgMocks.excludeBotUsers,
    methodName: Prop.ExcludeBotUsers,
    propSetterPropName: Prop.ExcludeBotUsers,
    slackDtoParamName: SlackDto.mapParam(Prop.Filter),
  };

  checks.boolTrueProperty(config);
  checks.boolSettableProperty(config);
};
