const a:number = 1;
const b:string = '아주 나이스';
const c:null = null;
const d:undefined = undefined;
const e:boolean = true;

// 타입스크립트 버전의 function #1
function add(x:number , y:number):number{
    return x+y
}

// 타입스크립트 버전의 function #2
const substract:(x:number,y:number)=> number = (x,y)=> x-y;

// 타입스크립트 버전의 function #3 => type 이용 (#2에서 타입만 만들어준 거라 같다 )
type Multiply = (x:number, y:number) => number;
const multiply  :Multiply = (x,y) => x*y;

// 타입스크립트 버전의 function #4 => 인터페이스 이용
interface Divide {
    (x:number, y:number): number
}

const divide:Divide = (x,y) => x/y; 

// 타입스크립트 버전의 Object #1
const obj: {x:number, y:number} = {x:39,  y:50}


// // 타입스크립트 버전의 배열
const arr: string[] = ['123','456','6869 ']

// 타입스크립트 버전의 generic
const arr2: Array<number> = [123,456 ]

// 타입스크립트 버전의 tuple (길이가 고정된 배열)
const arr3: [number, string, undefined] = [1, "Happy" , undefined]; 

// 타입스크립트 버전의 특정 타입만 받기 (boolean중에 true만 받고 싶을 떄 이렇게!!  )
const f:true = true;

// 타입스크립트 고정된 원시값 받기
const g:5 = 5;

// 타입스크립트 버전의 타입 다른 방식으로 적기 => 
// function love(x:string, y:string):string; // 타입 코드
// function love(x,y){ // 실제 코드
//     return x+y;
// }

// 타입스크립트 as 키워드 => as 앞 타입을 강제로 다른 타입으로 바꿔주는 키워드!!
let h: number;
h = '오늘을 이긴다' as unknown as number;

// 타입스크립트 Never 타입
try {
    const mine = [];
    mine.push('hello');
    } catch (error) {
        error;
    }
// 타입을 커스텀화 해서 만들어주기
type World = 'world' | 'hell';
const i: World = 'world'

const j= `hello ${i}`;

type Greeting = `hello ${World}`;
const k: Greeting = `hello hell`

const obj1 = {a:'사랑하는', b:'사람의 단점을 발견해도', c:'싫진 않아'} as const;
type Key = keyof typeof obj1