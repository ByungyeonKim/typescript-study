namespace Union {
  /**
   * Union Types: OR이라고 생각하면 쉽다.
   */

  // 발생 가능한 케이스들을 담고 그 중 하나의 케이스를 정하고 싶을 때
  type Direction = 'left' | 'right' | 'up' | 'down';
  function move(direction: Direction) {
    console.log(direction);
  }

  move('right');
  move('up');

  type TileSize = 8 | 16 | 32;
  const tile: TileSize = 16;

  // function: login -> success, fail
  type SuccessState = {
    response: {
      body: string;
    };
  };
  type FailState = {
    reason: string;
  };
  type LoginState = SuccessState | FailState;
  function login(): LoginState {
    // 만약 로그인이 성공했다면
    return {
      response: {
        body: '로그인 되었습니다.',
      },
    };
    // 로그인이 실패했다면
    // return {
    //  reason: '서버와의 연결이 끊겼습니다.',
    // }
  }

  // 로그인 상태에 따라 콘솔 로그를 표시하는 함수
  // in 연산자 -> 명시된 속성이 명시된 객체에 존재하면 true를 반환한다.
  function printLoginState(state: LoginState) {
    if ('response' in state) {
      console.log(`🎉 ${state.response.body}`);
    } else {
      console.log(`😭 ${state.reason}`);
    }
  }
}
