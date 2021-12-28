namespace inference {
  /**
   * Type Inference(타입 추론)
   */
  let text = 'hello';
  // text = 1; error
  function print(message = 'hello') {
    console.log(message);
  }
  print();
  print('vintz');
  // print(5); error

  // 모든 타입을 명시해줄 필요는 없다. 이런 경우엔 추론이 가능하다.
  function add(x: number, y: number) {
    return x + y;
  }
  const result = add(1, 2);
  // 하지만, 함수가 복잡하다면? 그리고 협업 시에 이런 습관은 좋지 않다.
  // 따라서 웬만하면 원시타입, 리턴값이 없는 void가 아닌 이상 타입을 명시해주자.
  // 마지막으로 협업 시엔 스타일 가이드를 좀 더 명확히 해서 '이런 식으로 꼭 타입을 명시해야 하며,
  // 이런 경우엔 생략이 가능하다'라는 것과 같은 규칙을 정해서 일관성 있는 코드를 작성하자.
}
