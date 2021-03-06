namespace DiscriminatedUnion {
  // Discriminated Union π -> μλ³ν  μ μλ Union

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
    // λ§μ½ λ‘κ·ΈμΈμ΄ μ±κ³΅νλ€λ©΄
    return {
      result: 'success',
      response: {
        body: 'λ‘κ·ΈμΈ λμμ΅λλ€.',
      },
    };
    // λ‘κ·ΈμΈμ΄ μ€ν¨νλ€λ©΄
    // return {
    //  result: 'fail',
    //  reason: 'μλ²μμ μ°κ²°μ΄ λκ²Όμ΅λλ€.',
    // }
  }

  // λ‘κ·ΈμΈ μνμ λ°λΌ μ½μ λ‘κ·Έλ₯Ό νμνλ ν¨μ
  // in μ°μ°μ -> λͺμλ μμ±μ΄ λͺμλ κ°μ²΄μ μ‘΄μ¬νλ©΄ trueλ₯Ό λ°ννλ€.
  function printLoginState(state: LoginState) {
    // λμΌν keyλ₯Ό μ€μ Discriminated, μ¦ μλ³ κ°λ₯νλλ‘ ν΄μ€λ€.
    // μ’ λ μ§κ΄μ μΌλ‘ μ½λ μμ±μ΄ κ°λ₯νλ€.
    if (state.result === 'success') {
      console.log(`π ${state.response.body}`);
    } else {
      console.log(`π­ ${state.reason}`);
    }
  }
}
