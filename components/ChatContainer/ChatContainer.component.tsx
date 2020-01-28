import React, { useEffect, useReducer } from "react";
import { View } from "react-native";
import database from "@react-native-firebase/database";

import * as mockData from "../../mockDB.json";
import Message from "../Message";
import ActionButton from "../ActionButton";
import chatReducer, {
  ADD_TO_CONVERSATION,
  IThread,
  FILL_THREAD,
  REMOVE_FROM_CONVERSATION
} from "../../reducers/chat";
import ImageMessage from "../ImageMessage";

const initialState = { previous: [], conversation: [], thread: {} };

export default function ChatContainer() {
  const uid = "4szFlgouIMJ75tQi3xey";
  const [state, dispatch] = useReducer(chatReducer, initialState);
  const TAP_TO_CONTINUE = "Tap to continue";

  useEffect(() => {
    // Create reference
    const ref = database().ref(`/stories/${uid}`);
    let thread: IThread;

    function initFlow() {
      dispatch({
        type: ADD_TO_CONVERSATION,
        payload: {
          ...thread.storyThread[thread.firstMessage],
          key: thread.firstMessage,
          shouldAnimate: true
        }
      });
      dispatch({ type: FILL_THREAD, payload: thread.storyThread });
    }

    ref
      .once("value", snapshot => {
        thread = snapshot.val();
        initFlow();
      })
      .catch(error => console.warn(error));

    setTimeout(() => {
      if (!thread) {
        thread = mockData.stories[uid];
        initFlow();
      }
    }, 2000);
  }, [uid]);

  return (
    <View>
      <ActionButton
        onTouchEnd={() => {
          dispatch({
            type: REMOVE_FROM_CONVERSATION
          });
        }}
      />
      <View style={{ height: "100%" }}>
        {state.conversation.length > 0 &&
          state.conversation.map(item => {
            const { isLocalUser, name, message, key, shouldAnimate } = item;
            return item.type === "text" ? (
              <Message
                isLocalUser={isLocalUser}
                userName={name}
                message={message}
                key={key}
                shouldAnimate={shouldAnimate}
              />
            ) : (
              <ImageMessage
                shouldAnimate={shouldAnimate}
                isLocalUser={isLocalUser}
                key={key}
              />
            );
          })}
      </View>
      <ActionButton
        isBottomButton={true}
        onTouchEnd={() => {
          const count = state.conversation.length - 1;
          if (!state.conversation[count].next) return;
          dispatch({
            type: ADD_TO_CONVERSATION,
            payload: {
              ...state.thread[state.conversation[count].next[0]],
              key: state.conversation[count].next[0],
              shouldAnimate: true
            }
          });
        }}
      >
        {TAP_TO_CONTINUE}
      </ActionButton>
    </View>
  );
}
