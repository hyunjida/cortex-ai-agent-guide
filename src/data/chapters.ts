import type { Chapter } from "../types/guide";
import { usageChapters } from "./usageChapters";

const chapterCatalog: Chapter[] = [
  {
    id: "overview", no: "00", title: "XSIAM 분석 프로세스 이해", shortTitle: "분석 프로세스", time: "20분", audience: "신규 고객 · SOC 분석가",
    description: "Cases 목록을 처음 연 사용자가 화면의 필터와 열을 읽고, 조사할 Case 한 건을 열어 상세 화면으로 이동하는 순서를 익힙니다.",
    path: "왼쪽 사이드바 → Cases & Issues → Cases → Case 상세",
    outcomes: [
      "Cases 목록에서 조회 기간과 상태 필터를 확인할 수 있다",
      "Severity, Score, Status, Assignee의 위치와 의미를 구분할 수 있다",
      "조사할 Case를 열고 상세 조사 화면의 확인 순서를 따라갈 수 있다",
    ],
    blocks: [
      { type: "cards", title: "먼저 알아야 할 것", references: [
        { chapter: "Module 8 · Understanding the Cases Page", pages: "340–344쪽" },
      ], items: [
        { title: "지금 보는 화면", text: "Cases & Issues 아래의 Cases 목록입니다. 여러 Case 중에서 조사할 한 건을 찾는 시작 화면입니다." },
        { title: "Case란?", text: "관련 보안 정보를 한곳에서 조사하도록 묶은 작업 단위입니다. 목록의 Case Name 한 줄을 클릭하면 상세 조사 화면으로 들어갑니다." },
        { title: "위쪽 원형 차트", text: "현재 목록을 Case Domain, Severity, Assignee, Status 기준으로 나누어 보여줍니다." },
        { title: "아래쪽 표", text: "Case 한 건마다 마지막 갱신 시각, Severity, Score, 이름, Status, Assignee, Issues Breakdown과 Case Domain을 보여줍니다." },
      ]},
      { type: "check", title: "Case를 클릭하기 전에 확인할 항목", references: [
        { chapter: "Module 4 · Case Prioritization / Case Statuses", pages: "180–203쪽" },
        { chapter: "Module 8 · Understanding the Cases Page", pages: "340–344쪽" },
      ], items: [
        "Last Updated 필터에 표시된 조회 기간을 확인합니다",
        "Status 필터에 표시된 조건을 확인합니다",
        "Case Domain 열에서 Security 또는 Posture 중 표시된 값을 확인합니다",
        "Severity 열과 Score 열의 값을 각각 확인합니다",
        "Status 열에서 New 또는 In Progress 값을 확인합니다",
        "Assignee 열에서 N/A 또는 담당자 이름을 확인합니다",
      ]},
      { type: "steps", title: "단계별 분석 절차", references: [
        { chapter: "Module 8 · Cases Page / Case Management Workflow", pages: "330–353쪽" },
      ], items: [
        "왼쪽 메뉴에서 Cases & Issues를 누르고 Cases를 선택합니다.",
        "All Cases 화면에서 Last Updated와 Status 필터를 먼저 봅니다. 화면에 어떤 기간과 상태의 Case가 표시되는지 확인하는 단계입니다.",
        "Case Domain 열을 봅니다. 각 Case에 Security 또는 Posture 중 어떤 값이 표시되는지 확인합니다.",
        "Severity, Score, Status, Assignee를 왼쪽에서 오른쪽으로 읽습니다. 아직 Case를 열기 전이므로 목록에서 현재 상태를 파악하는 단계입니다.",
        "Case Name과 Issues Breakdown을 확인합니다. 어떤 내용의 Case인지, 연결된 Issue가 어떻게 표시되는지 봅니다.",
        "조사할 Case의 행 또는 Case Name을 클릭해 상세 화면을 엽니다.",
        "상세 화면 상단의 AI 요약과 가운데 Case 관계 화면을 확인합니다.",
        "화면 아래에서 Issues 목록과 Assets, Artifacts, MITRE ATT&CK 항목을 확인합니다.",
        "오른쪽 Resolution Center에서 Pending, Recommended, In Progress, Done 숫자를 확인합니다.",
      ]},
      { type: "cards", title: "화면에서 확인할 항목과 의미", references: [
        { chapter: "Module 4 · Case Scoring / Case Statuses", pages: "180–203쪽" },
        { chapter: "Module 8 · Cases Page / Case Detailed View", pages: "340–344쪽" },
      ], items: [
        { title: "Last Updated", text: "Case 정보가 마지막으로 갱신된 시각입니다. 위쪽 필터의 조회 기간과 표의 각 Case 시각을 함께 확인합니다." },
        { title: "Case Domain", text: "Case가 속한 영역입니다. 제공된 화면에서는 Security와 Posture로 구분됩니다." },
        { title: "Severity", text: "Case에 표시된 심각도입니다. 제공된 화면에서는 Critical, High, Medium, Low로 나뉩니다." },
        { title: "Score", text: "Case 목록을 정렬할 때 참고하는 숫자입니다. Severity와 별개의 열로 표시됩니다." },
        { title: "Status", text: "Case의 현재 처리 상태입니다. 제공된 화면에서는 New와 In Progress가 표시됩니다." },
        { title: "Assignee", text: "현재 Case 담당자입니다. N/A는 목록에서 담당자가 표시되지 않은 상태입니다." },
        { title: "Case Name", text: "Case 제목입니다. 제목이나 행을 클릭해 상세 화면으로 이동합니다." },
        { title: "Issues Breakdown", text: "Case에 연결된 Issue 정보를 목록에서 보여주는 열입니다." },
      ]},
      { type: "cards", title: "판단 기준", basis: "practice", references: [
        { chapter: "Module 4 · Case Prioritization", pages: "180–195쪽" },
        { chapter: "Module 8 · Identify / Investigate", pages: "331–340쪽" },
      ], items: [
        { title: "지금 즉시 확장 조사", text: "중요 자산이 포함됐거나 여러 관련 Alert·개체가 보이고, Timeline 또는 Causality에 확인할 연결 관계가 있을 때입니다." },
        { title: "먼저 정보 보강", text: "점수와 제목 외에 판단할 증거가 부족하거나 대상·시간 범위가 불명확할 때입니다. 원본 Alert와 개체 정보를 먼저 확보합니다." },
        { title: "대응 화면 열기", text: "위협 활동과 영향 대상이 확인되면 조치할 자산 이름을 다시 확인하고 승인된 대응 화면을 엽니다." },
        { title: "종료 검토", text: "조사 질문에 답했고, 필요한 조치 결과와 잔여 위험·후속 작업이 기록됐을 때입니다. 조직별 종료 기준은 별도로 적용합니다." },
      ]},
      { type: "note", tone: "warn", title: "Case score는 결론이 아닙니다", references: [
        { chapter: "Module 4 · Case Scoring", pages: "180–195쪽" },
      ], text: "높은 Score는 먼저 확인할 대상을 찾는 참고값이며 악성임을 확정하는 증거가 아닙니다. 낮은 Score만 보고 Case를 닫지 마세요." },
      { type: "steps", title: "다음 조사 단계로 넘어가는 기준", basis: "practice", references: [
        { chapter: "Module 8 · Investigate / Mitigate", pages: "334–339쪽" },
      ], items: [
        "Alert의 생성 이유와 Case에 묶인 관계가 불명확하면 1장 ‘Alert와 Case 이해’로 이동합니다.",
        "최초 행위와 실행 순서를 확인해야 하면 Timeline과 Causality 분석으로 이동합니다.",
        "endpoint, 사용자, host, process가 핵심 조사 대상이면 개체 분석으로 이동합니다.",
        "IP, domain, URL, hash가 발견되면 Indicator와 Artifact 분석으로 이동합니다.",
        "화면에 필요한 이벤트가 없으면 Query Builder를 열어 XQL로 원본 데이터를 검색합니다.",
        "위협과 대상이 확인되고 조치 영향이 검토됐으면 대응 단계로 이동합니다.",
      ]},
      { type: "check", title: "분석 체크리스트", basis: "practice", references: [
        { chapter: "Module 8 · Case Management", pages: "324–377쪽" },
      ], items: [
        "Case 상태와 담당자를 확인했다",
        "Severity와 Case score의 의미를 구분했다",
        "포함된 Alert와 핵심 자산을 확인했다",
        "기존 Timeline, 코멘트와 실행 내역을 확인했다",
        "현재 조사 질문과 시간 범위를 정했다",
        "다음 조사 단계로 이동하는 이유를 기록했다",
        "대응 전 대상과 영향을 다시 확인했다",
        "종료 전 조치 결과와 후속 작업을 기록했다",
      ]},
      { type: "note", tone: "tip", title: "실무 참고 · 조사 질문을 먼저 적으세요", basis: "practice", text: "화면을 무작정 순회하기보다 “어떤 신호가 왜 하나의 Case가 되었는가?”, “어느 자산까지 영향을 받았는가?”처럼 현재 답해야 할 질문을 한 문장으로 적으면 다음 화면을 선택하기 쉽습니다." },
      { type: "note", tone: "warn", title: "주의 · 시간대와 최신 활동", basis: "practice", text: "교대 인수인계나 장시간 열린 Case에서는 표시 시간대와 마지막 갱신 시각을 먼저 확인하세요. 시간 순서를 잘못 읽거나 이미 수행된 조치를 중복 실행하지 않기 위한 실무 참고입니다." },
      { type: "cards", title: "간단한 실습 시나리오", basis: "practice", references: [
        { chapter: "Lab 7 · Analyze AnyDesk Cases", pages: "461–464쪽" },
        { chapter: "Lab 11 · Case Handling", pages: "471–473쪽" },
      ], items: [
        { title: "상황", text: "Portable AnyDesk 관련 Case가 새로 배정됐습니다. 상태는 New이고 여러 이벤트가 Case Timeline에 포함돼 있습니다." },
        { title: "과제 1", text: "Case를 열고 처음 확인할 여섯 가지 정보를 순서대로 적은 뒤, 각각 왜 필요한지 설명합니다." },
        { title: "과제 2", text: "Case Overview와 Timeline만으로 답할 수 있는 질문과 추가 조사가 필요한 질문을 나눕니다." },
        { title: "완료 기준", text: "현재 판단, 근거, 다음에 열 화면, 그 화면으로 이동하는 이유를 한 문단으로 기록합니다." },
      ]},
    ],
  },
  {
    id: "login", no: "01", title: "로그인 및 화면 구성", shortTitle: "로그인·화면", time: "5분", audience: "신규 분석가",
    description: "고객 테넌트에 안전하게 접속하고 업무에 필요한 메뉴와 Agentic Assistant를 찾습니다.",
    path: "고객 로그인 URL → SSO/MFA → XSIAM 테넌트",
    outcomes: ["올바른 테넌트에 접속한다", "주요 메뉴를 찾는다", "권한 문제를 구분한다"],
    blocks: [
      { type: "steps", title: "첫 로그인 순서", items: [
        "관리자가 제공한 고객 전용 URL로 접속합니다. 검색 결과나 개인 북마크의 다른 테넌트로 접속하지 않습니다.",
        "조직의 SSO 계정을 선택하고 MFA 인증을 완료합니다.",
        "화면 상단의 테넌트명과 계정명을 확인합니다.",
        "Incident Response, Query Center, Dashboards 메뉴가 보이는지 확인합니다.",
      ]},
      { type: "cards", title: "화면에서 먼저 찾을 곳", items: [
        { title: "Navigation", text: "왼쪽 메뉴. 메뉴가 안 보이면 검색 기능으로 이름을 찾습니다." },
        { title: "Time range", text: "조회 기간과 시간대. 조사 결과가 달라지는 가장 흔한 원인입니다." },
        { title: "Agentic Assistant", text: "자연어로 조사 도움을 요청하는 패널. 표시 여부는 라이선스와 권한에 따라 다릅니다." },
      ]},
      { type: "steps", title: "Agentic Assistant 열기", items: [
        "화면의 Assistant 아이콘을 찾아 패널을 엽니다. 위치는 버전과 화면에 따라 다를 수 있습니다.",
        "현재 보고 있는 케이스나 자산이 대화 컨텍스트에 포함됐는지 확인합니다.",
        "사용할 시스템 또는 Custom Agent를 선택하고, 조사 범위와 원하는 결과 형식을 명확히 입력합니다.",
        "패널을 닫아도 실행 중인 계획이 있는지 확인하고, 민감 작업의 승인 요청을 놓치지 않습니다.",
      ]},
      { type: "note", tone: "warn", title: "고객 환경 확인 필요", text: "로그인 URL, SSO/MFA 방식, 역할별 메뉴 권한은 조직마다 다릅니다. 메뉴가 없으면 임의로 권한을 변경하지 말고 관리자에게 문의하세요." },
    ],
  },
  {
    id: "dashboard", no: "02", title: "대시보드", shortTitle: "대시보드", time: "7분", audience: "SOC L1/L2",
    description: "전체 현황에서 오늘 먼저 확인할 사건을 고르고, 수치가 의미하는 바를 정확히 읽습니다.",
    path: "Dashboards & Reports → Dashboards",
    outcomes: ["필터와 기간을 먼저 확인한다", "핵심 위젯을 해석한다", "위젯에서 사건으로 이동한다"],
    blocks: [
      { type: "steps", title: "대시보드 읽는 순서", items: [
        "우측 상단의 조회 기간, 시간대, 대상 필터를 먼저 확인합니다.",
        "Critical/High 신규 사건과 미할당 사건이 증가했는지 봅니다.",
        "Open과 Closed 추세, MTTR 변화가 평소 기준선과 다른지 확인합니다.",
        "이상 수치나 위젯을 눌러 원본 Case 목록으로 드릴다운합니다.",
      ]},
      { type: "cards", title: "주요 지표", items: [
        { title: "Severity", text: "사건의 잠재 영향도. 높을수록 먼저 확인하지만 정탐을 뜻하지는 않습니다." },
        { title: "Open incidents", text: "아직 종결되지 않은 사건. 미할당과 장기 미처리를 함께 봅니다." },
        { title: "MTTR", text: "평균 대응 시간. 기간과 표본 수가 같은 조건인지 비교해야 합니다." },
      ]},
      { type: "steps", title: "대시보드 커스터마이징", items: [
        "편집 권한이 있는지 확인한 후 Edit 또는 대시보드 메뉴를 엽니다.",
        "POC 목표에 필요한 위젯을 추가하고 데이터 소스·기간·필터를 설정합니다.",
        "위젯의 위치와 크기를 조정한 뒤 저장 전 미리보기로 값이 맞는지 확인합니다.",
        "공용 대시보드 변경은 다른 사용자의 화면에 영향을 주므로 복제본에서 먼저 작업합니다.",
      ]},
      { type: "note", tone: "ai", title: "AI 인사이트 읽기", text: "AI 요약은 조사 시작점입니다. 강조된 이상 징후를 원본 사건, 타임라인, 데이터 소스와 대조해 확인하세요." },
    ],
  },
  {
    id: "ingestion", no: "03", title: "데이터 수집 상태 확인", shortTitle: "수집 상태", time: "12분", audience: "SOC L1/L2",
    description: "연동 설정을 바꾸지 않고, 필요한 로그가 정상적으로 들어오는지 여러 화면으로 교차 확인합니다.",
    path: "Dashboards & Reports → Dashboards → Command Center",
    outcomes: ["두 화면에서 수집 상태를 확인한다", "지연 시각과 단발성 순단 시각을 확인한다", "화면 값과 시각을 엔지니어에게 전달한다"],
    blocks: [
      { type: "cards", title: "어느 화면을 쓸까?", items: [
        { title: "Command Center", text: "소스별 수집률과 최근 이벤트 흐름을 약 30초 주기로 확인합니다. ⋮ → Mark as default로 기본 대시보드 지정이 가능합니다." },
        { title: "Data Ingestion Dashboard", text: "고볼륨 소스와 quota 초과 여부 확인에 유용합니다." },
        { title: "Dataset Management", text: "데이터셋 존재, 저장 용량과 보관 기간을 확인합니다. Broker VM 화면의 소스 이름과 나란히 확인합니다." },
        { title: "Health Issues", text: "XSIAM이 감지한 수집 이상과 관련 세부 정보를 확인합니다." },
      ]},
      { type: "cards", title: "연동 상태 교차 확인", items: [
        { title: "Data Sources & Integrations", text: "API/커넥터 소스의 연결 여부와 최근 동기화 시각을 봅니다. 정상은 초록, 경고는 갈색, 오류는 빨강입니다." },
        { title: "Broker VM 소스", text: "Integration 목록에 없을 수 있으므로 Dataset Management에서 데이터셋 존재와 용량 증가를 확인합니다." },
        { title: "정밀 지연 확인", text: "분 단위 latency는 metrics_source를 XQL로 조회합니다. 수집 지표는 5분 단위로 계산됩니다." },
      ]},
      { type: "image", title: "Data Sources & Integrations 상태 화면", src: "./notion/data-source-status.png", alt: "데이터 소스 연동 상태를 보여주는 XSIAM 화면" },
      { type: "image", title: "Dataset Management 화면", src: "./notion/dataset-management.png", alt: "데이터셋과 저장 현황을 보여주는 XSIAM 화면" },
      { type: "steps", title: "수집 이상 확인 순서", items: [
        "Command Center에서 해당 소스의 최근 수집 시각과 이벤트 수를 확인합니다.",
        "Settings → Health Issues에서 같은 소스의 이슈가 생성됐는지 확인합니다.",
        "Dataset Management에서 데이터셋과 저장 용량 증가 여부를 봅니다.",
        "전일 동시간대와 볼륨을 비교하고, 파싱 오류가 지속 증가하는지 확인합니다.",
        "이상이 지속되면 소스명·발견 시각·화면 캡처·지표값을 포함해 연동 담당자에게 전달합니다.",
      ]},
      { type: "code", title: "최근 수집 지표 확인 예시", code: "dataset = metrics_source\n| sort desc _time\n| limit 10" },
      { type: "note", tone: "warn", title: "지연 필드 해석", text: "median은 평시 기준, 90th percentile은 완만한 지연, max delay는 급격한 스파이크를 보는 값입니다. 하나만으로 장애를 단정하지 마세요." },
      { type: "note", tone: "warn", title: "Health Issues 전제 조건", text: "데이터 수집 상태를 모니터링하고 Health Issues를 생성하려면 Cortex Analytics가 활성화되어 있어야 합니다." },
      { type: "cards", title: "Data Freshness 필드 정의", items: [
        { title: "data_freshness_median", text: "집계 기간 내 freshness delay 중앙값입니다. 전체 값의 절반이 이 값보다 작습니다." },
        { title: "data_freshness_ninetieth_percentile", text: "지연의 90백분위수입니다. 최악 구간을 반영하면서 단발 스파이크 영향을 줄입니다." },
        { title: "data_freshness_max_delay", text: "집계 기간의 최대 지연값으로 단발 스파이크까지 포함합니다." },
      ]},
      { type: "cards", title: "Health Issues 유형", items: [
        { title: "Ingestion", text: "데이터 수집 중단 또는 계산된 baseline에서 이탈했을 때 발생합니다." },
        { title: "Collection", text: "수집 Integration, Custom Collector, Marketplace 연동의 연결 오류에 발생합니다." },
      ]},
      { type: "image", title: "Health Issues 목록", src: "./notion/health-issues.png", alt: "XSIAM Health Issues 목록 화면" },
      { type: "image", title: "Health Issue 상세 패널", src: "./notion/health-detail.png", alt: "수집 이상 상세 내용 패널" },
      { type: "steps", title: "Broker VM 상태 확인", items: [
        "Settings → Configurations → Broker VMs에서 Brokers 또는 Clusters 탭을 엽니다.",
        "Apps 열에서 Syslog, Database, HTTP Collector 등 애플릿 상태를 확인합니다.",
        "초록 Connected는 정상, 주황 Warning은 처리 오류 등 경미한 문제, 빨강 Error는 애플리케이션·연결 오류입니다.",
        "Management Audit Logs에서 Type을 Broker VMs로 필터링해 재시작·업그레이드·연결 끊김을 확인합니다.",
        "브로커 상태와 metrics_source 수집 시각·볼륨을 함께 봅니다. 실제 복구는 연동 담당 엔지니어에게 전달합니다.",
      ]},
      { type: "image", title: "Broker VM 상태 화면", src: "./notion/broker-vm.png", alt: "Broker VM과 애플릿 상태 화면" },
      { type: "image", title: "Broker VM Management Audit Logs", src: "./notion/broker-audit.png", alt: "Broker VM 관리 감사 로그 화면" },
      { type: "note", tone: "warn", title: "감사 로그의 한계", text: "Management Audit Logs는 브로커 재시작·업그레이드·연결 활동을 보여줄 뿐 실제 원본 로그 유입을 증명하지 않습니다. metrics_source와 Command Center를 함께 확인하세요." },
      { type: "note", tone: "ai", title: "Agentic Assistant 질문 예시", text: "“지난 24시간 NGFW 로그가 들어왔어?”, “어제보다 오늘 로그 볼륨이 줄었어?”, “OO Broker VM 경유 소스 중 지금 수집 안 되는 것이 있어?”라고 물을 수 있습니다. 답변 수치는 Command Center와 한 번 더 대조하세요." },
      { type: "image", title: "Agentic Assistant 수집 상태 질의", src: "./notion/agent-question.png", alt: "수집 여부를 묻는 Agentic Assistant 대화 화면" },
      { type: "image", title: "Agentic Assistant 수집 상태 응답", src: "./notion/agent-result.png", alt: "수집 상태를 요약한 Agentic Assistant 결과 화면" },
    ],
  },
  {
    id: "cases", no: "01", title: "Alert와 Case 이해", shortTitle: "Alert와 Case", time: "25분", audience: "신규 고객 · SOC L1/L2",
    description: "개별 탐지 신호인 Alert가 어떤 규칙에서 시작되고, 관련 이슈와 자산이 어떻게 Case라는 조사 단위로 연결되는지 증거를 따라 확인합니다.",
    path: "왼쪽 사이드바 → Cases & Issues → Cases → Case 상세 → Alerts",
    heroImage: {
      src: "./case-overview.png",
      alt: "Cortex XSIAM Case 상세 화면의 AI 요약, 관계 화면, Issues, Assets와 Artifacts",
    },
    outcomes: [
      "Alert와 Case의 역할을 구분할 수 있다",
      "Alert의 생성 근거와 Case에 포함된 관계를 확인할 수 있다",
      "정보 보강, 심층 조사, 대응 중 올바른 다음 단계를 선택할 수 있다",
    ],
    blocks: [
      { type: "cards", title: "Alert와 Case를 구분하는 이유", references: [
        { chapter: "Module 4 · Alerting and Detection", pages: "163–179쪽" },
        { chapter: "Module 8 · Case Management", pages: "328–330쪽" },
      ], items: [
        { title: "Alert", text: "Correlation Rule 등 탐지 로직이 이벤트 패턴을 찾아 생성한 보안 신호입니다. 분석가는 어떤 조건과 원본 이벤트가 신호를 만들었는지 확인합니다." },
        { title: "Issue와 Causality", text: "탐지된 활동의 관계와 문맥을 보여줍니다. Causality View는 관련 이벤트와 개체를 따라 조사할 수 있는 출발점입니다." },
        { title: "Case", text: "관련 Issue, 자산과 Artifact를 한 화면에서 확인하고 처리하도록 묶은 작업 단위입니다." },
        { title: "분석가의 핵심 질문", text: "“왜 탐지됐는가?”, “왜 같은 Case에 포함됐는가?”, “어떤 자산까지 영향을 받았는가?”를 순서대로 답합니다." },
      ]},
      { type: "cards", title: "분석을 시작하는 상황", references: [
        { chapter: "Module 4 · Correlation Rules / Issue Causality", pages: "165–179쪽" },
        { chapter: "Module 8 · Cases", pages: "328–330쪽" },
      ], items: [
        { title: "새 Alert를 확인함", text: "탐지 규칙과 원본 이벤트를 확인해 무엇이 기준을 충족했는지 판단해야 합니다." },
        { title: "여러 Alert가 한 Case에 포함됨", text: "각 Alert의 자산, 행위와 발생 시각을 나란히 확인합니다." },
        { title: "Case score가 높거나 변경됨", text: "점수 자체보다 어떤 Alert와 scoring method가 값에 영향을 줬는지 확인합니다." },
        { title: "기존 Case에 새 활동이 추가됨", text: "마지막 확인 이후 어떤 Alert·Artifact가 추가됐고 기존 가설이 달라지는지 확인합니다." },
      ]},
      { type: "check", title: "분석 전 확인사항", references: [
        { chapter: "Module 4 · Case Prioritization / Case Statuses", pages: "180–203쪽" },
        { chapter: "Module 8 · Cases Page", pages: "340–344쪽" },
      ], items: [
        "Case ID, 제목, 생성·갱신 시각과 현재 상태를 확인했다",
        "담당자와 기존 조사 코멘트, 자동화 실행 내역을 확인했다",
        "Severity와 Case score를 서로 다른 정보로 구분했다",
        "Alert 수와 각 Alert의 발생 시각 범위를 확인했다",
        "Case에 표시된 주요 endpoint, 사용자와 Artifact를 확인했다",
        "필터와 시간대 때문에 일부 Alert가 보이지 않는지 확인했다",
      ]},
      { type: "steps", title: "단계별 분석 절차", references: [
        { chapter: "Module 4 · Correlation Rules / Causality / Case Prioritization", pages: "165–195쪽" },
        { chapter: "Module 8 · Understanding the Cases Page", pages: "340–344쪽" },
      ], items: [
        "Case 목록에서 기본 맥락을 잡습니다. 제목, Severity, score, status, assignee와 시간을 확인하고 조사 순서를 정합니다.",
        "Alerts 영역에서 가장 이른 Alert부터 확인합니다. Alert 이름, 발생 시각, 대상 개체와 탐지 규칙을 기록합니다.",
        "탐지 이유를 확인합니다. Correlation Rule의 조건과 Alert의 원본 이벤트를 대조해 실제로 어떤 패턴이 일치했는지 찾습니다.",
        "Alert 사이의 공통점을 찾습니다. 같은 endpoint, 사용자, process, IP, 파일 또는 인접 시간대가 있는지 비교합니다.",
        "Causality와 Timeline을 열고 연결된 이벤트의 자산, 행위와 발생 시각을 확인합니다.",
        "확인된 영향 자산, 핵심 Artifact, 최초·최종 활동 시각을 Case 기록에 적습니다.",
        "다음 행동을 선택합니다. 증거가 부족하면 정보 보강, 관계가 확인되면 심층 조사, 명확한 위협과 대상이 확인되면 대응 검토로 이동합니다.",
      ]},
      { type: "cards", title: "화면에서 확인할 항목과 의미", references: [
        { chapter: "Module 4 · Correlation Rules / Case Scoring / Case Statuses", pages: "165–203쪽" },
        { chapter: "Module 8 · Cases Page / Case Detailed View", pages: "340–344쪽" },
      ], items: [
        { title: "Alert name · Source", text: "어떤 탐지 로직이 신호를 만들었는지 확인합니다. 이름만으로 악성 여부를 판정하지 않습니다." },
        { title: "Correlation Rule", text: "이벤트에서 Alert를 생성한 조건과 대상 데이터입니다. 탐지 이유를 재현하는 핵심 근거입니다." },
        { title: "Alert timestamp", text: "개별 신호의 발생 시각입니다. Case 생성 시각과 나란히 놓고 어느 시각이 먼저인지 확인합니다." },
        { title: "Severity", text: "Alert 또는 Case에 표시되는 심각도입니다. 목록에서 Critical, High, Medium, Low 값을 확인합니다." },
        { title: "Case score", text: "Case의 상대적 우선순위를 표현합니다. 적용된 scoring method와 수동 조정 가능성을 확인합니다." },
        { title: "Issue Grouping", text: "여러 관련 Issue를 하나의 Case에 묶어 보여주는 기능입니다. 각 Issue를 열어 공통 자산과 시각을 확인합니다." },
        { title: "Assets · Artifacts", text: "Alert와 Case에 관련된 endpoint, 사용자, IP, 파일 등 조사할 개체입니다." },
        { title: "Status · Last updated", text: "업무 처리 단계와 최근 변화를 보여줍니다. 새 활동이 추가됐는지 확인하는 기준입니다." },
      ]},
      { type: "cards", title: "판단 기준", basis: "practice", references: [
        { chapter: "Module 4 · Issue Causality / Case Prioritization", pages: "175–195쪽" },
        { chapter: "Module 8 · Identify / Investigate", pages: "331–335쪽" },
      ], items: [
        { title: "관련성이 높음", text: "동일 자산이나 개체가 반복되고 시간·행위 흐름이 연결되며, 원본 이벤트가 그 관계를 뒷받침할 때입니다." },
        { title: "관련성이 불명확함", text: "공통점이 시간대나 제목뿐이고 원본 이벤트·개체 관계가 확인되지 않을 때입니다. 추가 정보가 필요합니다." },
        { title: "의심을 강화하는 정보", text: "여러 Alert에서 동일 개체가 이어지거나 Causality에 추가 조사할 연결 이벤트가 나타나는 경우입니다." },
        { title: "정상 가능성을 검토할 정보", text: "승인된 업무·관리 활동과 일치하는 정황이 있으면 환경 소유자에게 해당 활동을 확인합니다." },
      ]},
      { type: "note", tone: "warn", title: "조직 기준을 확인하세요", basis: "practice", text: "자산 중요도, 허용된 관리 도구와 업무 시간은 고객 조직의 기준을 확인합니다." },
      { type: "steps", title: "다음 조사 단계로 넘어가는 기준", basis: "practice", references: [
        { chapter: "Module 8 · Investigate / Key Assets & Artifacts", pages: "334–357쪽" },
      ], items: [
        "Alert가 발생한 조건을 설명할 수 없으면 Correlation Rule과 원본 이벤트 확인을 계속합니다.",
        "Alert 사이의 시간·개체 관계가 보이면 Timeline과 Causality 심층 분석으로 이동합니다.",
        "특정 endpoint, 사용자, host 또는 process가 중심이면 해당 개체 조사로 이동합니다.",
        "IP, domain, URL, hash가 핵심 증거면 Indicator와 Artifact 조사로 이동합니다.",
        "현재 화면에 필요한 원본 이벤트가 없으면 Query Builder를 열어 XQL로 검색합니다.",
        "위협 활동과 대상이 확인되면 조치 대상의 이름을 다시 확인하고 승인된 대응 화면을 엽니다.",
        "정상 정황이 있어도 근거와 확인자를 기록하기 전에는 종료하지 않습니다.",
      ]},
      { type: "check", title: "분석 체크리스트", basis: "practice", references: [
        { chapter: "Module 4 · Alerting and Detection", pages: "163–203쪽" },
        { chapter: "Module 8 · Case Management", pages: "324–360쪽" },
      ], items: [
        "첫 Alert와 마지막 Alert의 발생 시각을 확인했다",
        "각 Alert를 생성한 규칙과 조건을 확인했다",
        "Alert의 원본 이벤트를 최소 한 건 이상 확인했다",
        "공통 endpoint, 사용자, process와 Artifact를 비교했다",
        "Case score와 Severity를 정탐 판정으로 사용하지 않았다",
        "Causality 또는 Timeline에서 연결된 원본 이벤트를 열었다",
        "확인한 사실과 아직 모르는 내용을 분리했다",
        "다음 조사 단계와 이동 이유를 기록했다",
      ]},
      { type: "note", tone: "tip", title: "실무 참고 · 첫 Alert부터 시간 순으로 읽으세요", basis: "practice", text: "Case 제목이나 가장 높은 Severity Alert만 먼저 보면 뒤에 발생한 결과를 원인으로 오해할 수 있습니다. 가장 이른 Alert와 이벤트부터 시간 순서로 확인합니다." },
      { type: "note", tone: "warn", title: "주의 · 함께 묶였다는 사실만으로 인과관계를 확정하지 마세요", references: [
        { chapter: "Module 4 · Issue Causality", pages: "175–179쪽" },
      ], text: "Causality View와 Issue Grouping은 조사 범위를 좁히는 강력한 단서입니다. 각 노드와 Alert의 원본 이벤트를 열어 시간, 개체와 행위 관계를 확인한 뒤 판단하세요." },
      { type: "cards", title: "간단한 실습 시나리오", basis: "practice", references: [
        { chapter: "Lab 6 · Review Correlation Rule", pages: "458–460쪽" },
        { chapter: "Lab 7 · Analyze AnyDesk Cases", pages: "461–464쪽" },
      ], items: [
        { title: "상황", text: "Portable AnyDesk Detected Correlation Rule에서 Alert가 생성되고 관련 Case가 열렸습니다." },
        { title: "과제 1", text: "Correlation Rule에서 어떤 조건과 데이터가 Alert를 만들었는지 찾고, Alert 상세의 원본 이벤트와 대조합니다." },
        { title: "과제 2", text: "Case에 포함된 Alert를 시간 순으로 정리하고 공통 endpoint, 사용자 또는 Artifact를 표시합니다." },
        { title: "판단", text: "확인된 사실, 추가로 필요한 증거, 다음에 열 화면과 그 이유를 각각 한 문장으로 작성합니다." },
        { title: "완료 기준", text: "Alert 생성 이유와 Case 조사 범위를 설명하되, 제공된 증거 이상으로 악성 여부를 단정하지 않습니다." },
      ]},
    ],
  },
  {
    id: "xql", no: "05", title: "XQL 쿼리 심층 분석", shortTitle: "XQL", time: "15분", audience: "SOC L2/L3",
    description: "Query Center에서 데이터셋, 시간 범위와 필드를 선택하고 결과 행을 직접 확인합니다.",
    path: "Investigation → Query Center",
    outcomes: ["기본 파이프라인을 읽는다", "좁은 범위에서 안전하게 검색한다", "결과를 사건 근거로 남긴다"],
    blocks: [
      { type: "cards", title: "핵심 명령", items: [
        { title: "dataset", text: "검색할 데이터 묶음을 선택합니다." },
        { title: "filter", text: "시간, 사용자, 호스트 등 조건으로 범위를 줄입니다." },
        { title: "fields", text: "결과에서 볼 열을 선택합니다." },
        { title: "comp", text: "개수, 합계 등 통계를 계산하고 그룹화합니다." },
      ]},
      { type: "code", title: "최근 인증 실패 예시", code: "dataset = xdr_data\n| filter event_type = \"AUTH\" and action = \"FAIL\"\n| fields _time, user_name, src_ip\n| sort desc _time\n| limit 100" },
      { type: "steps", title: "안전한 쿼리 순서", items: [
        "먼저 조사 질문과 필요한 시간 범위를 한 문장으로 정합니다.",
        "올바른 dataset과 실제 존재하는 필드명을 필드 탐색기에서 확인합니다.",
        "짧은 시간 범위와 limit로 결과를 확인한 뒤 필요할 때만 범위를 넓힙니다.",
        "결과의 시간대·중복·null 값을 점검하고 Saved Query로 저장합니다.",
        "사용한 쿼리와 핵심 결과를 케이스 코멘트나 증거에 남깁니다.",
      ]},
      { type: "steps", title: "결과 저장과 케이스 연계", items: [
        "쿼리 이름에 목적·대상·시간 범위가 드러나도록 Saved Query로 저장합니다.",
        "재사용 쿼리는 즐겨찾기 또는 조직이 정한 폴더에 배치하고 설명을 추가합니다.",
        "결과에서 핵심 행과 필드 값을 확인하고 Export 또는 Case 연결 기능을 사용합니다.",
        "케이스 코멘트에 쿼리, 실행 시각, 결과 요약, 원본 링크를 함께 남깁니다.",
      ]},
      { type: "note", tone: "ai", title: "AI 변환 사용법", text: "자연어로 쿼리를 생성해도 실행 전 dataset, 시간 범위, 필터를 직접 검토하세요. 생성된 쿼리가 조사 질문과 같은 의미인지 확인해야 합니다." },
    ],
  },
  {
    id: "detections", no: "06", title: "탐지 규칙", shortTitle: "탐지 규칙", time: "10분", audience: "SOC L2/L3",
    description: "알림을 만든 규칙의 유형과 조건을 이해하고, 탐지 공백 없이 개선 요청을 작성합니다.",
    path: "Detection & Threat Intel → Detection Rules",
    outcomes: ["규칙 유형을 구분한다", "조건과 MITRE 매핑을 검토한다", "튜닝 요청 근거를 작성한다"],
    blocks: [
      { type: "cards", title: "주요 탐지 유형", items: [
        { title: "IOC", text: "악성 IP·도메인·해시 등 알려진 지표를 탐지합니다." },
        { title: "BIOC / Analytics", text: "프로세스·파일·네트워크의 수상한 행동이나 기준선 이탈을 탐지합니다." },
        { title: "Correlation", text: "XQL로 여러 데이터 소스의 이벤트를 검색해 함께 표시합니다." },
      ]},
      { type: "check", title: "규칙 상세에서 확인할 것", items: ["활성 상태와 심각도", "탐지 조건과 대상 데이터", "MITRE ATT&CK 전술·기술", "최근 발생량과 정·오탐 이력", "수정 권한과 변경 승인 절차"] },
      { type: "steps", title: "활성화·심각도 조정", items: [
        "변경 권한과 고객 정책을 확인하고 기존 조건·심각도·최근 발생량을 기록합니다.",
        "비활성화 또는 심각도 변경이 하위 플레이북과 SLA에 미치는 영향을 확인합니다.",
        "승인된 변경만 적용하고 변경 전후의 Alert 발생량과 탐지 공백을 모니터링합니다.",
      ]},
      { type: "note", tone: "ai", title: "AI 기반 이상탐지", text: "고정 지표와 일치시키는 일반 규칙과 달리, 분석 모델은 사용자·자산의 기준선 이탈을 볼 수 있습니다. 왜 평소와 다른지 비교 기간과 특성을 확인하세요." },
      { type: "check", title: "신규 규칙 요청 항목", items: ["탐지하려는 위협과 사용 사례", "필요 데이터셋과 예시 이벤트", "XQL 또는 조건 초안", "예상 발생량과 오탐 조건", "심각도와 MITRE ATT&CK 매핑", "테스트 시나리오와 담당자"] },
      { type: "note", tone: "warn", title: "규칙을 바로 끄지 마세요", text: "오탐 하나만으로 전체 규칙을 비활성화하면 탐지 공백이 생깁니다. 반복 표본, 정상 원인, 최소 예외 조건, 만료일을 포함해 변경을 요청하세요." },
    ],
  },
  {
    id: "exceptions", no: "07", title: "예외 설정", shortTitle: "예외 설정", time: "8분", audience: "승인된 운영자",
    description: "반복된 Case의 원본 이벤트를 확인하고 필요한 대상만 예외 조건에 추가합니다.",
    path: "Settings → Exception / Exclusion Configuration",
    outcomes: ["예외와 규칙 비활성화를 구분한다", "최소 범위 원칙을 적용한다", "재검토 가능한 기록을 남긴다"],
    blocks: [
      { type: "cards", title: "예외와 제외 이해", items: [
        { title: "Exception", text: "특정 조건의 이슈나 탐지를 예외 처리하되 원래 규칙의 나머지 범위는 유지합니다." },
        { title: "Exclusion", text: "지정된 프로세스·경로·서명자·자산 등을 검사 또는 탐지 대상에서 제외합니다. 적용 모듈과 범위를 반드시 확인합니다." },
      ]},
      { type: "check", title: "예외 상세에서 확인할 것", items: ["조건과 대상 규칙", "심각도", "적용 모듈", "사용자·자산·경로 등 Scope", "활성 상태", "만료일과 변경 이력"] },
      { type: "steps", title: "예외 등록 전후 절차", items: [
        "동일 원인의 반복 오탐인지 여러 사건 표본으로 확인합니다.",
        "사용자·경로·서명자·해시·자산 등 가장 좁은 조건을 선택합니다.",
        "예외 화면에서 적용 모듈, 규칙과 자산 범위를 확인합니다.",
        "승인자 확인 후 시작일·만료일·사유·관련 티켓을 기록합니다.",
        "적용 후 알림 감소와 예상하지 않은 탐지 누락을 모니터링합니다.",
      ]},
      { type: "check", title: "예외 요청 필수 항목", items: ["대상 규칙과 반복 발생 건수", "오탐임을 입증하는 증거", "제외 조건과 적용 범위", "보안 영향과 보완 통제", "승인자·만료일·재검토일"] },
      { type: "note", tone: "warn", title: "권한 확인", text: "예외 생성·활성화 권한은 고객 정책마다 다릅니다. 권한이 있어도 승인 없이 운영 탐지를 변경하지 마세요." },
    ],
  },
  {
    id: "automation", no: "08", title: "자동화와 Automation Agent", shortTitle: "자동화", time: "10분", audience: "SOC L2/L3",
    description: "플레이북의 Task 순서와 실행 상태를 열고 Automation Engineer Agent가 만든 출력값을 확인합니다.",
    outcomes: ["플레이북 상태를 확인한다", "AI 생성 결과를 검토한다", "실패와 승인 대기를 구분한다"],
    blocks: [
      { type: "steps", title: "플레이북 실행 확인", items: [
        "Playbook 실행 목록에서 시작 시각과 trigger를 확인합니다.",
        "각 Task의 성공, 실패, 대기 상태와 입력·출력값을 확인합니다.",
        "수동 승인 단계가 있으면 대상·행동·영향을 확인한 후 승인 또는 거부합니다.",
        "실패한 Task의 오류를 기록하고 임의 재실행 전 중복 조치 가능성을 확인합니다.",
        "격리·차단 작업을 실행한 뒤 Management Audit Logs에서 대상과 완료 상태를 확인합니다.",
      ]},
      { type: "cards", title: "실행 목록에서 볼 것", items: [
        { title: "Running / Pending", text: "실행 중이거나 입력·사람 승인을 기다리는 상태입니다." },
        { title: "Completed", text: "모든 Task가 끝난 상태입니다. 실제 조치 결과까지 성공했는지 출력값을 확인합니다." },
        { title: "Failed", text: "오류 Task와 입력값, 재시도 이력을 확인해 중복 조치 없이 복구합니다." },
      ]},
      { type: "steps", title: "자동 생성 결과 검토", items: [
        "Agent가 제안한 스크립트·플레이북의 목적, 입력, 출력, 외부 통합을 확인합니다.",
        "삭제·격리·차단·티켓 생성 등 상태를 바꾸는 Task를 찾아 표시합니다.",
        "승인된 테스트 자산에서 실행한 뒤 출력값과 오류 메시지를 확인합니다.",
        "승인 후 배포하고 버전, 작성자, 변경 사유를 감사 가능하게 남깁니다.",
      ]},
      { type: "note", tone: "ai", title: "Automation Engineer Agent", text: "자연어로 스크립트나 자동화 초안을 만들 수 있지만, 생성물은 코드 리뷰·테스트·승인을 거쳐야 합니다. 운영 테넌트에서 바로 실행하지 마세요." },
      { type: "note", tone: "warn", title: "POC 안전 원칙", text: "기본값은 조회·요약 중심으로 두고, 격리·삭제·차단 같은 변경 작업은 승인된 테스트 자산에서만 수행하세요." },
    ],
  },
  {
    id: "reporting", no: "09", title: "리포트 / 사고 문서화", shortTitle: "리포트", time: "10분", audience: "모든 분석가",
    description: "AI 요약의 각 문장을 원본 Alert, Timeline과 조치 결과에 대조해 사고 기록을 만듭니다.",
    outcomes: ["필수 보고 항목을 빠뜨리지 않는다", "사실과 판단을 구분한다", "POC 성과를 측정한다"],
    blocks: [
      { type: "check", title: "사고보고서 필수 항목", items: ["사건 번호·제목·심각도·담당자", "최초 탐지·조사·조치·종결 시각", "영향 사용자·자산·데이터", "근본 원인과 공격 타임라인", "확인된 증거와 사용한 쿼리", "수행 조치와 결과", "재발 방지·후속 작업·담당자"] },
      { type: "steps", title: "AI 기반 케이스 리포트 생성", items: [
        "케이스의 최신 Alert, Timeline, 코멘트, 조치 결과가 모두 반영됐는지 확인합니다.",
        "Report 또는 AI 요약 생성 기능에서 조사 기간과 포함 항목을 선택합니다.",
        "생성된 초안의 사건 개요, 타임라인, 영향 범위, 대응 내용을 원본 증거와 대조합니다.",
        "확인되지 않은 추론과 민감정보를 수정하고 검토 상태를 표시합니다.",
      ]},
      { type: "steps", title: "보고서 작성 순서", items: [
        "AI Case Summary를 열고 각 문장을 원본 Alert와 Timeline의 시각·자산·행위와 대조합니다.",
        "관찰된 사실, 분석가의 판단, 아직 확인되지 않은 가설을 구분해 씁니다.",
        "민감정보를 제거하고 고객 표준 템플릿에 항목을 매핑합니다.",
        "최종 검토자 승인 후 조직이 정한 형식으로 보관·공유합니다.",
      ]},
      { type: "cards", title: "사내 표준 양식 매핑", items: [
        { title: "사건 개요", text: "Case Summary, Severity, 상태, 담당자 정보를 연결합니다." },
        { title: "발생 경위", text: "Timeline과 Root Cause/Attack Story에서 직접 확인한 이벤트를 연결합니다." },
        { title: "영향 및 증거", text: "Assets, Alerts, Artifacts, XQL 결과를 연결합니다." },
        { title: "조치 및 재발 방지", text: "실행 Task, Audit Log, 후속 티켓과 권고를 연결합니다." },
      ]},
      { type: "cards", title: "POC 결과에 포함할 지표", items: [
        { title: "Detection", text: "시나리오별 탐지 성공 여부와 탐지까지 걸린 시간" },
        { title: "Investigation", text: "원인·영향 범위 확인 시간과 AI 지원 효과" },
        { title: "Response", text: "조치 성공 여부, 승인·자동화 시간, 개선 항목" },
      ]},
      { type: "note", tone: "warn", title: "AI 요약은 초안입니다", text: "AI 요약의 각 문장을 원본 Alert와 Timeline에서 확인한 뒤 최종 보고서에 포함하세요." },
    ],
  },
];

const verifiedUiBlocks = new Set([
  "Dashboard 화면 항목",
  "Dashboard 조회 확인",
]);

const isVerifiedBlock = (block: Chapter["blocks"][number]) =>
  block.basis !== "practice" &&
  (Boolean(block.references?.length) || verifiedUiBlocks.has(block.title));

export const chapters: Chapter[] = [
  chapterCatalog.find((chapter) => chapter.id === "overview")!,
  chapterCatalog.find((chapter) => chapter.id === "cases")!,
  ...usageChapters,
].map((chapter, index) => ({
  ...chapter,
  no: String(index).padStart(2, "0"),
  blocks: chapter.blocks.filter(isVerifiedBlock),
}));
