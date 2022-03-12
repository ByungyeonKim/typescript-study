{
  // 예상가능한 에러를 처리하기 위해 error state를 만들어보자.
  type NetworkErrorState = {
    result: 'fail';
    reason: 'offline' | 'down' | 'timeout';
  };
  type SuccessState = {
    result: 'success';
  };
  type ResultState = SuccessState | NetworkErrorState;

  class NetworkClient {
    tryConnect(): ResultState {
      // throw는 남발하지 말자.
      return {
        result: 'fail',
        reason: 'down',
      };
    }
  }

  class UserService {
    constructor(private client: NetworkClient) {}

    login() {
      this.client.tryConnect();
      // login...
    }
  }

  // try catch는 좀 더 의미있는 곳에서 사용을 하자.
  class App {
    constructor(private userService: UserService) {}
    run() {
      try {
        this.userService.login();
      } catch (error) {
        // 사용자에게 오프라인이라는 것을 표시 ex) 네트워크 상태를 확인하세요.
      }
    }
  }

  const client = new NetworkClient();
  const service = new UserService(client);
  const app = new App(service);
  app.run();
}
