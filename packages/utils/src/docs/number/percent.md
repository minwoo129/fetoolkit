# Numbers(percent)

- 나눗셈 결과를 퍼센트로 계산해주는 함수입니다.
- 참고사항
  - 분자가 0보다 작은 경우 또는 분모가 0보다 작거나 같은 경우에는 'error'라고 반환됩니다.
  - 표현 가능 범위: 0 ~ 100
    - 이 외에 값들은 모두 Error를 반환하게 됩니다.  
      (1.0.0 버전에서는 'error'라는 문자열을 반환했지만, 1.1.0 버전 부터는 실제 Error 객체를 throw하기 때문에 사용에 주의하셔야 합니다.)

```tsx
percent(num, denom, unit);
```

## 기본 사용 예시

```tsx
import { percent } from '@fetoolkit/utils';

const num1 = percent(1, 3); // 33
const num2 = percent(1, 3, 2); // 33.33
```

## API 문서

- 입력 인자
  |name|type|required|description|
  |:---:|:---|:---|:---:|
  |num| number |true|분자|
  |denom| number |true|분모|
  |unit| number |false|잘라낼 소숫점 단위<br>(default: 0)|
- 반환 타입: string
