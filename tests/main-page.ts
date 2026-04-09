import { Locator, Page } from '@playwright/test';

export class MainPage {
  constructor(page: Page, url = 'http://localhost:5173/') {
    this.url = url;
    this.page = page;
    this.sortingLabel = page.locator('.places__sorting-type');
    this.sortingList = page.locator('.places__options');
    this.sortingOption = (label: string) => page.locator('.places__option', { hasText: label });
    this.cardPrice = page.locator('.place-card__price-value'); 
  }

  private readonly url: string;

  private readonly page: Page;

  public readonly sortingLabel: Locator;

  public readonly sortingList: Locator;

  public readonly sortingOption: (label: string) => Locator;

  public readonly cardPrice: Locator;

  public async load(): Promise<void> {
    await this.page.goto(this.url);
  }
}
