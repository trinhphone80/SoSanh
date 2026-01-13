
import { ComparisonPoint, ScoreData, StrategyStage, TechnicalDetail, CostAnalysis, InfraCard, InvestmentRow, VideoItem, GuideArticle } from './types';

export const FINANCIAL_DATA: ComparisonPoint[] = [
  {
    criteria: "Mô hình giá",
    autoNuoi: "Trọn gói (All-in-one).",
    minSoftware: "Tách lẻ (Hệ sinh thái Max).",
    remark: "AutoNuoi dễ mua hơn, Min tốn kém nếu mua đủ bộ.",
    isMinBetter: false,
    status: 'info'
  },
  {
    criteria: "Giá Vĩnh Viễn",
    autoNuoi: "~3.000.000đ - 4.000.000đ.",
    minSoftware: "~7.000.000đ (MaxCare & MaxPhoneFarm).",
    remark: "MinSoftware đắt gấp đôi đầu tư ban đầu.",
    isMinBetter: false,
    status: 'warning'
  },
  {
    criteria: "Phí duy trì/Update",
    autoNuoi: "Miễn phí update, fix lỗi đôi khi chậm.",
    minSoftware: "Miễn phí trọn đời, fix lỗi cực nhanh.",
    remark: "MinSoftware hậu mãi tốt hơn.",
    isMinBetter: true,
    status: 'success'
  }
];

export const TECHNICAL_DETAILS: TechnicalDetail[] = [
  {
    feature: "Browser Fingerprinting",
    description: "Can thiệp WebGL, Canvas, AudioContext, Fonts, Timezone.",
    impact: "Giảm tỉ lệ quét nick xuống dưới 5%.",
    level: "High"
  },
  {
    feature: "Hành vi Human-like",
    description: "Chuột di chuyển theo đường cong Bezier, tốc độ gõ phím ngẫu nhiên.",
    impact: "Facebook không nhận diện được automation.",
    level: "High"
  },
  {
    feature: "Cơ chế đa luồng",
    description: "Tối ưu hóa tài nguyên CPU/RAM cho hàng trăm cửa sổ.",
    impact: "Chạy mượt mà trên các dòng máy Workstation.",
    level: "Medium"
  },
  {
    feature: "API Giải Checkpoint",
    description: "Tích hợp AnyCaptcha, 2Captcha, giải 282/956 tự động.",
    impact: "Cứu nick tự động ngay khi gặp sự cố.",
    level: "High"
  }
];

export const COST_ANALYSIS: CostAnalysis[] = [
  {
    item: "Chi phí Proxy (IP)",
    type: "Vận hành",
    autoNuoiEst: "500k - 1tr/tháng",
    minSoftwareEst: "500k - 1.5tr/tháng",
    importance: "Cao"
  },
  {
    item: "Mua Nick (Via/Clone)",
    type: "Phát sinh",
    autoNuoiEst: "2tr - 5tr/tháng (do hay chết nick)",
    minSoftwareEst: "500k - 1tr/tháng (nick sống bền)",
    importance: "Cao"
  },
  {
    item: "Dàn Box Phone (Tùy chọn)",
    type: "Phát sinh",
    autoNuoiEst: "Không khuyến khích",
    minSoftwareEst: "15tr - 50tr (Đầu tư 1 lần)",
    importance: "Trung bình"
  },
  {
    item: "Lương nhân sự vận hành",
    type: "Vận hành",
    autoNuoiEst: "Tốn 1.5 nhân sự (do gỡ nick nhiều)",
    minSoftwareEst: "Tốn 0.5 nhân sự (do tự động hóa)",
    importance: "Cao"
  }
];

export const TECHNICAL_DATA: ComparisonPoint[] = [
  {
    criteria: "Cơ chế giả lập",
    autoNuoi: "Cơ bản (Chrome Driver).",
    minSoftware: "Deep Fingerprint sâu vào nhân trình duyệt.",
    remark: "Min thắng tuyệt đối về độ an toàn.",
    isMinBetter: true,
    status: 'success'
  },
  {
    criteria: "Vượt Checkpoint",
    autoNuoi: "Yếu, đa số giải tay.",
    minSoftware: "Auto 282, 956, đổi pass, mở khóa mail.",
    remark: "Min tiết kiệm 80% thời gian xử lý sự cố.",
    isMinBetter: true,
    status: 'success'
  },
  {
    criteria: "Độ bền nick (Trust Level)",
    autoNuoi: "Trung bình (Dễ bay màu khi FB bão).",
    minSoftware: "Rất cao (Sống khỏe qua nhiều đợt quét).",
    remark: "Ngành Y tế cần nick 'già' để seeding uy tín.",
    isMinBetter: true,
    status: 'success'
  }
];

export const MARKETING_DATA: ComparisonPoint[] = [
  {
    criteria: "Seeding Hội thoại",
    autoNuoi: "Đơn luồng, cmt rời rạc.",
    minSoftware: "Đa luồng, kịch bản hỏi-đáp thông minh.",
    remark: "Tạo niềm tin khách hàng cực tốt.",
    isMinBetter: true,
    status: 'success'
  },
  {
    criteria: "Spin Content",
    autoNuoi: "Cơ bản {a|b|c}.",
    minSoftware: "Nested Spin (Spin lồng nhau) cực sâu.",
    remark: "Tránh spam tuyệt đối cho bài viết.",
    isMinBetter: true,
    status: 'info'
  }
];

export const STRATEGY_STAGES: StrategyStage[] = [
  {
    title: "Giai đoạn 1: Setup & Trust",
    duration: "1 Tuần đầu",
    steps: [
      "Nhập 200-500 nick Via/Clone cứng.",
      "Cấu hình kịch bản: Sáng đọc báo, lướt Watch, trưa like dạo, chiều đăng bài.",
      "Giả lập hành vi như người dùng thật."
    ],
    goal: "Nuôi nick sống khỏe, Facebook tin đây là người thật."
  },
  {
    title: "Giai đoạn 2: Seeding & Khai thác",
    duration: "Hàng ngày",
    steps: [
      "Viết bài về máy đo huyết áp/tiểu đường lên Page chính.",
      "Ra lệnh 50 nick vào comment đánh giá: 'Sản phẩm tốt', 'Bảo hành thế nào?'.",
      "Nhân sự Sale trực comment chốt đơn."
    ],
    goal: "Tạo hiệu ứng đám đông, xây dựng uy tín thương hiệu."
  },
  {
    title: "Giai đoạn 3: Kéo khách từ Group",
    duration: "Mở rộng",
    steps: [
      "Nick tham gia các hội nhóm 'Người bệnh tiểu đường'.",
      "Comment khéo léo giới thiệu thương hiệu Đức Phương khi có người hỏi.",
      "Tuyệt đối không spam link thô thiển."
    ],
    goal: "Tiếp cận khách hàng mục tiêu một cách tự nhiên."
  }
];

export const INFRA_DATA: InfraCard[] = [
  {
    title: "Tài khoản Facebook (Via/Clone)",
    items: [
      { label: "VIA Cổ (Khuyên dùng)", description: "Nick thật, tạo lâu năm, độ uy tín cực cao.", price: "30k - 100k/nick", color: "text-emerald-600 dark:text-emerald-400" },
      { label: "CLONE (Nick ảo)", description: "Nick tạo mới hàng loạt, dễ chết, cần nuôi kỹ.", price: "2k - 10k/nick", color: "text-amber-600 dark:text-amber-400" },
      { label: "Nguồn mua", description: "taphoammo.net, muabanhack.com, hoặc Telegram uy tín.", color: "text-blue-600 dark:text-blue-400" }
    ]
  },
  {
    title: "Giải pháp Proxy/IP",
    items: [
      { label: "Proxy Dân cư Xoay", description: "IP giống người dùng thật, an toàn nhất.", price: "300k - 600k/tháng", color: "text-emerald-600 dark:text-emerald-400" },
      { label: "Dcom 4G", description: "Phù hợp quy mô nhỏ < 200 nick, tự động đổi IP.", price: "1tr - 2tr (Đầu tư dàn)", color: "text-amber-600 dark:text-amber-400" },
      { label: "Proxy Tĩnh IPv4", description: "1 nick dùng 1 IP riêng, cực bền nick.", price: "20k - 50k/IP/tháng", color: "text-rose-600 dark:text-rose-400" }
    ]
  },
  {
    title: "Chi phí Phát sinh khác",
    items: [
      { label: "Thuê Sim/OTP", description: "Giải khóa 282, 956 khi FB yêu cầu.", price: "1k - 2k/lần", color: "text-rose-600 dark:text-rose-400" },
      { label: "Captcha", description: "Giải mã hình ảnh tự động cho bot.", price: "~100k/quý", color: "text-amber-600 dark:text-amber-400" },
      { label: "VPS/Server", description: "Nếu treo máy 24/7 không muốn dùng PC cá nhân.", price: "200k - 500k/tháng", color: "text-blue-600 dark:text-blue-400" }
    ]
  }
];

export const INITIAL_INVESTMENT: InvestmentRow[] = [
  { item: "Phần mềm MinSoftware (Trọn đời)", unitPrice: "7.000.000đ", quantity: "1", total: "7.000.000đ", isImportant: true },
  { item: "Tài khoản Facebook (VIA Cổ)", unitPrice: "50.000đ", quantity: "200", total: "10.000.000đ", isImportant: true },
  { item: "Gói Proxy dân cư (Tháng đầu)", unitPrice: "500.000đ", quantity: "1", total: "500.000đ" },
  { item: "Quỹ giải mã Checkpoint/OTP", unitPrice: "500.000đ", quantity: "1", total: "500.000đ" }
];

export const SCORE_CHART_DATA: ScoreData[] = [
  { name: "Tài chính", AutoNuoi: 8, MinSoftware: 5 },
  { name: "Kỹ thuật", AutoNuoi: 5, MinSoftware: 9 },
  { name: "An toàn", AutoNuoi: 4, MinSoftware: 10 },
  { name: "Vận hành", AutoNuoi: 9, MinSoftware: 7 },
  { name: "Hậu mãi", AutoNuoi: 6, MinSoftware: 9 },
];

export const VIDEO_DATA: VideoItem[] = [
  {
    id: "grBbZtD24bU",
    title: "Giới thiệu tổng quan hệ sinh thái MinSoftware",
    thumbnail: "https://i.ytimg.com/vi/grBbZtD24bU/hqdefault.jpg",
    duration: "10:15",
    description: "Khám phá các công cụ hỗ trợ Marketing Facebook tối ưu nhất hiện nay."
  },
  {
    id: "MJKoFhxIn1s",
    title: "Hướng dẫn cài đặt MaxCare chi tiết từ A-Z",
    thumbnail: "https://i.ytimg.com/vi/MJKoFhxIn1s/hqdefault.jpg",
    duration: "14:20",
    description: "Từng bước thiết lập phần mềm để bắt đầu hành trình nuôi nick số lượng lớn."
  },
  {
    id: "AQyARk9q3o8",
    title: "Cấu hình tương tác nuôi nick an toàn",
    thumbnail: "https://i.ytimg.com/vi/AQyARk9q3o8/hqdefault.jpg",
    duration: "12:30",
    description: "Cách thiết lập kịch bản lướt Newfeed, Watch, Story để tăng độ Trust cho nick."
  },
  {
    id: "pqoFbcEQpPs",
    title: "Giải pháp đổi IP cho dàn nick quy mô lớn",
    thumbnail: "https://i.ytimg.com/vi/pqoFbcEQpPs/hqdefault.jpg",
    duration: "09:45",
    description: "Sử dụng Proxy, Dcom 4G để vượt qua các thuật toán quét của Facebook."
  },
  {
    id: "bQNB1eYTesA",
    title: "Tự động đăng bài Group/Fanpage hàng loạt",
    thumbnail: "https://i.ytimg.com/vi/bQNB1eYTesA/hqdefault.jpg",
    duration: "08:10",
    description: "Tiết kiệm hàng giờ đồng hồ mỗi ngày với tính năng đăng bài tự động."
  },
  {
    id: "HYRJeCNmfJQ",
    title: "Kỹ thuật giải Checkpoint 282, 956 hiệu quả",
    thumbnail: "https://i.ytimg.com/vi/HYRJeCNmfJQ/hqdefault.jpg",
    duration: "11:50",
    description: "Xử lý nhanh các sự cố khóa tài khoản bằng các công cụ tích hợp sẵn."
  },
  {
    id: "_dY7QVg52sk",
    title: "Chiến thuật Seeding comment tạo hiệu ứng đám đông",
    thumbnail: "https://i.ytimg.com/vi/_dY7QVg52sk/hqdefault.jpg",
    duration: "07:35",
    description: "Xây dựng uy tín thương hiệu thông qua các kịch bản hội thoại tự nhiên."
  },
  {
    id: "E-kLio71RNQ",
    title: "Quản lý dữ liệu và backup tài khoản MaxCare",
    thumbnail: "https://i.ytimg.com/vi/E-kLio71RNQ/hqdefault.jpg",
    duration: "06:20",
    description: "Bảo mật thông tin và sẵn sàng khôi phục khi cần thiết."
  }
];

export const GUIDE_ARTICLES: GuideArticle[] = [
  {
    title: "Phần mềm nuôi nick Facebook MaxCare - MinSoftware",
    summary: "Giải pháp nuôi hàng nghìn tài khoản cùng lúc với trình duyệt giả lập chuyên sâu. Tích hợp full tính năng tương tác, seeding, đăng bài và quản lý tập trung.",
    link: "https://minsoftware.vn/phan-mem-nuoi-nick-facebook-tai-khoan-so-luong-lon-maxcare/",
    tag: "MAXCARE"
  },
  {
    title: "Tính năng tự động hóa tương tác Newsfeed/Group",
    summary: "Tự động Like, Share, Comment theo từ khóa hoặc ID bài viết. Cơ chế Human-like mô phỏng chính xác hành vi người dùng thật.",
    link: "https://minsoftware.vn/phan-mem-nuoi-nick-facebook-tai-khoan-so-luong-lon-maxcare/",
    tag: "TƯƠNG TÁC"
  },
  {
    title: "Cơ chế quản lý Proxy & Đổi IP linh hoạt",
    summary: "Hỗ trợ đa dạng các loại Proxy (Tinsoft, TM, dân cư,...) và Dcom 4G. Xoay IP mượt mà giúp dàn nick luôn an toàn trước thuật toán quét.",
    link: "https://minsoftware.vn/phan-mem-nuoi-nick-facebook-tai-khoan-so-luong-lon-maxcare/",
    tag: "KỸ THUẬT"
  },
  {
    title: "Tự động giải Checkpoint và Khôi phục tài khoản",
    summary: "Kết nối các API giải Captcha, thuê Sim OTP tự động. Giải quyết triệt để các dạng checkpoint 282, 956, đổi pass khi bị hack.",
    link: "https://minsoftware.vn/phan-mem-nuoi-nick-facebook-tai-khoan-so-luong-lon-maxcare/",
    tag: "BẢO MẬT"
  }
];
