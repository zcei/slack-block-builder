import { ElementBuilderBase } from '../base';
import { SlackElementDto } from '../lib';
import {
  ActionId,
  Confirm,
  End,
  InitialOption,
  MinQueryLength,
  Placeholder,
  Build,
} from '../methods';
import { applyMixins, getPlainTextObject, getBuilderResult } from '../helpers';
import { ElementType } from '../constants/element-types';

import type { ConfirmationDialogBuilder } from '../bits/confirmation-dialog';

export interface ExternalSelectParams {
  actionId?: string;
  minQueryLength?: number;
  placeholder?: string;
}

export interface ExternalSelectBuilder extends ActionId,
  Confirm<ConfirmationDialogBuilder>,
  End,
  InitialOption,
  MinQueryLength,
  Placeholder,
  Build {
}

/**
 * @@link https://api.slack.com/reference/block-kit/block-elements#external_select
 * @@displayName External Select
 */

export class ExternalSelectBuilder extends ElementBuilderBase<ExternalSelectParams> {
  /** @internal */

  public build(): SlackElementDto {
    return this.getResult(SlackElementDto, {
      type: ElementType.ExternalSelect,
      placeholder: getPlainTextObject(this.props.placeholder),
      initialOption: getBuilderResult(this.props.initialOption),
      confirm: getBuilderResult(this.props.confirm),
    });
  }
}

applyMixins(ExternalSelectBuilder, [
  ActionId,
  Confirm,
  End,
  InitialOption,
  MinQueryLength,
  Placeholder,
]);
