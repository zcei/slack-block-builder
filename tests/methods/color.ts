import { CompositeBuilderClassConfig } from '../test-config-types';
import { Prop } from '../../src/constants/props';
import { methodArgMocks } from '../mocks/method-arg-mocks';
import { SlackDto } from '../../src/lib';
import * as checks from '../checks';

export const color = (params: CompositeBuilderClassConfig): void => {
  const config = {
    ...params,
    methodArgMock: methodArgMocks.color,
    methodName: Prop.Color,
    propSetterPropName: Prop.Color,
    slackDtoParamName: SlackDto.mapParam(Prop.Color),
  };

  checks.settableProperty(config);
  checks.literalBuild(config);
};
