namespace Enum {
  /**
   * Enum -> 여러가지 관련된 상수 값들을 한 곳에 모아서 정의할 수 있게 해주는 타입
   */
  // JavaScript
  const MAX_NUM = 6;
  const MAX_STUDENTS_PER_CLASS = 10;
  // 서로 연관되어 있지만 상수를 묶을 수 있는 타입이 없다.
  const MONDAY = 0;
  const TUESDAY = 1;
  const WEDNESDAY = 2;
  // Enum과 최대한 가까이 구현해보자면
  const DAYS_ENUM = Object.freeze({
    MONDAY: 0,
    TUESDAY: 1,
    WEDNESDAY: 2,
  });
  const dayOfToday = DAYS_ENUM.MONDAY;

  // TypeScript
  enum Days {
    /**
     * 문자열도 가능하지만 자동으로 인식하기 어렵기 때문에
     * 수동으로 하나씩 할당해줘야 한다.
     */
    Sunday = 1,
    Monday,
    Tuesday = '점심시간 1시간',
    Wednesday = '점심시간 2시간',
    Thursday = '점심시간 1시간',
    Friday = '점심시간 1시간',
    Saturday = '쉬는 날',
  }
  console.log(Days.Sunday);
  console.log(Days.Monday);
  let day: Days = Days.Wednesday;
  console.log(day);
  // 하지만 enum을 쓰는건 권장하지 않는다.
  // 타입이 정확하게 보장되지가 않기 때문이다.
  day = 10;
  day = 15;
  console.log(day);

  // TypeScript에서는 enum보단 union으로 충분히 구현이 가능하다.
  type DaysOfWeek = 'Monday' | 'Tuesday' | 'Wednesday';
  let daysOfWeek: DaysOfWeek = 'Monday';
  daysOfWeek = 'Tuesday';
}
