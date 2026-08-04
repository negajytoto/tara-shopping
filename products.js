// 상품 데이터는 이 파일에서 관리합니다. 새 상품을 추가하려면 배열 끝에 객체를 하나씩 추가하면 됩니다.
const products = [
  {
    id: 'high-banner',
    name: '실내용 하이배너',
    category: '배너',
    shortDescription: '전시와 행사장에 바로 설치 가능한 실내용 배너입니다.',
    description: '실내용 하이배너는 행사장과 전시실에서 브랜드 메시지를 가장 먼저 전달하는 제품입니다. 선명한 컬러와 안정적인 구조로 오프라인 홍보 효과를 높여줍니다.',
    basePrice: 42000,
    thumbnail: 'images/print-card.jpg',
    galleryImages: ['images/print-card.jpg', 'images/print-poster.jpg', 'images/print-book.jpg'],
    sizes: [
      { label: '600x1800mm', value: '600x1800mm', additionalCost: 0 },
      { label: '800x1800mm', value: '800x1800mm', additionalCost: 8000 },
      { label: '900x2000mm', value: '900x2000mm', additionalCost: 14000 }
    ],
    materials: [
      { label: 'PET', value: 'pet', additionalCost: 6000 },
      { label: '패브릭', value: 'fabric', additionalCost: 9000 },
      { label: '합성지', value: 'synthetic', additionalCost: 4000 }
    ],
    printTypes: [
      { label: '단면', value: 'single', additionalCost: 0 },
      { label: '양면', value: 'double', additionalCost: 6500 }
    ],
    finishingOptions: [
      { label: '기본 재단', value: 'basic', additionalCost: 0 },
      { label: '사방 타공', value: 'punch', additionalCost: 1500 },
      { label: '봉미싱', value: 'binding', additionalCost: 2500 }
    ],
    frameOptions: [
      { label: '거치대 포함', value: 'included', additionalCost: 4000 },
      { label: '거치대 미포함', value: 'excluded', additionalCost: 0 }
    ],
    coatingOptions: [
      { label: '없음', value: 'none', additionalCost: 0 },
      { label: '무광 코팅', value: 'matte', additionalCost: 2000 },
      { label: '유광 코팅', value: 'glossy', additionalCost: 3000 }
    ],
    productionDays: '3영업일 내',
    featured: true,
    active: true,
    highlights: ['실내 전시 시 자연스럽게 보이는 구조', '소재와 규격 조합이 자유롭습니다', '빠른 제작과 안정적인 배송이 가능합니다']
  },
  {
    id: 'x-banner',
    name: 'X배너',
    category: '배너',
    shortDescription: '매장 입구와 이벤트 부스에 빠르게 설치하는 X배너입니다.',
    description: 'X배너는 이동성이 뛰어나고 설치가 쉬워 오프라인 프로모션에 적합합니다. 분실이 잦지 않도록 거치대까지 함께 구성할 수 있습니다.',
    basePrice: 30000,
    thumbnail: 'images/print-poster.jpg',
    galleryImages: ['images/print-poster.jpg', 'images/print-card.jpg', 'images/print-book.jpg'],
    sizes: [
      { label: '600x1500mm', value: '600x1500mm', additionalCost: 0 },
      { label: '800x1800mm', value: '800x1800mm', additionalCost: 5000 },
      { label: '1000x2000mm', value: '1000x2000mm', additionalCost: 12000 }
    ],
    materials: [
      { label: 'PET', value: 'pet', additionalCost: 4000 },
      { label: '합성지', value: 'synthetic', additionalCost: 2500 },
      { label: '패브릭', value: 'fabric', additionalCost: 6500 }
    ],
    printTypes: [
      { label: '단면', value: 'single', additionalCost: 0 },
      { label: '양면', value: 'double', additionalCost: 4500 }
    ],
    finishingOptions: [
      { label: '기본 재단', value: 'basic', additionalCost: 0 },
      { label: '사방 타공', value: 'punch', additionalCost: 1200 },
      { label: '봉미싱', value: 'binding', additionalCost: 1800 }
    ],
    frameOptions: [
      { label: '거치대 포함', value: 'included', additionalCost: 3000 },
      { label: '거치대 미포함', value: 'excluded', additionalCost: 0 }
    ],
    coatingOptions: [
      { label: '없음', value: 'none', additionalCost: 0 },
      { label: '무광 코팅', value: 'matte', additionalCost: 1800 },
      { label: '유광 코팅', value: 'glossy', additionalCost: 2500 }
    ],
    productionDays: '2영업일 내',
    featured: true,
    active: true,
    highlights: ['설치가 빨라 행사 전날에도 활용 가능합니다', '거치대와 함께 배송되어 바로 세팅이 가능합니다', '매장 입구와 부스에서 시선을 빠르게 끌어줍니다']
  },
  {
    id: 'roll-up-banner',
    name: '롤업배너',
    category: '배너',
    shortDescription: '전시 부스와 세미나장에 적합한 세련된 롤업 배너입니다.',
    description: '롤업배너는 가볍고 깔끔하게 배치할 수 있어 세미나, 박람회, 팝업 스토어에 자주 활용됩니다. 보관과 이동이 간편합니다.',
    basePrice: 36000,
    thumbnail: 'images/print-book.jpg',
    galleryImages: ['images/print-book.jpg', 'images/print-card.jpg', 'images/print-poster.jpg'],
    sizes: [
      { label: '600x1600mm', value: '600x1600mm', additionalCost: 0 },
      { label: '800x1800mm', value: '800x1800mm', additionalCost: 6000 },
      { label: '1000x2000mm', value: '1000x2000mm', additionalCost: 11000 }
    ],
    materials: [
      { label: 'PET', value: 'pet', additionalCost: 5000 },
      { label: '합성지', value: 'synthetic', additionalCost: 3000 },
      { label: '패브릭', value: 'fabric', additionalCost: 7000 }
    ],
    printTypes: [
      { label: '단면', value: 'single', additionalCost: 0 },
      { label: '양면', value: 'double', additionalCost: 5000 }
    ],
    finishingOptions: [
      { label: '기본 재단', value: 'basic', additionalCost: 0 },
      { label: '사방 타공', value: 'punch', additionalCost: 1000 },
      { label: '봉미싱', value: 'binding', additionalCost: 2000 }
    ],
    frameOptions: [
      { label: '거치대 포함', value: 'included', additionalCost: 3500 },
      { label: '거치대 미포함', value: 'excluded', additionalCost: 0 }
    ],
    coatingOptions: [
      { label: '없음', value: 'none', additionalCost: 0 },
      { label: '무광 코팅', value: 'matte', additionalCost: 1800 },
      { label: '유광 코팅', value: 'glossy', additionalCost: 2600 }
    ],
    productionDays: '2영업일 내',
    featured: true,
    active: true,
    highlights: ['이동이 쉬워 행사장 간 이동이 편리합니다', '요약형 메시지 전달에 적합합니다', '디자인 수정이 비교적 쉽습니다']
  },
  {
    id: 'hanging-banner',
    name: '현수막',
    category: '현수막',
    shortDescription: '야외 홍보와 거리행사에 최적화된 현수막입니다.',
    description: '현수막은 넓은 공간에 인지도를 높이기 좋은 제품입니다. 가벼운 재질과 넉넉한 인쇄 폭으로 야외 홍보에 잘 어울립니다.',
    basePrice: 28000,
    thumbnail: 'images/print-card.jpg',
    galleryImages: ['images/print-card.jpg', 'images/print-poster.jpg', 'images/print-book.jpg'],
    sizes: [
      { label: '800x3000mm', value: '800x3000mm', additionalCost: 0 },
      { label: '1000x4000mm', value: '1000x4000mm', additionalCost: 6000 },
      { label: '1200x5000mm', value: '1200x5000mm', additionalCost: 12000 }
    ],
    materials: [
      { label: '합성지', value: 'synthetic', additionalCost: 3000 },
      { label: 'PET', value: 'pet', additionalCost: 5000 },
      { label: '패브릭', value: 'fabric', additionalCost: 7000 }
    ],
    printTypes: [
      { label: '단면', value: 'single', additionalCost: 0 },
      { label: '양면', value: 'double', additionalCost: 4000 }
    ],
    finishingOptions: [
      { label: '기본 재단', value: 'basic', additionalCost: 0 },
      { label: '사방 타공', value: 'punch', additionalCost: 800 },
      { label: '봉미싱', value: 'binding', additionalCost: 1500 }
    ],
    frameOptions: [
      { label: '거치대 포함', value: 'included', additionalCost: 2500 },
      { label: '거치대 미포함', value: 'excluded', additionalCost: 0 }
    ],
    coatingOptions: [
      { label: '없음', value: 'none', additionalCost: 0 },
      { label: '무광 코팅', value: 'matte', additionalCost: 1500 },
      { label: '유광 코팅', value: 'glossy', additionalCost: 2200 }
    ],
    productionDays: '3영업일 내',
    featured: false,
    active: true,
    highlights: ['거리행사에서 효과적인 가시성을 제공합니다', '대형 사이즈도 빠르게 제작 가능합니다', '반복 설치에 적합한 내구성을 갖췄습니다']
  },
  {
    id: 'poster',
    name: '포스터',
    category: '포스터',
    shortDescription: '전시와 안내용으로 선명하게 인쇄하는 포스터입니다.',
    description: '포스터는 공간의 분위기를 살리며 브랜드 정보나 행사 안내를 깔끔하게 전달하는 제품입니다. 세부 이미지 재현력이 높습니다.',
    basePrice: 24000,
    thumbnail: 'images/print-poster.jpg',
    galleryImages: ['images/print-poster.jpg', 'images/print-card.jpg', 'images/print-book.jpg'],
    sizes: [
      { label: 'A3', value: 'a3', additionalCost: 0 },
      { label: 'A2', value: 'a2', additionalCost: 4000 },
      { label: 'A1', value: 'a1', additionalCost: 9000 }
    ],
    materials: [
      { label: '합성지', value: 'synthetic', additionalCost: 2000 },
      { label: 'PET', value: 'pet', additionalCost: 3500 },
      { label: '패브릭', value: 'fabric', additionalCost: 5000 }
    ],
    printTypes: [
      { label: '단면', value: 'single', additionalCost: 0 },
      { label: '양면', value: 'double', additionalCost: 3500 }
    ],
    finishingOptions: [
      { label: '기본 재단', value: 'basic', additionalCost: 0 },
      { label: '사방 타공', value: 'punch', additionalCost: 1000 },
      { label: '봉미싱', value: 'binding', additionalCost: 1600 }
    ],
    frameOptions: [
      { label: '거치대 포함', value: 'included', additionalCost: 2000 },
      { label: '거치대 미포함', value: 'excluded', additionalCost: 0 }
    ],
    coatingOptions: [
      { label: '없음', value: 'none', additionalCost: 0 },
      { label: '무광 코팅', value: 'matte', additionalCost: 1200 },
      { label: '유광 코팅', value: 'glossy', additionalCost: 1800 }
    ],
    productionDays: '3영업일 내',
    featured: false,
    active: true,
    highlights: ['색 재현력이 좋고 사진 이미지를 자연스럽게 표현합니다', '전시 안내와 홍보용으로 활용도가 높습니다', '원하시면 액자형으로도 구성할 수 있습니다']
  },
  {
    id: 'synthetic-print',
    name: '합성지 출력',
    category: '인쇄',
    shortDescription: '경제적이면서도 깔끔한 합성지 인쇄 솔루션입니다.',
    description: '합성지 출력은 단기 홍보물과 실사용성 높은 제작물에 적합한 제품입니다. 가볍고 빠르게 제작 가능한 점이 장점입니다.',
    basePrice: 22000,
    thumbnail: 'images/print-book.jpg',
    galleryImages: ['images/print-book.jpg', 'images/print-card.jpg', 'images/print-poster.jpg'],
    sizes: [
      { label: 'A4', value: 'a4', additionalCost: 0 },
      { label: 'A3', value: 'a3', additionalCost: 3000 },
      { label: 'A2', value: 'a2', additionalCost: 6000 }
    ],
    materials: [
      { label: '합성지', value: 'synthetic', additionalCost: 2000 },
      { label: 'PET', value: 'pet', additionalCost: 3500 }
    ],
    printTypes: [
      { label: '단면', value: 'single', additionalCost: 0 },
      { label: '양면', value: 'double', additionalCost: 3000 }
    ],
    finishingOptions: [
      { label: '기본 재단', value: 'basic', additionalCost: 0 },
      { label: '사방 타공', value: 'punch', additionalCost: 700 },
      { label: '봉미싱', value: 'binding', additionalCost: 1200 }
    ],
    frameOptions: [
      { label: '거치대 포함', value: 'included', additionalCost: 1500 },
      { label: '거치대 미포함', value: 'excluded', additionalCost: 0 }
    ],
    coatingOptions: [
      { label: '없음', value: 'none', additionalCost: 0 },
      { label: '무광 코팅', value: 'matte', additionalCost: 1000 },
      { label: '유광 코팅', value: 'glossy', additionalCost: 1600 }
    ],
    productionDays: '2영업일 내',
    featured: false,
    active: true,
    highlights: ['예산 대비 효율이 좋고 제작이 빠릅니다', '단기 이벤트 홍보물에 많이 사용합니다', '가볍고 다루기 쉬워 관리가 편합니다']
  },
  {
    id: 'sheet-print',
    name: '시트지 출력',
    category: '인쇄',
    shortDescription: '매장 안내와 제품 설명에 쓰기 좋은 시트지 인쇄입니다.',
    description: '시트지 출력은 매장 진열, 안내 표지, 제품 설명용으로 활용도가 높습니다. 깔끔한 인쇄 감과 관리 편의성이 장점입니다.',
    basePrice: 19000,
    thumbnail: 'images/print-card.jpg',
    galleryImages: ['images/print-card.jpg', 'images/print-poster.jpg', 'images/print-book.jpg'],
    sizes: [
      { label: 'A4', value: 'a4', additionalCost: 0 },
      { label: 'A3', value: 'a3', additionalCost: 2500 },
      { label: 'A2', value: 'a2', additionalCost: 5000 }
    ],
    materials: [
      { label: '합성지', value: 'synthetic', additionalCost: 1800 },
      { label: 'PET', value: 'pet', additionalCost: 3200 },
      { label: '패브릭', value: 'fabric', additionalCost: 4800 }
    ],
    printTypes: [
      { label: '단면', value: 'single', additionalCost: 0 },
      { label: '양면', value: 'double', additionalCost: 2800 }
    ],
    finishingOptions: [
      { label: '기본 재단', value: 'basic', additionalCost: 0 },
      { label: '사방 타공', value: 'punch', additionalCost: 600 },
      { label: '봉미싱', value: 'binding', additionalCost: 1100 }
    ],
    frameOptions: [
      { label: '거치대 포함', value: 'included', additionalCost: 1200 },
      { label: '거치대 미포함', value: 'excluded', additionalCost: 0 }
    ],
    coatingOptions: [
      { label: '없음', value: 'none', additionalCost: 0 },
      { label: '무광 코팅', value: 'matte', additionalCost: 900 },
      { label: '유광 코팅', value: 'glossy', additionalCost: 1500 }
    ],
    productionDays: '2영업일 내',
    featured: false,
    active: true,
    highlights: ['매장 안내와 상품 설명에 바로 활용할 수 있습니다', '세련된 마감으로 진열 효과를 높여줍니다', '개별 수량도 부담 없이 주문할 수 있습니다']
  },
  {
    id: 'fabric-print',
    name: '패브릭 출력',
    category: '인쇄',
    shortDescription: '프리미엄 분위기를 살리는 패브릭 인쇄입니다.',
    description: '패브릭 출력은 고급스러운 분위기를 필요한 브랜드 부스나 전시 공간에 잘 어울립니다. 부드러운 질감을 살려 디테일한 표현이 가능합니다.',
    basePrice: 26000,
    thumbnail: 'images/print-book.jpg',
    galleryImages: ['images/print-book.jpg', 'images/print-card.jpg', 'images/print-poster.jpg'],
    sizes: [
      { label: 'A4', value: 'a4', additionalCost: 0 },
      { label: 'A3', value: 'a3', additionalCost: 3500 },
      { label: 'A2', value: 'a2', additionalCost: 7000 }
    ],
    materials: [
      { label: '패브릭', value: 'fabric', additionalCost: 5000 },
      { label: 'PET', value: 'pet', additionalCost: 3500 },
      { label: '합성지', value: 'synthetic', additionalCost: 2500 }
    ],
    printTypes: [
      { label: '단면', value: 'single', additionalCost: 0 },
      { label: '양면', value: 'double', additionalCost: 4000 }
    ],
    finishingOptions: [
      { label: '기본 재단', value: 'basic', additionalCost: 0 },
      { label: '사방 타공', value: 'punch', additionalCost: 900 },
      { label: '봉미싱', value: 'binding', additionalCost: 1400 }
    ],
    frameOptions: [
      { label: '거치대 포함', value: 'included', additionalCost: 1800 },
      { label: '거치대 미포함', value: 'excluded', additionalCost: 0 }
    ],
    coatingOptions: [
      { label: '없음', value: 'none', additionalCost: 0 },
      { label: '무광 코팅', value: 'matte', additionalCost: 1100 },
      { label: '유광 코팅', value: 'glossy', additionalCost: 1700 }
    ],
    productionDays: '4영업일 내',
    featured: false,
    active: true,
    highlights: ['고급스러운 분위기와 부드러운 질감을 강조합니다', '브랜드 부스나 전시 공간에 잘 어울립니다', '디자인 완성도가 높은 제품입니다']
  }
];
