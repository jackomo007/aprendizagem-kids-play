// Ponto de extensão: sem cookies, armazenamento, identificadores ou envio de dados.
export type LearningEvent =
  | "game_start"
  | "game_complete"
  | "quiz_start"
  | "quiz_complete"
  | "pdf_download";
export type AggregateEvent = { name: LearningEvent; contentSlug: string };
// Um adaptador de métricas agregadas poderá consumir esse tipo no futuro.
