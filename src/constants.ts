export interface Project {
  name: string;
  role: string;
  tech?: string;
}

export interface Experience {
  period: string;
  title: string;
  description?: string;
  projects?: Project[];
}

export interface SiteData {
  profile: {
    name: string;
    location: string;
    birthday: string;
    currentJob: string;
    motto: string;
    positions: string[];
  };
  strengths: string[];
  learningTechnologies: string[];
  experiences: Experience[];
  futureGoal: string;
  contact: {
    mail: string;
    github: string;
    discord: string;
  };
}

export const SITE_DATA: SiteData = {
  profile: {
    name: "山田 太郎", // 〇〇 の代わりに仮名を設定。編集しやすい説明コメントを追加。
    location: "東京都渋谷区", // ◯◯ の代わりに編集しやすいプレースホルダーを設定。
    birthday: "1995年04月01日", // ◯◯ の代わりにプレースホルダーを設定。
    currentJob: "現在はITスタートアップでエンジニアの傍ら、社内の管理職をしています。",
    motto: "現状維持は衰退",
    positions: [
      "フロントエンドエンジニア",
      "バックエンドエンジニア",
      "インフラエンジニア",
      "テックリード"
    ]
  },
  strengths: [
    "プロトタイプ作り",
    "効率化",
    "物事の俯瞰視点"
  ],
  learningTechnologies: [
    "GoogleAntigravity",
    "Google AI Studio",
    "コーチング",
    "ティーチング"
  ],
  experiences: [
    {
      period: "学歴",
      title: "◯◯コンピュータ技術専門学校",
      description: "最終学歴 - 情報処理科専攻"
    },
    {
      period: "前職",
      title: "株式会社Aシステムズ",
      projects: [
        { name: "電子マネー決済システムのアプリ開発", role: "テスター", tech: "Java, Jenkins" }
      ]
    },
    {
      period: "現職",
      title: "株式会社Bコープ",
      projects: [
        { name: "家庭教師派遣会社の基幹Webシステムのフロントエンド開発", role: "PG", tech: "Backbone.js" },
        { name: "IoT Platformサービス開発のフロント、バックエンド開発", role: "PG", tech: "Polymer, Go, Node.js" },
        { name: "新聞社向けグラフ生成サービスのフロントエンド改修", role: "PG", tech: "AngularJS" },
        { name: "仮想通貨系サービスサイトのフロント、バックエンド開発", role: "SE", tech: "Vue.js, Laravel" },
        { name: "鉄道会社コーポレートのCMS保守改修", role: "SE", tech: "PHP, Perl" },
        { name: "食品メーカー商品サイトの開発保守運用", role: "SE", tech: "Laravel, Symfony, Phalcon" }
      ]
    }
  ],
  futureGoal: "自分の持っている技術を活かして、地方から時代に追いつく強いコミュニティを形成していきたい",
  contact: {
    mail: "your.email@example.jp",
    github: "yourusername",
    discord: "username#1234"
  }
};
