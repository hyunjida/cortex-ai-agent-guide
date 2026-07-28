export type PdfReference = {
  chapter: string;
  pages: string;
};

export type ContentBasis = "pdf" | "practice";

type BlockMeta = {
  basis?: ContentBasis;
  references?: PdfReference[];
};

export type GuideBlock = BlockMeta & (
  | { type: "steps"; title: string; items: string[] }
  | { type: "check"; title: string; items: string[] }
  | { type: "note"; tone: "tip" | "warn" | "ai"; title: string; text: string }
  | { type: "code"; title: string; code: string }
  | { type: "image"; title: string; src: string; alt: string }
  | { type: "cards"; title: string; items: { title: string; text: string }[] }
);

export type Chapter = {
  id: string;
  no: string;
  title: string;
  shortTitle: string;
  description: string;
  time: string;
  audience: string;
  path?: string;
  outcomes: string[];
  blocks: GuideBlock[];
};
