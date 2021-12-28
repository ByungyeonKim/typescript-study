namespace DiscriminatedUnion {
  // Discriminated Union 👍 -> 식별할 수 있는 Union

  // function: login -> success, fail
  type SuccessState = {
    result: 'success';
    response: {
      body: string;
    };
  };
  type FailState = {
    result: 'fail';
    reason: string;
  };

  type LoginState = SuccessState | FailState;
  function login(): LoginState {
    // 만약 로그인이 성공했다면
    return {
      result: 'success',
      response: {
        body: '로그인 되었습니다.',
      },
    };
    // 로그인이 실패했다면
    // return {
    //  result: 'fail',
    //  reason: '서버와의 연결이 끊겼습니다.',
    // }
  }

  // 로그인 상태에 따라 콘솔 로그를 표시하는 함수
  // in 연산자 -> 명시된 속성이 명시된 객체에 존재하면 true를 반환한다.
  function printLoginState(state: LoginState) {
    // 동일한 key를 줘서 Discriminated, 즉 식별 가능하도록 해준다.
    // 좀 더 직관적으로 코드 작성이 가능하다.
    if (state.result === 'success') {
      console.log(`🎉 ${state.response.body}`);
    } else {
      console.log(`😭 ${state.reason}`);
    }
  }
}
