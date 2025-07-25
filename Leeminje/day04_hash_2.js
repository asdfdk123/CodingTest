//폰켓몬

/** ✏️ 목표
 * - N마리 중 절반인 N/2마리를 선택하여
 * - 선택 가능한 서로 다른 폰켓몬 종류의 최댓값을 구하라!
 *
 * ► 예상 로직
 * 1. 선택할 수 있는 마릿수는 전체의 절반 (N / 2)
 * 2. 전체 폰켓몬 중 중복을 제거한 "종류 수"를 구한다
 * 3. 선택 가능한 최대 종류 수는 Math.min(고를 수 있는 수, 고유 종류 수)
 */

// 기존코드
function solution(nums) {
  const max = nums.length / 2;
  const unique = new Set(nums).size;

  return Math.min(max, unique);
}

/**
 * 📖 풀이 과정 설명
 * 1️⃣ 고를 수 있는 마릿수
 * - 문제에서 N마리 중 N/2마리만 고를 수 있다고 명시되어 있으므로, nums.length / 2로 계산합니다.
 * 2️⃣ 중복 제거된 종류 수
 * - Set은 고유한 값만 저장되므로, new Set(nums).size를 통해 폰켓몬 종류 수를 바로 구할 수 있습니다.
 * 3️⃣ 가능한 최대 종류 수 결정
 * - 내가 고를 수 있는 수보다 종류가 적으면 종류 수가 최대치,
 * - 반대로 종류가 많아도 고를 수 있는 수 이상은 못 고르므로,
 * - 결과는 Math.min(maxCount, uniqueKinds)가 됩니다.
 */
