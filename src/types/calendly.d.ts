interface Calendly {
  initInlineWidget(options: {
    url: string;
    parentElement: Element | null;
  }): void;
  destroyBadgeWidget(): void;
}

declare global {
  interface Window {
    Calendly?: Calendly;
  }
} 