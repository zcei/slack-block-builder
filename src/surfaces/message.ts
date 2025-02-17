import { SurfaceBuilderBase } from '../base';
import { SlackMessageDto } from '../lib';
import {
  AsUser,
  Attachments,
  Blocks,
  Channel,
  DeleteOriginal,
  Ephemeral,
  IgnoreMarkdown,
  InChannel,
  PostAt,
  ReplaceOriginal,
  Text,
  ThreadTs,
  Ts,
  BuildToJSON,
  BuildToObject,
  GetAttachments,
  GetBlocks,
  GetPreviewUrl,
  PrintPreviewUrl,
} from '../methods';
import { applyMixins, getBuilderResults } from '../helpers';

import type { SlackBlockDto, SlackDto } from '../lib';
import type { BlockBuilder } from '../types';

export interface MessageParams {
  channel?: string;
  postAt?: number;
  text?: string;
  threadTs?: string;
  ts?: string;
}

export interface MessageBuilder extends AsUser,
  Attachments,
  Blocks<BlockBuilder>,
  Channel,
  DeleteOriginal,
  Ephemeral,
  IgnoreMarkdown,
  InChannel,
  PostAt,
  ReplaceOriginal,
  Text,
  ThreadTs,
  Ts,
  BuildToJSON,
  BuildToObject<SlackMessageDto>,
  GetAttachments,
  GetBlocks,
  GetPreviewUrl,
  PrintPreviewUrl {
}

/**
 * @@link https://api.slack.com/messaging/composing
 * @@displayName Message
 */

export class MessageBuilder extends SurfaceBuilderBase {
  /** @internal */

  public build(): Readonly<SlackMessageDto> {
    return this.getResult(SlackMessageDto, {
      blocks: getBuilderResults<SlackBlockDto>(this.props.blocks),
      attachments: getBuilderResults<SlackDto>(this.props.attachments),
    });
  }
}

applyMixins(MessageBuilder, [
  AsUser,
  Attachments,
  Blocks,
  Channel,
  DeleteOriginal,
  Ephemeral,
  IgnoreMarkdown,
  InChannel,
  PostAt,
  ReplaceOriginal,
  Text,
  ThreadTs,
  Ts,
  BuildToJSON,
  BuildToObject,
  GetAttachments,
  GetBlocks,
  GetPreviewUrl,
  PrintPreviewUrl,
]);
