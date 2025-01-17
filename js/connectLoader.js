// 페이지 데이터를 로드하여 동적으로 HTML을 생성
function loadPageContent() {
  // URL에서 pageKey 가져오기
  const params = new URLSearchParams(window.location.search);
  const pageKey = params.get("connect"); // ?connect=connect01 이런 식으로 전달받음

  // 페이지 데이터 확인
  if (pageKey && pages[pageKey]) {
    const data = pages[pageKey];

    // 좌측 이미지 설정
    const leftImage = document.getElementById("leftImage");
    if (leftImage) leftImage.src = data.leftImage;

    // 소개란 텍스트 변경
    const introduceName = document.getElementById("introduceName");
    const introduceTitle = document.getElementById("introduceTitle");
    const introduceDetail = document.getElementById("introduceDetail");

    if (introduceName && introduceTitle && introduceDetail) {
      introduceName.textContent = data.introduceName;
      introduceTitle.textContent = data.introduceTitle;
      introduceDetail.innerHTML = data.introduceDetail;
    }

    // 그리드 레이어 생성
    const connectLargeGrid = document.querySelector(".connectLargeGrid");
    if (connectLargeGrid) {
      connectLargeGrid.innerHTML = ""; // 기존 내용 초기화

      // 데이터를 2개씩 묶어서 그리드 생성
      let currentSmallGrid = ""; // 현재 그리드 HTML
      data.connectElements.forEach((element, index) => {
        // 새로운 묶음의 시작
        if (index % 2 === 0) {
          currentSmallGrid += `<div class="connectSmallGrid">`;
        }

        // 각 요소 추가
        currentSmallGrid += `
          <div class="connectElement">
            <img src="${element.image}" class="elementImage" />
            <div class="elementText">${element.text}</div>
          </div>
        `;

        // 묶음의 끝
        if (index % 2 === 1 || index === data.connectElements.length - 1) {
          currentSmallGrid += `</div>`;
          connectLargeGrid.innerHTML += currentSmallGrid;
          currentSmallGrid = ""; // 다음 묶음을 위해 초기화
        }
      });
    }
  } else {
    console.error(
      "유효하지 않은 페이지 키이거나 페이지 데이터를 찾을 수 없습니다."
    );
  }
}

// 페이지 로드 시 실행
window.onload = loadPageContent;

// 페이지 데이터 객체
const pages = {
  connect01: {
    leftImage: "../img/connect/송세아/송세아.png",
    introduceName: "송세아의 애장품",
    introduceTitle: "목도리",
    introduceDetail: `
      치렁치렁한 것을 좋아하지 않지만 유일하게 모으고 갈아끼우는 악세사리<br />
      여행 가서 기념품으로 사오거나 기념일 시즌에 선물로 받으면서<br />
      겨울에는 목도리 도마뱀 마냥 다니는 중
    `,
    connectElements: [
      {
        image: "../img/connect/송세아/크롭1.png",
        text: "일본 가서 선물 받은 래번클로 목도리",
      },
      {
        image: "../img/connect/송세아/크롭2.png",
        text: "크리스마스 선물 목도리",
      },
      { image: "../img/connect/송세아/크롭3.png", text: "생일선물 목도리" },
      {
        image: "../img/connect/송세아/크롭4.png",
        text: "엄마가 춥다고 사준 목도리",
      },
      {
        image: "../img/connect/송세아/크롭5.png",
        text: "목도리인 척 하는 콘서트 슬로건",
      },
    ],
  },
  connect02: {
    leftImage: "../img/connect/김수아/김수아.png",
    introduceName: "김수아의 애장품",
    introduceTitle: "초록 곰인형",
    introduceDetail: `
      아버지가 사주신 인형
    `,
    connectElements: [
      {
        image: "../img/connect/김수아/크롭1.png",
        text: "초록색 곰인형",
      },
    ],
  },
  connect03: {
    leftImage: "../img/connect/최종윤/최종윤.png",
    introduceName: "최종윤의 애장품",
    introduceTitle: "필름",
    introduceDetail: `
      나만의 공간에 꼭 필요한 물건들.<br />
      시간이 지나도 변하지 않는 애장품들입니다.<br />
    `,
    connectElements: [
      { image: "../img/connect/최종윤/크롭1.png", text: "필름" },
      { image: "../img/connect/최종윤/크롭2.png", text: "컬러칩" },
      { image: "../img/connect/최종윤/크롭3.png", text: "카드엽서 앨범" },
      { image: "../img/connect/최종윤/크롭4.png", text: "팜플렛, 소책자 앨범" },
      { image: "../img/connect/최종윤/크롭5.png", text: "리플렛 앨범" },
    ],
  },
  connect04: {
    leftImage: "../img/connect/정재문/정재문.png",
    introduceName: "정재문의 애장품",
    introduceTitle: "앨범",
    introduceDetail: `
      물건에 큰 애정을 두는 편이 아니라 방안에 버리지 못할 것들이 무엇이 있을까 생각해 봤을 때, 생각난 물건들이다.
    `,
    connectElements: [
      {
        image: "../img/connect/정재문/크롭1.png",
        text: "<사자 피규어><br/>구석에 방치되어 있었지만 나의 어린시절 친구였던 사자피규어",
      },
      {
        image: "../img/connect/정재문/크롭2.png",
        text: "스텔라장 LP판><br/>선물 받았지만 기계가 없어 사용은 못해본 그렇기에 더 소중한 스텔라장 LP판",
      },
      {
        image: "../img/connect/정재문/크롭3.png",
        text: "<어린시절 앨범(외부)><br/>내 기억너머의 기억들을 보관 하며 내 인생을 담고 있는 앨범과 작품집들",
      },
      {
        image: "../img/connect/정재문/크롭4.png",
        text: "<작품 앨범(외부)><br/>내 기억너머의 기억들을 보관 하며 내 인생을 담고 있는 앨범과 작품집들",
      },
      {
        image: "../img/connect/정재문/크롭5.png",
        text: "<어린시절 앨범(내부)><br/>내 기억너머의 기억들을 보관 하며 내 인생을 담고 있는 앨범과 작품집들",
      },
      {
        image: "../img/connect/정재문/크롭6.png",
        text: "<작품 앨범(내부)><br/>내 기억너머의 기억들을 보관 하며 내 인생을 담고 있는 앨범과 작품집들",
      },
    ],
  },
  connect05: {
    leftImage: "../img/connect/최정이/최정이.png",
    introduceName: "최정이의 애장품",
    introduceTitle: "애착인형, 다이어리",
    introduceDetail: `
      선물받는 인형들과 일기장들
    `,
    connectElements: [
      { image: "../img/connect/최정이/크롭1.png", text: "인장(선인장 인형)" },
      {
        image: "../img/connect/최정이/크롭2.png",
        text: "메리크리스마스(강아지 인형)",
      },
      { image: "../img/connect/최정이/크롭3.png", text: "다이어리" },
    ],
  },
  connect06: {
    leftImage: "../img/connect/정병호/정병호.png",
    introduceName: "정병호의 애장품",
    introduceTitle: "카메라, 카라비너",
    introduceDetail: `
      나만의 공간에 꼭 필요한 물건들.<br />
      시간이 지나도 변하지 않는 애장품들입니다.<br />
    `,
    connectElements: [
      { image: "../img/connect/정병호/크롭1.png", text: "카메라" },
      { image: "../img/connect/정병호/크롭2.png", text: "카라비너" },
    ],
  },
  connect07: {
    leftImage: "../img/connect/임지우/임지우.png",
    introduceName: "임지우의 애장품",
    introduceTitle: "도자기",
    introduceDetail: `
      직접 만든 도자기와 여러 작가들의 작품
    `,
    connectElements: [
      {
        image: "../img/connect/임지우/크롭1.png",
        text: "<주전자 세트><br/>내가 만든 주전자와 최근에 수집한 티매트 그리고 엄마가 제작해준 티코스터",
      },
      {
        image: "../img/connect/임지우/크롭2.png",
        text: "<김민지 작가의 길쭉한 화병><br/>화장토로 표면에 그림을 남긴 화병. 졸업할 당시 서로 하나씩 작업을 교환하며 받음",
      },
      {
        image: "../img/connect/임지우/크롭3.png",
        text: "<박래기 작가의 망간 호><br/>자신의 작업과 물물교환하여 받았던 멋진 작품 ",
      },
      {
        image: "../img/connect/임지우/크롭4.png",
        text: "<굽잔><br/>최근에 만들었던 굽잔. 딱 하나 만들었는데 마음에 들어 더 만들기 위해 원형의 모델용으로 소장하고 있음.",
      },
      {
        image: "../img/connect/임지우/크롭5.png",
        text: "<김수연 작가의 잔><br/>차도구 전시를 하는 선배 작가의 전시를 보러 갔다가 구매했던 잔. 모양이 모두 달라 한참 고민하며 고름",
      },
      {
        image: "../img/connect/임지우/크롭6.png",
        text: "<박이름 작가의 인센스 홀더><br/>대학원에 처음 들어왔을 때 환영의 의미로 선물받은 인센스 홀더. 작게 달린 3개의 발이 궈여움. ",
      },
      {
        image: "../img/connect/임지우/크롭7.png",
        text: "<돌><br/>학교에서 박스로 발견된 정체 불명의 돌",
      },
      {
        image: "../img/connect/임지우/크롭8.png",
        text: "<이인화 작가의 이중기 큐브><br/>개인적으로 도자 작가중에 가장 닮고싶은 이인화 작가님의 작업. 개인전에 가서 수집한 작품.",
      },
    ],
  },
  connect08: {
    leftImage: "../img/connect/임영동/임영동.png",
    introduceName: "임영동의 애장품",
    introduceTitle: "카메라, 카라비너",
    introduceDetail: `
      군복이 가지고 있는 기능성과 본질 자체가 좋다. 지금은 기능을 하고 있지 않지만, 군복 자체가 함
      유하고 있는 언어들이 너무 아름답다. 정제되어있는 것이 아니라 오히려 본질 자체가 오히려 미
      니멀하게 다가왔다.<br />
      <br />
      전시나 뮤지엄 보러 갔을 때, 아트북샵을 가는 것을 좋아한다. 이런 저런 것들을 구경하다가 마음에 들면 사는 편.
    `,
    connectElements: [
      { image: "../img/connect/임영동/크롭1.png", text: "군복" },
      {
        image: "../img/connect/임영동/크롭2.png",
        text: "실제 베트남 참전 군복",
      },
      { image: "../img/connect/임영동/크롭3.png", text: "군복2" },
      { image: "../img/connect/임영동/크롭4.png", text: "군복3" },
      { image: "../img/connect/임영동/크롭5.png", text: "군복4" },
      {
        image: "../img/connect/임영동/크롭6.png",
        text: "Poul Kjaerholm 아트북",
      },
      { image: "../img/connect/임영동/크롭7.png", text: "Nam Jun Paik 아트북" },
      { image: "../img/connect/임영동/크롭8.png", text: "Perriand 아트북" },
      {
        image: "../img/connect/임영동/크롭9.png",
        text: "Martin Margiela 아트북",
      },
    ],
  },
  connect09: {
    leftImage: "../img/connect/김예섬/김예섬.png",
    introduceName: "김예섬의 애장품",
    introduceTitle: "스케치, 플래너",
    introduceDetail: `
      졸업전시를 준비하며 사용했던 공구와 스케치
    `,
    connectElements: [
      { image: "../img/connect/김예섬/크롭1.png", text: "플래너" },
      {
        image: "../img/connect/김예섬/크롭4.png",
        text: "스케치",
      },
      { image: "../img/connect/김예섬/크롭3.png", text: "드로잉북" },
      { image: "../img/connect/김예섬/크롭2.png", text: "손선풍기" },
    ],
  },
  connect10: {
    leftImage: "../img/connect/박소연/박소연.png",
    introduceName: "박소연의 애장품",
    introduceTitle: "쥐인형, 폐의약품, 이빨석고",
    introduceDetail: `
      나만의 공간에 꼭 필요한 물건들.<br />
      시간이 지나도 변하지 않는 애장품들입니다.<br />
    `,
    connectElements: [
      {
        image: "../img/connect/박소연/크롭1.png",
        text: "홍콩 이케아에서 산 쥐 인형<br />3개였는데 하나는 강아지가 물어 뜯음",
      },
      {
        image: "../img/connect/박소연/크롭2.png",
        text: "폐의약품<br />버릴려고 모았다가 생각보다 예뻐서 안버리는 중",
      },
      {
        image: "../img/connect/박소연/크롭3.png",
        text: "교정 이 석고<br />2번의 교정을 하며 떴던 석고 ",
      },
    ],
  },
  connect11: {
    leftImage: "../img/connect/김진경/김진경.png",
    introduceName: "김진경의 애장품",
    introduceTitle: "인형, 피규어",
    introduceDetail: `
      여행지나 소중한 사람들과 함께 놀러갔을 때 샀던 물건들.
즉흥적으로 구매한 것이 많지만, 그만큼 모든 소장품들이 기분이 행복했을 때 구매했던 것들이라 구매에 대한 후회는 없을 정도로 구매 만족도가 높다.
    `,
    connectElements: [
      { image: "../img/connect/김진경/크롭1.png", text: "감정 문어인형" },
      { image: "../img/connect/김진경/크롭2.png", text: "크툴루 인형" },
      { image: "../img/connect/김진경/크롭3.png", text: "스타스폰 인형" },
      {
        image: "../img/connect/김진경/크롭4.png",
        text: "언제오려나 피규어 시리즈",
      },
    ],
  },
  connect12: {
    leftImage: "../img/connect/신한영/신한영.png",
    introduceName: "신한영의 애장품",
    introduceTitle: "오디오 인터페이스",
    introduceDetail: `
      내 생에 첫 녹음장비. 애정하는 내 친구다.
    `,
    connectElements: [
      { image: "../img/connect/신한영/크롭1.png", text: "헤드셋" },
      { image: "../img/connect/신한영/크롭2.png", text: "마이크" },
      { image: "../img/connect/신한영/크롭3.png", text: "오디오 인터페이스" },
      { image: "../img/connect/신한영/크롭4.png", text: "케이블1" },
      { image: "../img/connect/신한영/크롭5.png", text: "케이블2" },
    ],
  },
  connect13: {
    leftImage: "../img/connect/류가연/류가연.png",
    introduceName: "류가연의 애장품",
    introduceTitle: "미술용품",
    introduceDetail: `
      무언가를 잘 모아두지 않는 성격이지만 미술용품은 하나 사는데 돈이 많이 들어, ’언젠가 쓸 일이 있지 않을까?‘하는 마음에 버리지 않았더니 그것들이 모여 저의 소장품 또는 애장품이 된 것 같습니다. 입시미술부터 시작해, 대학 들어와서 타과 실기수업을 들으면서 샀던 것들입니다.  문득 꺼내보면 그 재료들을 썼던 때가 떠오르면서 얼른 작업실을 구하고 싶다는 욕망은 한 없이 커지고..
    `,
    connectElements: [
      { image: "../img/connect/류가연/크롭1.png", text: "마카" },
      { image: "../img/connect/류가연/크롭2.png", text: "타카" },
      { image: "../img/connect/류가연/크롭3.png", text: "파레트" },
      { image: "../img/connect/류가연/크롭4.png", text: "지우개" },
      { image: "../img/connect/류가연/크롭5.png", text: "연필" },
      { image: "../img/connect/류가연/크롭6.png", text: "붓 파우치" },
      { image: "../img/connect/류가연/크롭7.png", text: "흰 물감" },
      { image: "../img/connect/류가연/크롭8.png", text: "걸레" },
      {
        image: "../img/connect/류가연/크롭9.png",
        text: "정체를 알 수 없는 물건1",
      },
      {
        image: "../img/connect/류가연/크롭10.png",
        text: "정체를 알 수 없는 물건2",
      },
      { image: "../img/connect/류가연/크롭11.png", text: "먹물" },
      { image: "../img/connect/류가연/크롭12.png", text: "빗자루" },
    ],
  },
  connect14: {
    leftImage: "../img/connect/이상헌/이상헌.png",
    introduceName: "이상헌의 애장품",
    introduceTitle: "여행 기념품",
    introduceDetail: `
      작고 아기자기한 물건들
    `,
    connectElements: [
      {
        image: "../img/connect/이상헌/크롭1.png",
        text: "여행때마다 모았던 조개껍질들",
      },
      {
        image: "../img/connect/이상헌/크롭2.png",
        text: "친구와 함께 모은 병뚜껑",
      },
      {
        image: "../img/connect/이상헌/크롭3.png",
        text: "친한 친구가 생일 때 꽂아줬던 초",
      },
      {
        image: "../img/connect/이상헌/크롭4.png",
        text: "친구가 선물로 준 공주세트 귀걸이",
      },
      { image: "../img/connect/이상헌/크롭5.png", text: "인센스 홀더" },
      { image: "../img/connect/이상헌/크롭6.png", text: "홍대에서 산 브로치" },
      {
        image: "../img/connect/이상헌/크롭7.png",
        text: "1. 탬버린즈에서 상품과 같이 온 구멍 뚫는 도구<br />2. 홍대 앞에서 발견한 수상한 가게에서 산 옷핀",
      },
    ],
  },
};
