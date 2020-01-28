import { Dimensions } from "react-native";

export const ADD_TO_CONVERSATION = "ADD_TO_CONVERSATION";
export const FILL_THREAD = "FILL_THREAD";
export const REMOVE_FROM_CONVERSATION = "REMOVE_FROM_CONVERSATION";

interface Dictionary<T> {
  [key: string]: any;
}

export interface IMessage {
  isLocalUser: any;
  message: string;
  name: string;
  next: string[];
  type: "text" | "image";
}

type StoryThreadType = Dictionary<IMessage>;

export interface IThread {
  coverImage: string;
  firstMessage: string;
  storyThread: StoryThreadType;
  storyTitle: string;
}

export type Previous = string[];

interface IConversation {
  conversation: IMessage[];
}

interface ConversationAction {
  type: typeof ADD_TO_CONVERSATION;
  payload: IConversation;
}

interface ThreadAction {
  type: typeof FILL_THREAD;
  payload: StoryThreadType;
}

interface RemoveAction {
  type: typeof REMOVE_FROM_CONVERSATION;
}

export type ChatActionTypes = ConversationAction | ThreadAction | RemoveAction;

const screenHeight = Math.round(Dimensions.get("window").height);

export default function chatReducer(state, action: ChatActionTypes) {
  switch (action.type) {
    case ADD_TO_CONVERSATION:
      // TODO: Get container's height and calculate number of elements
      if (state.conversation.length > screenHeight / 120) {
        // Here we are removing the first item from conversation
        // to enhance the performance and adding the item keys to an array
        state.previous.push(state.conversation[0]);
        state.conversation.shift();
      }
      return {
        ...state,
        conversation: [...state.conversation, action.payload]
      };
    case REMOVE_FROM_CONVERSATION:
      // Remove it from `previous` and add it to `conversation`
      if (state.previous.length > 0) {
        state.previous[state.previous.length - 1].shouldAnimate = false;
        state.conversation.unshift(state.previous.splice(-1, 1)[0]);
      }
      if (state.conversation.length > 1) {
        state.conversation.pop();
      }
      return {
        ...state
      };
    case FILL_THREAD:
      return { ...state, thread: action.payload };
    default:
      throw new Error();
  }
}
