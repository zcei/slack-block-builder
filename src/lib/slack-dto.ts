/* eslint-disable max-classes-per-file */
/* eslint-disable @typescript-eslint/ban-ts-comment */

import { SurfaceType, BlockType, ElementType } from '../constants';

import type { ObjectLiteral } from '../types';

export enum Param {
  actionId = 'action_id',
  blocks = 'blocks',
  blockId = 'block_id',
  maxSelectedItems = 'max_selected_items',
  title = 'title',
  text = 'text',
  confirm = 'confirm',
  deny = 'deny',
  style = 'style',
  danger = 'danger',
  label = 'label',
  options = 'options',
  value = 'value',
  description = 'description',
  url = 'url',
  elements = 'elements',
  externalId = 'external_id',
  imageUrl = 'image_url',
  altText = 'alt_text',
  element = 'element',
  hint = 'hint',
  optional = 'optional',
  fields = 'fields',
  accessory = 'accessory',
  initialChannels = 'initial_channels',
  initialChannel = 'initial_channel',
  responseUrlEnabled = 'response_url_enabled',
  initialOptions = 'initial_options',
  initialConversations = 'initial_conversations',
  defaultToCurrentConversation = 'default_to_current_conversation',
  filter = 'filter',
  excludeExternalSharedChannels = 'exclude_external_shared_channels',
  excludeBotUsers = 'exclude_bot_users',
  initialConversation = 'initial_conversation',
  initialDate = 'initial_date',
  minQueryLength = 'min_query_length',
  initialOption = 'initial_option',
  optionGroups = 'option_groups',
  placeholder = 'placeholder',
  initialValue = 'initial_value',
  multiline = 'multiline',
  minLength = 'min_length',
  maxLength = 'max_length',
  initialUsers = 'initial_users',
  initialUser = 'initial_user',
  channel = 'channel',
  close = 'close',
  submit = 'submit',
  clearOnClose = 'clear_on_close',
  notifyOnClose = 'notify_on_close',
  privateMetaData = 'private_metadata',
  callbackId = 'callback_id',
  asUser = 'as_user',
  ts = 'ts',
  threadTs = 'thread_ts',
  replaceOriginal = 'replace_original',
  deleteOriginal = 'delete_original',
  responseType = 'response_type',
  postAt = 'post_at',
  color = 'color',
  fallback = 'fallback',
  attachments = 'attachments',
  dispatchAction = 'dispatch_action',
  dispatchActionConfig = 'dispatch_action_config',
  initialTime = 'initial_time',
  mrkdwn = 'mrkdwn',
  submitDisabled = 'submit_disabled',
  type = 'type',
}

export class SlackDto implements ObjectLiteral {
  constructor(params: ObjectLiteral) {
    Object.keys(params).forEach((paramName) => {
      const mappedParam = SlackDto.mapParam(paramName);

      if (params[paramName] !== undefined && mappedParam !== undefined) {
        // @ts-ignore -- Dynamically created class
        this[mappedParam] = params[paramName];
      }
    });
  }

  public static mapParam(param: string): string {
    // @ts-ignore -- Dynamically created class
    return Param[param];
  }
}

export class SlackMessageDto extends SlackDto {
  // @ts-ignore -- Dynamically created class
  public readonly text: string;

  // @ts-ignore -- Dynamically created class
  public readonly channel: string;

  public readonly blocks?: SlackBlockDto[];

  public readonly attachments?: SlackDto[];
}

export class SlackViewDto extends SlackDto {
  // @ts-ignore -- Dynamically created class
  public readonly type: SurfaceType;

  // @ts-ignore -- Dynamically created class
  public readonly blocks: SlackBlockDto[];
}

export class SlackBlockDto extends SlackDto {
  // @ts-ignore -- Dynamically created class
  public readonly type: BlockType;
}

export class SlackElementDto extends SlackDto {
  // @ts-ignore -- Dynamically created class
  public readonly type: ElementType;
}
