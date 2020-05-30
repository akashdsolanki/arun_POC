import React, { useEffect } from 'react';
import JitsiMeet, { JitsiMeetView } from 'react-native-jitsi-meet';

function App(props) {
  useEffect(() => {
    let userName = props.route.params.userName
    setTimeout(() => {
      const url = 'https://meet.jit.si/jitsiExampleReactNative';
      const userInfo = {
        displayName: userName,
        email: 'akash.solanki2002@gmail.com',
        avatar: 'akashdsolanki2002@gmail.com',
      };
      JitsiMeet.call(url, userInfo);
      /* Você também pode usar o JitsiMeet.audioCall (url) para chamadas apenas de áudio */
      /* Você pode terminar programaticamente a chamada com JitsiMeet.endCall () */
    }, 1000);
  }, [])

  useEffect(() => {
    return () => {
      JitsiMeet.endCall();
    };
  });

  function onConferenceTerminated(nativeEvent) {
    /* Conference terminated event */
    console.log(nativeEvent)
  }

  function onConferenceJoined(nativeEvent) {
    /* Conference joined event */
    console.log(nativeEvent)
  }

  function onConferenceWillJoin(nativeEvent) {
    /* Conference will join event */
    console.log(nativeEvent)
  }
  return (
    <JitsiMeetView
      onConferenceTerminated={e => onConferenceTerminated(e)}
      onConferenceJoined={e => onConferenceJoined(e)}
      onConferenceWillJoin={e => onConferenceWillJoin(e)}
      style={{
        flex: 1,
        height: '100%',
        width: '100%',
      }}
    />
  )
}
export default App;