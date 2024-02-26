import './App.css';
import Header from './component/Header';
import MovieList from './component/MovieList';
import poster1 from './img/01post.jpg';
import poster2 from './img/02post.jpg';
import poster3 from './img/03post.jpg';
import poster4 from './img/04post.jpg';
import poster5 from './img/05post.jpg';
import poster6 from './img/06post.jpg';
import poster7 from './img/07post.jpg';
import poster8 from './img/08post.jpg';
import poster9 from './img/09post.jpg';
import poster10 from './img/10post.jpg';
import poster11 from './img/11post.jpg';
import poster12 from './img/12post.jpg';
import poster13 from './img/13post.jpg';
import poster14 from './img/14post.jpg';
import poster15 from './img/15post.jpg';
import poster16 from './img/16post.jpg';
import poster17 from './img/17post.jpg';
import poster18 from './img/18post.jpg';
import poster19 from './img/19post.jpg';
import poster20 from './img/20post.jpg';
import bg1 from './img/01bg.jpg';
import bg2 from './img/02bg.jpg';
import bg3 from './img/03bg.jpg';
import bg4 from './img/04bg.jpg';
import bg5 from './img/05bg.jpg';
import bg6 from './img/06bg.jpg';
import bg7 from './img/07bg.jpg';
import bg8 from './img/08bg.jpg';
import bg9 from './img/09bg.jpg';
import bg10 from './img/10bg.jpg';
import bg11 from './img/11bg.jpg';
import bg12 from './img/12bg.jpg';
import bg13 from './img/13bg.jpg';
import bg14 from './img/14bg.jpg';
import bg15 from './img/15bg.jpg';
import bg16 from './img/16bg.jpg';
import bg17 from './img/17bg.jpg';
import bg18 from './img/18bg.jpg';
import bg19 from './img/19bg.jpg';
import bg20 from './img/20bg.jpg';
import director1 from './img/01direct.png';
import director2 from './img/02direct.png';
import director3 from './img/03direct.png';
import director4 from './img/04direct.png';
import director5 from './img/05direct.png';
import director6 from './img/06direct.png';
import director7 from './img/07direct.png';
import director8 from './img/08direct.png';
import director9 from './img/09direct.png';
import director10 from './img/13direct.png';
import director11 from './img/11direct.png';
import director12 from './img/12direct.png';
import director13 from './img/13direct.png';
import director14 from './img/14direct.png';
import director15 from './img/15direct.png';
import director16 from './img/16direct.png';
import director17 from './img/17direct.png';
import director18 from './img/18direct.png';
import director19 from './img/19direct.png';
import director20 from './img/20direct.png';
import actor1_1 from './img/01actor_1.png';
import actor1_2 from './img/02actor_1.png';
import actor1_3 from './img/03actor_1.png';
import actor1_4 from './img/04actor_1.png';
import actor1_5 from './img/05actor_1.png';
import actor1_6 from './img/06actor_1.png';
import actor1_7 from './img/07actor_1.png';
import actor1_8 from './img/08actor_1.png';
import actor1_9 from './img/09actor_1.png';
import actor1_10 from './img/10actor_1.png';
import actor1_11 from './img/11actor_1.png';
import actor1_12 from './img/12actor_1.png';
import actor1_13 from './img/13actor_1.png';
import actor1_14 from './img/14actor_1.png';
import actor1_15 from './img/15actor_1.png';
import actor1_16 from './img/16actor_1.png';
import actor1_17 from './img/17actor_1.png';
import actor1_18 from './img/18actor_1.png';
import actor1_19 from './img/19actor_1.png';
import actor1_20 from './img/20actor_1.png';
import actor2_1 from './img/01actor_2.png';
import actor2_2 from './img/02actor_2.png';
import actor2_3 from './img/03actor_2.png';
import actor2_4 from './img/04actor_2.png';
import actor2_5 from './img/05actor_2.png';
import actor2_6 from './img/06actor_2.png';
import actor2_7 from './img/07actor_2.png';
import actor2_8 from './img/08actor_2.png';
import actor2_9 from './img/09actor_2.png';
import actor2_10 from './img/10actor_2.png';
import actor2_11 from './img/11actor_2.png';
import actor2_12 from './img/12actor_2.png';
import actor2_13 from './img/13actor_2.png';
import actor2_14 from './img/14actor_2.png';
import actor2_15 from './img/15actor_2.png';
import actor2_16 from './img/16actor_2.png';
import actor2_17 from './img/17actor_2.png';
import actor2_18 from './img/18actor_2.png';
import actor2_19 from './img/19actor_2.png';
import actor2_20 from './img/20actor_2.png';
import actor3_1 from './img/01actor_3.png';
import actor3_3 from './img/03actor_3.png';
import actor3_4 from './img/04actor_3.png';
import actor3_5 from './img/05actor_3.png';
import actor3_6 from './img/06actor_3.png';
import actor3_7 from './img/07actor_3.png';
import actor3_8 from './img/08actor_3.png';
import actor3_9 from './img/09actor_3.png';
import actor3_10 from './img/10actor_3.png';
import actor3_11 from './img/11actor_3.png';
import actor3_13 from './img/13actor_3.png';
import actor3_15 from './img/15actor_3.png';
import actor3_17 from './img/17actor_3.png';
import actor3_18 from './img/18actor_3.png';
import actor3_19 from './img/19actor_3.png';
import { useState } from 'react';

const dummy = [
    {
        id : 0,
        title : '아바타: 물의 길',
        year : 2022,
        age : '12세',
        runningTime : 192,
        point : 8.83,
        director : {
            name : '제임스 카메론',
            photo : director1
        },
        actor : [
            {
                id : 1,
                name : '조 샐다나',
                char : '네이티리 역',
                photo : actor1_1
            },
            {
                id : 2,
                name : '샘 워싱턴',
                char : '제이크 설리 역',
                photo : actor2_1
            },
            {
                id : 3,
                name : '시고니 위버',
                char : '그레이스 어거스틴 & 키리 역',
                photo : actor3_1
            }
        ],
        summary : "<아바타: 물의 길>은 판도라 행성에서 '제이크 설리'와 '네이티리'가 이룬 가족이 겪게 되는 무자비한 위협과 살아남기 위해 떠나야 하는 긴 여정과 전투, 그리고 견뎌내야 할 상처에 대한 이야기를 그렸다. 월드와이드 역대 흥행 순위 1위를 기록한 전편 <아바타>에 이어 제임스 카메론 감독이 13년만에 선보이는 영화로, 샘 워싱턴, 조 샐다나, 시고니 위버, 스티븐 랭, 케이트 윈슬렛이 출연하고 존 랜도가 프로듀싱을 맡았다.",
        poster : poster1,
        bg : bg1
    },
    {
        id : 1,
        title : '엘리멘탈',
        year : 2023,
        age : '전체',
        runningTime : 109,
        point : 8.93,
        director : {
            name : '피터 손',
            photo : director2
        },
        actor :[
            {
                id : 1,
                name : '레아 루이스',
                char : '앰버 역',
                photo : actor1_2
            },
            {
                id : 2,
                name : '마무두 아티',
                char : '웨이드 역',
                photo : actor2_2
            },
        ],
        summary : "불, 물, 공기, 흙 4개의 원소들이 살고 있는 ‘엘리멘트 시티’ 재치 있고 불처럼 열정 넘치는 ‘앰버'는 어느 날 우연히 유쾌하고 감성적이며 물 흐르듯 사는 '웨이드'를 만나 특별한 우정을 쌓으며, 지금껏 믿어온 모든 것들이 흔들리는 새로운 경험을 하게 되는데... 웰컴 투 ‘엘리멘트 시티’!",
        poster : poster2,
        bg : bg2
    },
    {
        id : 2,
        title : '다만 악에서 구하소서',
        year : 2020,
        age : '15세',
        runningTime : 108,
        point : 8.54,
        director : {
            name : '홍원찬',
            photo : director3
        },
        actor : [
            {
                id : 1,
                name : '황정민',
                char : '인남 역',
                photo : actor1_3
            },
            {
                id : 2,
                name : '이정재',
                char : '레이 역',
                photo : actor2_3
            },
            {
                id : 3,
                name : '박정민',
                char : '유이 역',
                photo : actor3_3
            },
        ],
        summary : "태국에서 충격적인 납치사건이 발생하고 마지막 청부살인 미션을 끝낸 암살자 인남(황정민)은 그것이 자신과 관계된 것임을 알게 된다. 인남은 곧바로 태국으로 향하고, 조력자 유이(박정민)를 만나 사건을 쫓기 시작한다. 한편, 자신의 형제가 인남에게 암살당한 것을 알게 된 레이(이정재). 무자비한 복수를 계획한 레이는 인남을 추격하기 위해 태국으로 향하는데... 처절한 암살자 VS 무자비한 추격자 멈출 수 없는 두 남자의 지독한 추격이 시작된다!",
        poster : poster3,
        bg : bg3
    },
    {
        id : 3,
        title : '범죄도시2',
        year : 2022,
        age : '15세',
        runningTime : 106,
        point : 8.99,
        director : {
            name : '이상용',
            photo : director4
        },
        actor : [
            {
                id : 1,
                name : '마동석',
                char : '마석두 역',
                photo : actor1_4
            },
            {
                id : 2,
                name : '손석구',
                char : '강해상 역',
                photo : actor2_4
            },
            {
                id : 3,
                name : '최귀화',
                char : '전일만 역',
                photo : actor3_4
            }
        ],
        summary : "가리봉동 소탕작전 후 4년 뒤, 금천서 강력반은 베트남으로 도주한 용의자를 인도받아 오라는 미션을 받는다. 괴물형사 ‘마석도’(마동석)와 ‘전일만’(최귀화) 반장은 현지 용의자에게서 수상함을 느끼고, 그의 뒤에 무자비한 악행을 벌이는 ‘강해상’(손석구)이 있음을 알게 된다. ‘마석도’와 금천서 강력반은 한국과 베트남을 오가며 역대급 범죄를 저지르는 ‘강해상’을 본격적으로 쫓기 시작하는데... 나쁜 놈들 잡는 데 국경 없다! 통쾌하고 화끈한 범죄 소탕 작전이 다시 펼쳐진다!",
        poster : poster4,
        bg : bg4
    },
    {
        id : 4,
        title : '스파이더맨: 노 웨이 홈',
        year : 2021,
        age : '12세',
        runningTime : 148,
        point : 9.09,
        director : {
            name : '존 왓츠',
            photo : director5
        },
        actor : [
            {
                id : 1,
                name : '톰 홀랜드',
                char : '피터 파커 / 스파이더 맨 역',
                photo : actor1_5
            },
            {
                id : 2,
                name : '젠데이아 콜먼',
                char : 'MJ 역',
                photo : actor2_5
            },
            {
                id : 3,
                name : '베네딕트 컴버배치',
                char : '닥터 스트레인지 역',
                photo : actor3_5
            },
        ],
        summary : "‘미스테리오’의 계략으로 세상에 정체가 탄로난 스파이더맨 ‘피터 파커’는 하루 아침에 평범한 일상을 잃게 된다. 문제를 해결하기 위해 ‘닥터 스트레인지’를 찾아가 도움을 청하지만 뜻하지 않게 멀티버스가 열리면서 각기 다른 차원의 불청객들이 나타난다. ‘닥터 옥토퍼스’를 비롯해 스파이더맨에게 깊은 원한을 가진 숙적들의 강력한 공격에 ‘피터 파커’는 사상 최악의 위기를 맞게 되는데…",
        poster : poster5,
        bg : bg5
    },
    {
        id : 5,
        title : '모가디슈',
        year : 2021,
        age : '15세',
        runningTime : 121,
        point : 8.66,
        director : {
            name : '류승완',
            photo : director6
        },
        actor : [
            {
                id : 1,
                name : '김윤석',
                char : '한신성 대사 역',
                photo : actor1_6
            },
            {
                id : 2,
                name : '조인성',
                char : '강대진 참사관 역',
                photo : actor2_6
            },
            {
                id : 3,
                name : '허준호',
                char : '림용수 대사 역',
                photo : actor3_6
            }
        ],
        summary : "내전으로 고립된 낯선 도시, 모가디슈 지금부터 우리의 목표는 오로지 생존이다! 대한민국이 UN가입을 위해 동분서주하던 시기 1991년 소말리아의 수도 모가디슈에서는 일촉즉발의 내전이 일어난다. 통신마저 끊긴 그 곳에 고립된 대한민국 대사관의 직원과 가족들은 총알과 포탄이 빗발치는 가운데, 살아남기 위해 하루하루를 버텨낸다. 그러던 어느 날 밤, 북한 대사관의 일행들이 도움을 요청하며 문을 두드리는데… 목표는 하나, 모가디슈에서 탈출해야 한다!",
        poster : poster6,
        bg : bg6
    },
    {
        id : 6,
        title : '서울의 봄',
        year : 2023,
        age : '12세',
        runningTime : 141,
        point : 9.60,
        director : {
            name : '김성수',
            photo : director7
        },
        actor : [
            {
                id : 1,
                name : '황정민',
                char : '전두광 역',
                photo : actor1_7
            },
            {
                id : 2,
                name : '정우성',
                char : '이태신 역',
                photo : actor2_7
            },
            {
                id : 3,
                name : '이성민',
                char : '참모총장 정상호 역',
                photo : actor3_7
            }
        ],
        summary : "1979년 12월 12일, 수도 서울 군사반란 발생 그날, 대한민국의 운명이 바뀌었다 대한민국을 뒤흔든 10월 26일 이후, 서울에 새로운 바람이 불어온 것도 잠시 12월 12일, 보안사령관 전두광이 반란을 일으키고 군 내 사조직을 총동원하여 최전선의 전방부대까지 서울로 불러들인다. 권력에 눈이 먼 전두광의 반란군과 이에 맞선 수도경비사령관 이태신을 비롯한 진압군 사이, 일촉즉발의 9시간이 흘러가는데… 목숨을 건 두 세력의 팽팽한 대립 오늘 밤, 대한민국 수도에서 가장 치열한 전쟁이 펼쳐진다!",
        poster : poster7,
        bg : bg7
    },
    {
        id : 7,
        title : '남산의 부장들',
        year : 2020,
        age : '15세',
        runningTime : 114,
        point : 8.46,
        director : {
            name : '우민호',
            photo : director8
        },
        actor : [
            {
                id : 1,
                name : '이병헌',
                char : '김규평 역',
                photo : actor1_8
            },
            {
                id : 2,
                name : '이성민',
                char : '박통 역',
                photo : actor2_8
            },
            {
                id : 3,
                name : '곽도원',
                char : '박용각 역',
                photo : actor3_8
            }
        ],
        summary : "가리봉동 소탕작전 후 4년 뒤, 금천서 강력반은 베트남으로 도주한 용의자를 인도받아 오라는 미션을 받는다. 괴물형사 ‘마석도’(마동석)와 ‘전일만’(최귀화) 반장은 현지 용의자에게서 수상함을 느끼고, 그의 뒤에 무자비한 악행을 벌이는 ‘강해상’(손석구)이 있음을 알게 된다. ‘마석도’와 금천서 강력반은 한국과 베트남을 오가며 역대급 범죄를 저지르는 ‘강해상’을 본격적으로 쫓기 시작하는데... 나쁜 놈들 잡는 데 국경 없다! 통쾌하고 화끈한 범죄 소탕 작전이 다시 펼쳐진다!",
        poster : poster8,
        bg : bg8
    },
    {
        id : 8,
        title : '범죄도시3',
        year : 2023,
        age : '15세',
        runningTime : 105,
        point : 7.70,
        director : {
            name : '이상용',
            photo : director9
        },
        actor : [
            {
                id : 1,
                name : '마동석',
                char : '마석두 역',
                photo :actor1_9
            },
            {
                id : 2,
                name : '이준혁',
                char : '주성철 역',
                photo :actor2_9
            },
            {
                id : 3,
                name : '아오키 무네타카',
                char : '리키 역',
                photo :actor3_9
            }
        ],
        summary : "대체불가 괴물형사 마석도, 서울 광수대로 발탁! 베트남 납치 살해범 검거 후 7년 뒤, ‘마석도’(마동석)는 새로운 팀원들과 함께 살인사건을 조사한다. 사건 조사 중, ‘마석도’는 신종 마약 사건이 연루되었음을 알게 되고 수사를 확대한다. 한편, 마약 사건의 배후인 '주성철'(이준혁)은 계속해서 판을 키워가고 약을 유통하던 일본 조직과 '리키'(아오키 무네타카)까지 한국에 들어오며 사건의 규모는 점점 더 커져가는데... 나쁜 놈들 잡는 데 이유 없고 제한 없다. 커진 판도 시원하게 싹 쓸어버린다!",
        poster : poster9,
        bg : bg9
    },
    {
        id : 9,
        title : '탑건: 매버릭',
        year : 2022,
        age : '12세',
        runningTime : 130,
        point : 9.59,
        director : {
            name : '조셉 코신스키',
            photo : director10
        },
        actor : [
            {
                id : 1,
                name : '톰 크루즈',
                char : '매버릭 역',
                photo : actor1_10
            },
            {
                id : 2,
                name : '마일즈 텔러',
                char : '루스터 역',
                photo : actor2_10
            },
            {
                id : 3,
                name : '제니퍼 코넬리',
                char : '페니 역',
                photo : actor3_10
            }
        ],
        summary : "최고의 파일럿이자 전설적인 인물 매버릭(톰 크루즈)은 자신이 졸업한 훈련학교 교관으로 발탁된다. 그의 명성을 모르던 팀원들은 매버릭의 지시를 무시하지만 실전을 방불케 하는 상공 훈련에서 눈으로 봐도 믿기 힘든 전설적인 조종 실력에 모두가 압도된다. 매버릭의 지휘아래 견고한 팀워크를 쌓아가던 팀원들에게 국경을 뛰어넘는 위험한 임무가 주어지자 매버릭은 자신이 가르친 동료들과 함께 마지막이 될 지 모를 하늘 위 비행에 나서는데…",
        poster : poster10,
        bg : bg10
    },
    {
        id : 10,
        title : '이터널스',
        year : 2021,
        age : '12세',
        runningTime : 155,
        point : 6.42,
        director : {
            name : '클로이 자오',
            photo : director11
        },
        actor : [
            {
                id : 1,
                name : '안젤리나 졸리',
                char : '테나 역',
                photo : actor1_11
            },
            {
                id : 2,
                name : '마동석',
                char : '길가메시 역',
                photo : actor2_11
            },
            {
                id : 3,
                name : '리차드 매든',
                char : '이카리스 역',
                photo : actor3_11
            }
        ],
        summary : "마블 스튜디오의 <이터널스>는 수 천년에 걸쳐 그 모습을 드러내지 않고 살아온 불멸의 히어로들이 <어벤져스: 엔드게임> 이후 인류의 가장 오래된 적 '데비안츠'에 맞서기 위해 다시 힘을 합치면서 벌어지는 이야기",
        poster : poster11,
        bg : bg11
    },
    {
        id : 11,
        title : '반도',
        year : 2020,
        age : '15세',
        runningTime : 116,
        point : 7.17,
        director : {
            name : '연상호',
            photo : director12
        },
        actor : [
            {
                id : 1,
                name : '강동원',
                char : '한정석 역',
                photo : actor1_12
            },
            {
                id : 2,
                name : '이정현',
                char : '민정 역',
                photo : actor2_12
            }
        ],
        summary : "[전대미문의 재난 그 후 4년 폐허의 땅으로 다시 들어간다!] 4년 전, 나라 전체를 휩쓸어버린 전대미문의 재난에서 가까스로 탈출했던 ‘정석’(강동원). 바깥세상으로부터 철저히 고립된 반도에 다시 들어가야 하는 피할 수 없는 제안을 받는다. 제한 시간 내에 지정된 트럭을 확보해 반도를 빠져 나와야 하는 미션을 수행하던 중 인간성을 상실한 631부대와 4년 전보다 더욱 거세진 대규모 좀비 무리가 정석 일행을 습격한다. 절체절명의 순간, 폐허가 된 땅에서 살아남은 ‘민정’(이정현) 가족의 도움으로 위기를 가까스로 모면하고 이들과 함께 반도를 탈출할 수 있는 마지막 기회를 잡기로 한다. 되돌아온 자, 살아남은 자 그리고 미쳐버린 자 필사의 사투가 시작된다!",
        poster : poster12,
        bg : bg12
    },
    {
        id : 12,
        title : '테넷',
        year : 2020,
        age : '12세',
        runningTime : 150,
        point : 8.73,
        director : {
            name : '크리스토퍼 놀란',
            photo : director13
        },
        actor : [
            {
                id : 1,
                name : '존 데이비드 워싱턴',
                char : '주도자 역',
                photo : actor1_13
            },
            {
                id : 2,
                name : '로버트 패틴슨',
                char : '닐 역',
                photo : actor2_13
            },
            {
                id : 3,
                name : '엘리자베스 데비키',
                char : '캣 역',
                photo : actor3_13
            }
        ],
        summary : "시간의 흐름을 뒤집는 인버전을 통해 현재와 미래를 오가며 세상을 파괴하려는 사토르(케네스 브래너)를 막기 위해 투입된 작전의 주도자(존 데이비드 워싱턴). 인버전에 대한 정보를 가진 닐(로버트 패틴슨)과 미술품 감정사이자 사토르에 대한 복수심이 가득한 그의 아내 캣(엘리자베스 데비키)과 협력해 미래의 공격에 맞서 제3차 세계대전을 막아야 한다!",
        poster : poster13,
        bg : bg13
    },
    {
        id : 13,
        title : '살아있다',
        year : 2020,
        age : '15세',
        runningTime : 98,
        point : 6.89,
        director : {
            name : '조일형',
            photo : director14
        },
        actor : [
            {
                id : 1,
                name : '유아인',
                char : '오준우 역',
                photo : actor1_14
            },
            {
                id : 2,
                name : '박신혜',
                char : '김유빈 역',
                photo : actor2_14
            }
        ],
        summary : "원인불명 증세의 사람들의 공격에 통제 불능에 빠진 도시. 영문도 모른 채 잠에서 깬 ‘준우’(유아인)는 아무도 없는 집에 혼자 고립된 것을 알게 된다. 데이터, 와이파이, 문자, 전화 모든 것이 끊긴 채 고립된 상황. 연락이 두절된 가족에 이어 최소한의 식량마저 바닥이 나자 더 이상 버티기 힘들어진 ‘준우’. 하지만 그 순간 건너편 아파트에서 누군가 시그널을 보내온다. 또 다른 생존자 ‘유빈’(박신혜)이 아직 살아있음을 알게 된 ‘준우’는 함께 살아남기 위한 방법을 찾아 나서는데...! 꼭 살아남아야 한다.",
        poster : poster14,
        bg : bg14
    },
    {
        id : 14,
        title : '한산: 용의 출현',
        year : 2022,
        age : '12세',
        runningTime : 129,
        point : 8.53,
        director : {
            name : '김한민',
            photo : director15
        },
        actor : [
            {
                id : 1,
                name : '박해일',
                char : '이순신 역',
                photo : actor1_15
            },
            {
                id : 2,
                name : '변요한',
                char : '와키자타 야스하루 역',
                photo : actor2_15
            },
            {
                id : 3,
                name : '안성기',
                char : '어영담 역',
                photo : actor3_15
            }
        ],
        summary : "1592년 4월, 조선은 임진왜란 발발 후 단 15일 만에 왜군에 한양을 빼앗기며 절체절명의 위기에 놓인다. 조선을 단숨에 점령한 왜군은 명나라로 향하는 야망을 꿈꾸며 대규모 병역을 부산포로 집결시킨다. 한편, 이순신 장군은 연이은 전쟁의 패배와 선조마저 의주로 파천하며 수세에 몰린 상황에서도 조선을 구하기 위해 전술을 고민하며 출전을 준비한다. 하지만 앞선 전투에서 손상을 입은 거북선의 출정이 어려워지고, 거북선의 도면마저 왜군의 첩보에 의해 도난 당하게 되는데… 왜군은 연승에 힘입어 그 우세로 한산도 앞바다로 향하고, 이순신 장군은 조선의 운명을 가를 전투를 위해 필사의 전략을 준비한다. 1592년 여름, 음력 7월 8일 한산도 앞바다, 압도적인 승리가 필요한 조선의 운명을 건 지상 최고의 해전이 펼쳐진다.",
        poster : poster15,
        bg : bg15
    },
    {
        id : 15,
        title : '닥터 스트레인지: 대혼돈의 멀티버스',
        year : 2022,
        age : '12세',
        runningTime : 126,
        point : 7.74,
        director : {
            name : '샘 레이미',
            photo : director16
        },
        actor : [
            {
                id : 1,
                name : '베네딕트 컴버배치',
                char : '닥터 스트레인지 역',
                photo : actor1_16
            },
            {
                id : 2,
                name : '엘리자베스 올슨',
                char : '완다 막시모프 / 스칼렛 위치 역',
                photo : actor2_16
            }
        ],
        summary : "끝없이 균열되는 차원과 뒤엉킨 시공간의 멀티버스가 열리며 오랜 동료들, 그리고 차원을 넘어 들어온 새로운 존재들을 맞닥뜨리게 된 ‘닥터 스트레인지’. 대혼돈 속, 그는 예상치 못한 극한의 적과 맞서 싸워야만 하는데….",
        poster : poster16,
        bg : bg16
    },
    {
        id : 16,
        title : '헌트',
        year : 2022,
        age : '15세',
        runningTime : 125,
        point : 8.45,
        director : {
            name : '이정재',
            photo : director17
        },
        actor : [
            {
                id : 1,
                name : '이정재',
                char : '박평호 역',
                photo : actor1_17
            },
            {
                id : 2,
                name : '정우성',
                char : '김정도 역',
                photo : actor2_17
            },
            {
                id : 3,
                name : '전혜진',
                char : '방주경 역',
                photo : actor3_17
            }
        ],
        summary : "[조직 내 숨어든 스파이를 색출하라! ‘사냥꾼’이 될 것인가, ‘사냥감’이 될 것인가!] 망명을 신청한 북한 고위 관리를 통해 정보를 입수한 안기부 해외팀 ‘박평호’(이정재)와 국내팀 ‘김정도’(정우성)는 조직 내 숨어든 스파이 ‘동림’ 색출 작전을 시작한다. 스파이를 통해 일급 기밀사항들이 유출되어 위기를 맞게 되자 날 선 대립과 경쟁 속, 해외팀과 국내팀은 상대를 용의선상에 올려두고 조사에 박차를 가한다. 찾아내지 못하면 스파이로 지목이 될 위기의 상황, 서로를 향해 맹렬한 추적을 펼치던 ‘박평호’와 ‘김정도’는 감춰진 실체에 다가서게 되고, 마침내 ‘대한민국 1호 암살 작전’이라는 거대한 사건과 직면하게 되는데…… 하나의 목표, 두 개의 총구 의심과 경계 속 두 남자의 신념을 건 작전이 시작된다.",
        poster : poster17,
        bg : bg17
    },
    {
        id : 17,
        title : '블랙 위도우',
        year : 2021,
        age : '12세',
        runningTime : 134,
        point : 9.01,
        director : {
            name : '케이트 쇼트랜드',
            photo : director18
        },
        actor : [
            {
                id : 1,
                name : '스칼릿 조핸슨',
                char : '나타샤 로마노프 / 블랙 위도우 역',
                photo : actor1_18
            },
            {
                id : 2,
                name : '플로렌스 퓨',
                char : '옐레나 벨로바 역',
                photo : actor2_18
            },
            {
                id : 3,
                name : '레이첼 와이즈',
                char : '멜리나 보스토코프 역',
                photo : actor3_18
            }
        ],
        summary : "어벤져스의 히어로 블랙 위도우, ‘나타샤 로마노프’ (스칼렛 요한슨)는 자신의 과거와 연결된 레드룸의 거대한 음모와 실체를 깨닫게 된다. 상대의 능력을 복제하는 빌런 ‘태스크마스터’와 새로운 위도우들의 위협에 맞서 목숨을 건 반격을 시작하는 ‘나타샤’는 스파이로 활약했던 자신의 과거 뿐 아니라, 어벤져스가 되기 전 함께했던 동료들을 마주해야만 하는데… 폭발하는 리얼 액션 카타르시스! MCU의 새로운 시대를 시작할 첫 액션 블록버스터를 만끽하라!",
        poster : poster18,
        bg : bg18
    },
    {
        id : 18,
        title : '분노의 질주: 더 얼티메이트',
        year : 2021,
        age : '12세',
        runningTime : 142,
        point : 8.75,
        director : {
            name : '저스틴 린',
            photo : director19
        },
        actor : [
            {
                id : 1,
                name : '빈 디젤',
                char : '도미닉 토레토 역',
                photo : actor1_19
            },
            {
                id : 2,
                name : '존 시나',
                char : '제이콥 토레토 역',
                photo : actor2_19
            },
            {
                id : 3,
                name : '성 강',
                char : '한 역',
                photo : actor3_19
            }
        ],
        summary : "도미닉(빈 디젤)은 자신과 가장 가까웠던 형제 제이콥(존 시나)이 사이퍼(샤를리즈 테론)와 연합해 전 세계를 위기로 빠트릴 위험천만한 계획을 세운다는 사실을 알게 되고, 이를 막기 위해 다시 한 번 패밀리들을 소환한다. 가장 가까운 자가 한순간, 가장 위험한 적이 된 상황 도미닉과 패밀리들은 이에 반격할 놀라운 컴백과 작전을 세우고 지상도, 상공도, 국경도 경계가 없는 불가능한 대결이 시작되는데…",
        poster : poster19,
        bg : bg19
    },
    {
        id : 19,
        title : '베놈2: 렛 데어 비 카니지',
        year : 2021,
        age : '15세',
        runningTime : 97,
        point : 6.39,
        director : {
            name : '앤디 서키스',
            photo : director20
        },
        actor : [
            {
                id : 1,
                name : '톰 하디',
                char : '에디 브록 / 베놈 역',
                photo : actor1_20
            },
            {
                id : 2,
                name : '미셸 윌리엄스',
                char : '앤 웨잉 역',
                photo : actor2_20
            }
        ],
        summary : "‘베놈’과 완벽한 파트너가 된 ‘에디 브록’(톰 하디) 앞에 ‘클리터스 캐서디’(우디 해럴슨)가 ‘카니지’로 등장, 앞으로 닥칠 대혼돈의 세상을 예고한다. 대혼돈의 시대가 시작되고, 악을 악으로 처단할 것인가?",
        poster : poster20,
        bg : bg20
    }
]



function App() {

    const [yearCategory, setYearCategory] = useState('all');
    const [search, setSearch] = useState('');

    
    return (
        <div className="App">
            <Header setYearCategory={setYearCategory} setSearch={setSearch} search={search}/>
            <MovieList dummy={dummy} yearCategory={yearCategory} search={search} />
        </div>
    );
}

export default App;
