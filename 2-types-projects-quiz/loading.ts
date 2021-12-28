{
  /**
   * Print Loading State
   */
  type LoadingState = {
    state: 'loading';
  };

  type SuccessState = {
    state: 'success';
    response: {
      body: string;
    };
  };

  type FailState = {
    state: 'fail';
    reason: string;
  };

  type ResourceLoadState = LoadingState | SuccessState | FailState;

  function printLoginState(login: ResourceLoadState) {
    switch (login.state) {
      case 'loading':
        console.log('👀 loading...');
        break;
      case 'success':
        console.log(`😀 ${login.response.body}`);
        break;
      case 'fail':
        console.log(`😱 ${login.reason}`);
        break;
      default:
        throw Error(`유효하지않은 상태입니다: ${login}`);
    }

    // if (login.state === 'loading') {
    //   console.log('👀 loading...');
    // } else if (login.state === 'success') {
    //   console.log(`😀 ${login.response.body}`);
    // } else {
    //   console.log(`😱 ${login.reason}`);
    // }
  }

  printLoginState({ state: 'loading' }); // 👀 loading...
  printLoginState({ state: 'success', response: { body: 'loaded' } }); // 😃 loaded
  printLoginState({ state: 'fail', reason: 'no network' }); // 😱 no network
}
